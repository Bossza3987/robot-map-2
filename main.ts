let senBack = 0
function LeftS () {
    while (!(iBIT.ReadADC(ibitReadADC.ADC4) < senBack)) {
        iBIT.Motor2(ibitMotor.Forward, 50, -50)
    }
}
function Mission1 () {
	
}
function RightS () {
    while (!(iBIT.ReadADC(ibitReadADC.ADC4) < senBack)) {
        iBIT.Motor2(ibitMotor.Forward, -50, 50)
    }
}
input.onButtonPressed(Button.A, function () {
	
})
function Help () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P0, 0)
}
input.onButtonPressed(Button.B, function () {
	
})
function Run () {
    let senLeft = 0
    if (iBIT.ReadADC(ibitReadADC.ADC1) < senLeft) {
        iBIT.Motor2(ibitMotor.Forward, 50, 0)
    } else {
        let senRight = 0
        if (iBIT.ReadADC(ibitReadADC.ADC2) < senRight) {
            iBIT.Motor2(ibitMotor.Forward, 0, 50)
        } else {
            iBIT.Motor2(ibitMotor.Forward, 50, 50)
        }
    }
}
