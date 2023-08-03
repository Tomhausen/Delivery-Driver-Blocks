namespace SpriteKind {
    export const drop_off = SpriteKind.create()
    export const house = SpriteKind.create()
}
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
let delivery_pos: tiles.Location = null
let house_pos: tiles.Location = null
let house_locations: tiles.Location[] = []
let drop_off_sprite: Sprite = null
let parcel: Sprite = null
let car_dir = 0
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
game.onUpdate(function () {
    accelerate()
    turn()
    calculate_velocities()
})
