controller.B.onEvent(ControllerButtonEvent.Pressed, function on_b_pressed() {
    
    myVar = 0
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    
    myVar += 1
})
function myFunction() {
    game.splash("" + "My var is " + ("" + ("" + myVar)))
}

controller.down.onEvent(ControllerButtonEvent.Pressed, function on_down_pressed() {
    myFunction()
})
let myVar = 0
myVar = 0
