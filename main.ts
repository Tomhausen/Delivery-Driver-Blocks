namespace SpriteKind {
    export const drop_off = SpriteKind.create()
    export const house = SpriteKind.create()
    export const minimap = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (Math.abs(speed) > 50) {
        seconds_since_damage = 0
        info.changeLifeBy(-1)
    }
    speed = 0
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (minimap_open) {
        minimap_sprite.setFlag(SpriteFlag.Invisible, true)
        minimap_open = false
    } else {
        minimap_sprite.setFlag(SpriteFlag.Invisible, false)
        minimap_open = true
    }
})
function calculate_velocities () {
    car_dir = spriteutils.degreesToRadians(transformSprites.getRotation(car))
    car.vx = Math.sin(car_dir) * speed
    car.vy = Math.cos(car_dir) * (speed * -1)
}
function spawn_parcel () {
    parcel = sprites.create(assets.image`parcel`, SpriteKind.Food)
    place_parcel(parcel)
}
function select_target () {
    drop_off_sprite = sprites.create(image.create(16, 16), SpriteKind.drop_off)
    animation.runImageAnimation(
    drop_off_sprite,
    assets.animation`drop off`,
    200,
    true
    )
    house_locations = tiles.getTilesByType(assets.tile`house spawn`)
    house_pos = house_locations[randint(0, house_locations.length - 1)]
    delivery_pos = tiles.getTileLocation(house_pos.column, house_pos.row + 1)
    tiles.placeOnTile(drop_off_sprite, delivery_pos)
}
function minimap_setup () {
    minimap_object = minimap.minimap(MinimapScale.Quarter, 2, 0)
    minimap_image = minimap.getImage(minimap_object)
    minimap_sprite = sprites.create(minimap_image, SpriteKind.minimap)
    minimap_sprite.z = 10
    minimap_sprite.setFlag(SpriteFlag.RelativeToCamera, true)
    minimap_sprite.setFlag(SpriteFlag.Invisible, true)
}
function turn () {
    if (controller.right.isPressed()) {
        steer += steer_amount
    } else if (controller.left.isPressed()) {
        steer += steer_amount * -1
    }
    steer = steer * steer_reduction
    transformSprites.changeRotation(car, steer * speed)
}
function setup_level () {
    tiles.placeOnTile(car, tiles.getTileLocation(2, 2))
    for (let tile of tiles.getTilesByType(assets.tile`house spawn`)) {
        house_sprite = sprites.create(assets.image`house`, SpriteKind.house)
        house_sprite.scale = 0.75
        tiles.placeOnTile(house_sprite, tile)
        house_sprite.y += -12
    }
    spawn_parcel()
}
function place_parcel (parcel: Sprite) {
    col = randint(1, grid.numColumns() - 1)
    row = randint(1, grid.numRows() - 1)
    tiles.placeOnTile(parcel, tiles.getTileLocation(col, row))
    if (tiles.tileAtLocationIsWall(parcel.tilemapLocation())) {
        place_parcel(parcel)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.drop_off, function (car, drop_off) {
    has_parcel = false
    info.changeScoreBy(100)
    spawn_parcel()
    drop_off.destroy()
})
function accelerate () {
    if (controller.up.isPressed()) {
        speed += acceleration
    } else if (controller.down.isPressed()) {
        speed += acceleration * -1
    }
    speed = speed * deceleration
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (car, parcel) {
    has_parcel = true
    parcel.destroy()
    select_target()
})
let row = 0
let col = 0
let house_sprite: Sprite = null
let minimap_image: Image = null
let minimap_object: minimap.Minimap = null
let delivery_pos: tiles.Location = null
let house_pos: tiles.Location = null
let house_locations: tiles.Location[] = []
let drop_off_sprite: Sprite = null
let parcel: Sprite = null
let car_dir = 0
let minimap_sprite: Sprite = null
let seconds_since_damage = 0
let minimap_open = false
let car: Sprite = null
let has_parcel = false
let steer_reduction = 0
let deceleration = 0
let steer_amount = 0
let acceleration = 0
let steer = 0
let speed = 0
speed = 0
steer = 10
acceleration = 10
steer_amount = 0.05
deceleration = 0.9
steer_reduction = 0.5
has_parcel = false
info.setScore(0)
info.startCountdown(120)
tiles.setCurrentTilemap(tilemap`level`)
car = sprites.create(assets.image`car`, SpriteKind.Player)
transformSprites.rotateSprite(car, 90)
scene.cameraFollowSprite(car)
setup_level()
minimap_open = false
minimap_setup()
info.setLife(5)
seconds_since_damage = 0
game.onUpdate(function () {
    accelerate()
    turn()
    calculate_velocities()
})
game.onUpdateInterval(1000, function () {
    if (seconds_since_damage < 10) {
        seconds_since_damage += 1
    } else {
        if (info.life() < 5) {
            info.changeLifeBy(1)
        }
        seconds_since_damage = 0
    }
    console.log(seconds_since_damage)
})
game.onUpdateInterval(100, function () {
    if (minimap_open) {
        minimap_object = minimap.minimap(MinimapScale.Quarter, 2, 0)
        minimap.includeSprite(minimap_object, car)
        for (let value of sprites.allOfKind(SpriteKind.house)) {
            minimap.includeSprite(minimap_object, value)
        }
        if (has_parcel) {
            drop_off_sprite = sprites.allOfKind(SpriteKind.drop_off)[0]
            minimap.includeSprite(minimap_object, drop_off_sprite)
        } else {
            parcel = sprites.allOfKind(SpriteKind.Food)[0]
            minimap.includeSprite(minimap_object, parcel)
        }
        minimap_sprite.setImage(minimap.getImage(minimap_object))
    }
})
