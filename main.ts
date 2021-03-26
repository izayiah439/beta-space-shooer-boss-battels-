namespace SpriteKind {
    export const boss = SpriteKind.create()
    export const op_food = SpriteKind.create()
    export const god_food = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.boss, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-2)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, 0)
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, otherSprite) {
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    info.setLife(10)
})
sprites.onOverlap(SpriteKind.god_food, SpriteKind.Player, function (sprite, otherSprite) {
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    info.setLife(100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.boss, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    scene.cameraShake(8, 1000)
    info.changeScoreBy(5)
})
sprites.onOverlap(SpriteKind.op_food, SpriteKind.Player, function (sprite, otherSprite) {
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, space_plane, 2000, randint(5, 115))
    info.setLife(20)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    scene.cameraShake(4, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let power_guns: Sprite = null
let bogey: Sprite = null
let op_food2: Sprite = null
let boss2: Sprite = null
let dimond: Sprite = null
let projectile: Sprite = null
let space_plane: Sprite = null
effects.starField.startScreenEffect()
if (game.ask("is 100x100 1000?")) {
    game.splash("good")
    info.setLife(6)
} else {
    game.splash("bad")
    info.setLife(4)
}
game.splash("high score 1k")
space_plane = sprites.create(assets.image`galgaPlane1`, SpriteKind.Player)
controller.moveSprite(space_plane, 200, 200)
space_plane.setStayInScreen(true)
game.onUpdateInterval(180000, function () {
    dimond = sprites.create(assets.image`dimond`, SpriteKind.god_food)
    dimond.setVelocity(-100, 0)
    dimond.setPosition(160, randint(5, 115))
    dimond.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(60000, function () {
    boss2 = sprites.create(assets.image`Fast n Blurrious`, SpriteKind.boss)
    boss2.setVelocity(-100, 0)
    boss2.setPosition(160, randint(5, 115))
    boss2.setFlag(SpriteFlag.AutoDestroy, true)
    boss2.setBounceOnWall(true)
    music.playMelody("D E C D E C D E ", 112)
})
game.onUpdateInterval(60000, function () {
    boss2 = sprites.create(assets.image`Fast n Blurrious`, SpriteKind.boss)
    boss2.setVelocity(-100, 0)
    boss2.setPosition(160, randint(5, 115))
    boss2.setFlag(SpriteFlag.AutoDestroy, true)
    boss2.setBounceOnWall(true)
})
game.onUpdateInterval(60000, function () {
    boss2 = sprites.create(assets.image`Fast n Blurrious`, SpriteKind.boss)
    boss2.setVelocity(-100, 0)
    boss2.setPosition(160, randint(5, 115))
    boss2.setFlag(SpriteFlag.AutoDestroy, true)
    boss2.setBounceOnWall(true)
})
game.onUpdateInterval(30000, function () {
    op_food2 = sprites.create(assets.image`op food`, SpriteKind.op_food)
    op_food2.setVelocity(-100, 0)
    op_food2.setPosition(160, randint(5, 115))
    op_food2.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(500, function () {
    bogey = sprites.create(assets.image`Spider0`, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(160, randint(5, 115))
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(10000, function () {
    power_guns = sprites.create(assets.image`power guns`, SpriteKind.Food)
    power_guns.setVelocity(-100, 0)
    power_guns.setPosition(160, randint(5, 115))
    power_guns.setFlag(SpriteFlag.AutoDestroy, true)
})
