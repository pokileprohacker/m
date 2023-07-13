music.play(music.stringPlayable("C5 G B F B A C5 A ", 120), music.PlaybackMode.UntilDone)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    . . . . . . . . 1 1 1 . . . . . 
    . . . . . . . 1 1 . 5 . . . . . 
    . . . . . . . 1 . . 5 5 . . . . 
    . . . . . . 1 . . . . 5 . . . . 
    . . . . . . 1 . . 7 . 5 5 . . . 
    . . . . . 1 . . 7 7 7 7 5 . . . 
    . . . . . 1 . . 7 7 f . 5 . . . 
    . . . . . 1 . . . 7 7 . 5 . . . 
    . . . . . . 1 1 . . 7 . 5 . . . 
    . . . . . . . . 1 1 1 5 . . . . 
    . . . . . . . . . . . 1 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player))
controller.moveSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 f f f 3 3 3 3 3 3 3 f f f 3 3 
    f f 3 f f 3 3 3 3 3 f 3 f f 3 3 
    f f f f f f 3 3 3 f f f f f f 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 f 3 3 3 3 3 3 3 3 3 f 3 3 3 
    3 3 3 f 3 3 3 3 3 3 3 f 3 3 3 3 
    3 3 3 3 f f f f f f f 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player))
controller.player2.moveSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)))
music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 f f 3 3 3 3 3 3 f f 3 3 3 
    3 3 3 3 f f f 3 3 3 f f 3 3 3 3 
    3 3 3 f f 3 3 3 3 f f f f 3 3 3 
    3 3 3 f 3 f 3 3 3 3 f 3 f 3 3 3 
    3 3 3 f f f f 3 3 f f f f 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 f f f f f f f 3 3 3 3 3 
    3 3 3 f 3 f 3 3 3 3 f f 3 3 3 3 
    3 3 f 3 3 3 3 3 3 3 3 f f 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player))
controller.player3.moveSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)))
music.play(music.stringPlayable("A F E F D G E F ", 120), music.PlaybackMode.UntilDone)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(img`
    f f f f f f f f f 3 3 3 3 3 3 3 
    f f f f f f f f f 3 3 3 3 3 3 3 
    f f f f f f f f 3 3 3 3 3 3 3 3 
    f f 2 2 f f f f 3 3 3 3 f f 3 3 
    f f 2 f 2 f f f 3 3 3 f 3 f 3 3 
    f f 2 2 2 2 f f 3 3 f f f f 3 3 
    f f f f f f f f 3 3 3 3 3 3 3 3 
    f f f f f f f f 3 3 3 3 3 3 3 3 
    f f 2 f f f f 3 3 3 3 3 3 f 3 3 
    f f f 2 f f 3 3 3 3 3 3 f 3 3 3 
    f f f f 2 2 f f f f f f 3 3 3 3 
    f f f f f f 3 3 3 3 3 3 3 3 3 3 
    f f f f f 3 3 3 3 3 3 3 3 3 3 3 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player))
controller.player4.moveSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)))
