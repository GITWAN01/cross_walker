let num = 0
basic.forever(function () {
    basic.showString("" + (num))
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P20) == 0) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        if (pins.digitalReadPin(DigitalPin.P20) == 0) {
            for (let index = 0; index < 3; index++) {
                pins.digitalWritePin(DigitalPin.P8, 0)
                pins.digitalWritePin(DigitalPin.P2, 0)
                pins.digitalWritePin(DigitalPin.P14, 1)
                basic.pause(200)
                pins.digitalWritePin(DigitalPin.P8, 0)
                pins.digitalWritePin(DigitalPin.P2, 0)
                pins.digitalWritePin(DigitalPin.P14, 0)
                basic.pause(200)
            }
            num = 7
            for (let index = 0; index < 7; index++) {
                basic.pause(1000)
                num += -1
            }
            basic.pause(500)
            pins.digitalWritePin(DigitalPin.P8, 1)
            pins.digitalWritePin(DigitalPin.P2, 0)
            pins.digitalWritePin(DigitalPin.P14, 0)
            num = 30
            for (let index = 0; index < 30; index++) {
                basic.pause(1500)
                num += -1
            }
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.digitalWritePin(DigitalPin.P2, 0)
            pins.digitalWritePin(DigitalPin.P14, 1)
            basic.pause(1000)
        } else {
        	
        }
    } else {
    	
    }
})
