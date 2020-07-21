function DecimalParaLED () {
    ResultadoTemporario = NumeroAleatorio
    if (ResultadoTemporario >= 16) {
        led.plot(0, 2)
        ResultadoTemporario = ResultadoTemporario - 16
    }
    if (ResultadoTemporario >= 8) {
        led.plot(1, 2)
        ResultadoTemporario = ResultadoTemporario - 8
    }
    if (ResultadoTemporario >= 4) {
        led.plot(2, 2)
        ResultadoTemporario = ResultadoTemporario - 4
    }
    if (ResultadoTemporario >= 2) {
        led.plot(3, 2)
        ResultadoTemporario = ResultadoTemporario - 2
    }
    if (ResultadoTemporario == 1) {
        led.plot(4, 2)
        ResultadoTemporario = ResultadoTemporario - 1
    }
}
input.onButtonPressed(Button.A, function () {
    basic.showNumber(NumeroAleatorio)
})
input.onGesture(Gesture.Shake, function () {
    NumeroAleatorio = randint(0, 31)
    ResultadoTemporario = 0
    basic.clearScreen()
    DecimalParaLED()
})
let ResultadoTemporario = 0
let NumeroAleatorio = 0
NumeroAleatorio = 0
ResultadoTemporario = 0
