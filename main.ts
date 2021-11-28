let probehnuty_stisk = false
let cas = 1000
basic.forever(function on_forever() {
    
    
    if (input.buttonIsPressed(Button.A)) {
        music.playTone(262, music.beat(cas))
    }
    
    // basic.show_number(cas)  # tohle je pouze pro kontrolu rychlost
    if (input.buttonIsPressed(Button.B)) {
        cas = randint(250, 3000)
        music.playTone(262, music.beat(cas))
    }
    
    // basic.show_number(cas)  # tohle je pouze pro kontrolu rychlosti
    if (input.logoIsPressed()) {
        loops.everyInterval(50, function onEvery_interval() {
            
        })
        //  určená rychlost je 50milisekund
        cas = cas - 50
        probehnuty_stisk = true
    }
    
    if (input.logoIsPressed() == false && probehnuty_stisk == true) {
        if (cas >= -50 && cas <= 50) {
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . # .
                # . # . .
                . # . . .
            `)
            probehnuty_stisk = false
        } else {
            basic.showNumber(cas)
            probehnuty_stisk = false
        }
        
    }
    
})
