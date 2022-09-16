function LeftS () {
    while (!(iBIT.ReadADC(ibitReadADC.ADC4) < senBack)) {
        iBIT.Motor2(ibitMotor.Forward, 50, -50)
    }
}
function Mission1 () {
    Point = 0
    while (!(Point == 1)) {
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 0) {
            Point += 1
        }
        Run()
    }
    iBIT.MotorStop()
}
function RightS () {
    while (!(iBIT.ReadADC(ibitReadADC.ADC4) < senBack)) {
        iBIT.Motor2(ibitMotor.Forward, -50, 50)
    }
}
function PassBack (num2: number) {
    iBIT.Motor2(ibitMotor.Forward, -50, -50)
    basic.pause(num2 / GoInOne_cm)
    iBIT.Motor2(ibitMotor.Forward, 0, 0)
}
function Mission6 () {
    Point = 0
    while (!(Point == 20)) {
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 0) {
            RightS()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 1) {
            RightS()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 2) {
            RightS()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 3) {
            LeftS()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 4) {
            LeftS()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 5) {
            Help()
            PassBack(30)
            Lsec()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 6) {
            while (iBIT.ReadADC(ibitReadADC.ADC3) < senMid) {
                iBIT.Motor2(ibitMotor.Forward, 50, 50)
            }
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 7) {
            Lsec()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 8) {
            Lsec()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 9) {
            Help()
            while (!(iBIT.ReadADC(ibitReadADC.ADC4) < senBack)) {
                iBIT.Motor2(ibitMotor.Forward, -50, -50)
            }
            Pass(13)
            Rsec()
            Pass(60)
            Rsec()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 10) {
            Lsec()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 11) {
            Help()
            PassBack(25)
            Lsec()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 12) {
            Lsec()
            Pass(30)
            Rsec()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 13) {
            while (iBIT.ReadADC(ibitReadADC.ADC3) < senMid) {
                iBIT.Motor2(ibitMotor.Forward, 50, 50)
            }
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 14) {
            Rsec()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 15) {
            RightS()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 16) {
            LeftS()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 17) {
            LeftS()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 18) {
            LeftS()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 19) {
            Point += 1
        }
        Run()
    }
    iBIT.MotorStop()
}
input.onButtonPressed(Button.A, function () {
    basic.pause(500)
    if (MissionRun == 0) {
        TestGoInOne()
    } else if (MissionRun == 1) {
    	
    } else if (MissionRun == 2) {
    	
    } else if (MissionRun == 3) {
    	
    } else if (MissionRun == 4) {
    	
    } else if (MissionRun == 5) {
    	
    } else if (MissionRun == 6) {
    	
    } else {
    	
    }
})
function Mission4 () {
    Point = 0
    while (!(Point == 6)) {
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 0) {
            RightS()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 1) {
            RightS()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 2) {
            RightS()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 3) {
            PassBack(12)
            Lsec()
            Pass(30)
            Lsec()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 4) {
            while (iBIT.ReadADC(ibitReadADC.ADC3) < senMid) {
                iBIT.Motor2(ibitMotor.Forward, 50, 50)
            }
            Pass(30)
            Lsec()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 5) {
            Point += 1
        }
        Run()
    }
    iBIT.MotorStop()
}
function Pass (num: number) {
    iBIT.Motor2(ibitMotor.Forward, 50, 50)
    basic.pause(num / GoInOne_cm)
    iBIT.Motor2(ibitMotor.Forward, 0, 0)
}
function Mission3 () {
    Point = 0
    while (!(Point == 5)) {
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 0) {
            RightS()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 1) {
            RightS()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 2) {
            RightS()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 3) {
            LeftS()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 4) {
            iBIT.MotorStop()
            Help()
            Point += 1
        }
        Run()
    }
    iBIT.MotorStop()
}
function Help () {
    iBIT.MotorStop()
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P0, 0)
}
function TestGoInOne () {
    iBIT.Motor2(ibitMotor.Forward, 50, 50)
    basic.pause(1000)
    iBIT.Motor2(ibitMotor.Forward, 0, 0)
}
input.onButtonPressed(Button.B, function () {
    if (MissionRun >= 6) {
        MissionRun = 0
    } else {
        MissionRun += 1
    }
    basic.showNumber(MissionRun)
})
function Run () {
    if (iBIT.ReadADC(ibitReadADC.ADC1) < senLeft) {
        iBIT.Motor2(ibitMotor.Forward, 50, 0)
    } else {
        if (iBIT.ReadADC(ibitReadADC.ADC2) < senRight) {
            iBIT.Motor2(ibitMotor.Forward, 0, 50)
        } else {
            iBIT.Motor2(ibitMotor.Forward, 50, 50)
        }
    }
}
function Mission5 () {
    Point = 0
    while (!(Point == 8)) {
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 0) {
            RightS()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 1) {
            RightS()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 2) {
            RightS()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 3) {
            PassBack(12)
            Lsec()
            Pass(30)
            Lsec()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 4) {
            while (iBIT.ReadADC(ibitReadADC.ADC3) < senMid) {
                iBIT.Motor2(ibitMotor.Forward, 50, 50)
            }
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 5) {
            Rsec()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 6) {
            Rsec()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 7) {
            iBIT.MotorStop()
            Help()
            Point += 1
        }
        Run()
    }
    iBIT.MotorStop()
}
function Rsec () {
    iBIT.Motor2(ibitMotor.Forward, 50, -50)
    basic.pause(_2r_robot * 3.14159 / 4 / GoInOne_cm)
    iBIT.Motor2(ibitMotor.Forward, 0, 0)
}
function Lsec () {
    iBIT.Motor2(ibitMotor.Forward, -50, 50)
    basic.pause(_2r_robot * 3.14159 / 4 / GoInOne_cm)
    iBIT.Motor2(ibitMotor.Forward, 0, 0)
}
function Mission2 () {
    Point = 0
    while (!(Point == 2)) {
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 0) {
            RightS()
            Point += 1
        }
        if (iBIT.ReadADC(ibitReadADC.ADC3) < senMid && Point == 1) {
            Point += 1
        }
        Run()
    }
    iBIT.MotorStop()
}
let Point = 0
let senBack = 0
let senMid = 0
let senRight = 0
let senLeft = 0
let GoInOne_cm = 0
let _2r_robot = 0
let MissionRun = 0
MissionRun = 0
_2r_robot = 0
GoInOne_cm = 0
senLeft = 2500
senRight = 2500
senMid = 2500
senBack = 2500
basic.showNumber(MissionRun)
