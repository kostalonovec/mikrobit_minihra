probehnuty_stisk = False
cas = 1000
def on_forever():
    
    global probehnuty_stisk
    global cas

    if input.button_is_pressed(Button.A):
        music.play_tone(262, music.beat(cas))
        #basic.show_number(cas)  # tohle je pouze pro kontrolu rychlost


    if input.button_is_pressed(Button.B):
        cas = randint(250, 3000)
        music.play_tone(262, music.beat(cas))
        #basic.show_number(cas)  # tohle je pouze pro kontrolu rychlosti

    if input.logo_is_pressed():
        def onEvery_interval():
            pass
        loops.every_interval(50, onEvery_interval)# určená rychlost je 50milisekund
        cas = cas - 50
        probehnuty_stisk = True

    if input.logo_is_pressed() == False and probehnuty_stisk ==True:
        if cas >= -50 and cas <= 50:
            basic.show_leds("""
                . . . . .
                . . . . #
                . . . # .
                # . # . .
                . # . . .
            """)
            probehnuty_stisk = False

        else:
            basic.show_number(cas)
            probehnuty_stisk = False

basic.forever(on_forever)