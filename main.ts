/**
 * Helper blocks to make the traffic light module easier to use.
 */
//% block="Traffic Lights"
namespace keyestudioTrafficLight {
    
    // To keep track of the pin used for each light
    let redPin: DigitalPin | null = null;
    let yellowPin: DigitalPin | null = null;
    let greenPin: DigitalPin | null = null;

    // To keep track of the state of each light.
    let redLight: boolean = false;
    let yellowLight: boolean = false;
    let greenLight: boolean = false;

    // Enum for each light type for drop down menus
    enum Light {
        Red,
        Yellow,
        Green,
    }

    /**
     * Maps the pins provided to each light. (R for red, Y for yellow, G for green)
     */
    //% block="set pins R: $red, Y: $yellow, G: $green"
    export function setPins(red = DigitalPin.P2, yellow = DigitalPin.P1, green = DigitalPin.P0): void {
        redPin = red;
        yellowPin = yellow;
        greenPin = green;        
    }


}
