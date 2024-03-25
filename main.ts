MbitMore.onReceivedNumberWithLabel("C_speed", function (numberData) {
    speed = numberData
    robotbit.MotorRun(robotbit.Motors.M1A, speed)
})
let speed = 0
MbitMore.startService()
robotbit.MotorStopAll()
ModulePlus.ds18init(DigitalPin.P1)
basic.forever(function () {
    MbitMore.sendNumberWithLabel("wt", ModulePlus.DSTemperature(DigitalPin.P1))
    basic.pause(1000)
})
