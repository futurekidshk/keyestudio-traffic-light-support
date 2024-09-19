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

    /**
     * Maps the pins provided to each light. (R for red, Y for yellow, G for green)
     * @param red The pin connected to the red light.
     * @param yellow The pin connected to the yellow light.
     * @param green The pin connected to the green light.
     */
    //% block="set pins R: $red, Y: $yellow, G: $green"
    export function setPins(red: DigitalPin, yellow: DigitalPin, green: DigitalPin): void {
        red |= DigitalPin.P2;
        yellow |= DigitalPin.P1;
        green |= DigitalPin.P0

        redPin = red;
        yellowPin = yellow;
        greenPin = green;
    }

    /**
     * Checks if all the lights have been mapped to a pin or not.
     */
    //% block="is pins mapped"
    export function isPinsMapped(): boolean {
        if (redPin === null || yellowPin === null || greenPin === null) {
            return false;
        } else {
            return true;
        }
    }

    /**
     * Checks if the given light is turned on.
     * @param light The color of the light.
     */
    //% block="is $light light on"
    export function isOn(light = Light.Red): boolean {
        switch (light) {
            case Light.Red:
                return redLight;
            case Light.Yellow:
                return yellowLight;
            case Light.Green:
                return greenLight;
            default:
                return false;
        }
    }

    /**
     * Updates all the lights according to their variables. In most cases, this block is not needed.
     */
    //% block="update lights"
    export function updateLights(): void {
        pins.digitalWritePin(redPin, redLight ? 1 : 0);
        pins.digitalWritePin(yellowPin, yellowLight ? 1 : 0);
        pins.digitalWritePin(greenPin, greenLight ? 1 : 0);
    }
    /**
     * Sets the given light to on or off. If the given light already has the given state, nothing happens.
     */
    //% block="turn $light light $state"
    export function setLight(light = Light.Red, state = LightState.On): void {
        if (state === LightState.On) {
            switch(light) {
                case Light.Red:
                    redLight = true;
                    break;
                case Light.Yellow:
                    yellowLight = true;
                    break;
                case Light.Green:
                    greenLight = true;
                    break;
            }
        } else {
            switch (light) {
                case Light.Red:
                    redLight = false;
                    break;
                case Light.Yellow:
                    yellowLight = false;
                    break;
                case Light.Green:
                    greenLight = false;
                    break;
            }
        }
        updateLights();
    }

    /**
     * Toggles the light. For example if the light was on, it will be set to off.
     */
    //% block="toggle $light light"
    export function toggleLight(light = Light.Red): void {
        switch(light) {
            case Light.Red:
                redLight = !redLight;
                break;
            case Light.Yellow:
                yellowLight = !yellowLight;
                break;
            case Light.Green:
                greenLight = !greenLight;
                break;
        }
        updateLights();
    }
}

// Enum for each light type for drop down menus
enum Light {
    Red,
    Yellow,
    Green,
}

// Enum to make light state choices more user friendly.
enum LightState {
    On = 1,
    Off = 0,
}

