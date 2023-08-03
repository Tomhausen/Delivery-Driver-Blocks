// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level":
            case "level2":return tiles.createTilemap(hex`1d001d00010101010101010101010101010101010101010101010101010101010101050202020202020202020202020202020202020202020202020206010103050202020202020202020202020202020202020202020202060301010303050202020202020202020c0c0c020202020202020202060303010103030301010101010101010103030301010101010101010103030301010303030101010101010101010303030101010101010101010303030101030303010108010101080101030303010108010101080101030303010103030a0202020202020202020b030a0202020202020202020b0303010103030a0202020202020202020b030a0202020202020202020b0303010103030a0202020202020202020b030a0202020202020202020b0303010103030301010101010101010103030301010101010101010103030301010303030101010101010101010303030101010101010101010303030101030303010108010101080101030303010108010101080101030303010103030a0202020202020202020b030a0202020202020202020b0303010103030a0202020202020202020b030a0202020202020202020b0303010103030a0202020202020202020b030a0202020202020202020b0303010103030301010101010101010103030301010101010101010103030301010303030101010101010101010303030101010101010101010303030101030303010108010101080101030303010108010101080101030303010103030a0202020202020202020b030a0202020202020202020b0303010103030a0202020202020202020b030a0202020202020202020b0303010103030a0202020202020202020b030a0202020202020202020b0303010103030301010101010101010103030301010101010101010103030301010303030101010101010101010303030101010101010101010303030101030303010108010101080101030303010108010101080101030303010103030702020202020202020209090902020202020202020204030301010307020202020202020202020202020202020202020202020204030101070202020202020202020202020202020202020202020202020204010101010101010101010101010101010101010101010101010101010101`, img`
22222222222222222222222222222
2...........................2
2...........................2
2...........................2
2...........................2
2....222.222.....222.222....2
2....222.222.....222.222....2
2...........................2
2...........................2
2...........................2
2...........................2
2....222.222.....222.222....2
2....222.222.....222.222....2
2...........................2
2...........................2
2...........................2
2...........................2
2....222.222.....222.222....2
2....222.222.....222.222....2
2...........................2
2...........................2
2...........................2
2...........................2
2....222.222.....222.222....2
2....222.222.....222.222....2
2...........................2
2...........................2
2...........................2
22222222222222222222222222222
`, [myTiles.transparency16,sprites.castle.tileGrass2,myTiles.tile1,myTiles.tile2,myTiles.tile5,myTiles.tile3,myTiles.tile4,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "horizontal road":
            case "tile1":return tile1;
            case "vertical road":
            case "tile2":return tile2;
            case "bottom right":
            case "tile5":return tile5;
            case "top left":
            case "tile3":return tile3;
            case "top right":
            case "tile4":return tile4;
            case "bottom left":
            case "tile6":return tile6;
            case "house spawn":
            case "tile7":return tile7;
            case "junction bottom":
            case "tile8":return tile8;
            case "junction left":
            case "tile9":return tile9;
            case "junction right":
            case "tile10":return tile10;
            case "junction top":
            case "tile11":return tile11;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
