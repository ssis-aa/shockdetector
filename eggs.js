/**
 * Paste the code below into a new project at https://makecode.microbit.org
 */
function isAccelerationMoreThanIsAllowed (accelerationMagnitude: number) {
    // This is the maximum strength of acceleration allowed in the system.
    maximumAllowedAcceleration = 12
    if (accelerationMagnitude >= maximumAllowedAcceleration) {
        return true
    } else {
        return false
    }
}
function displayAccelerationFeedback (accelerationBeyondMaximum: boolean) {
    // This function runs two different functions depending on whether the acceleration is above the threshold (maximum) or not.
    // You might say that this function isn't really necessary - it is a simple if/then statement after all.
    // The reason I have included it here is to give an example of separating the processing of inputs and variables from
    // responses to those inputs. This separation of responsibilities allows for testing to make sure that each works correctly
    // in isolation. This can be really helpful in debugging.
    if (accelerationBeyondMaximum == true) {
        showNegativeFeedback()
    } else {
        showPositiveFeedback()
    }
}
function printAccelerationString (values: number[]) {
    // The readAccelerometer function has an array of acceleration values as its output.
    // This function takes a three element array of acceleration values and prints out a message with these
    // accelerations, the acceleration magnitude (strength), and whether or not the acceleration is more
    // than the maximum allowed by the system.
    ax3 = values[0]
    ay3 = values[1]
    az3 = values[2]
    aMagnitude2 = calculateAccelerationMagnitude(values)
    // Printing values to the serial port is a great way to make sure the system is working as expected.
    // This works in the
    accelString = "" + ax3 + "," + ay3 + "," + az3 + "," + aMagnitude2 + "," + isAccelerationMoreThanIsAllowed(aMagnitude2)
    serial.writeLine(accelString)
}
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
function scaleAccelerometerToMetersAndSeconds (accelerometerReading: number) {
    // This converts sensor values from the accelerometer (which are between -1023 to 1023) to real worlds values.
    minimumAccelerometerReading = -1023
    maximumAccelerometerReading = 1023
    // this is the acceleration of Earth's gravity on the surface downwards.
    minimumAccelerometerValue = -9.81
    // ...and this is that same acceleration upwards.
    maximumAccelerometerValue = 9.81
    // The map function takes a value x, which is between A and B, and scales it to a value that is between C and D.
    scaledValue = Math.map(accelerometerReading, minimumAccelerometerReading, maximumAccelerometerReading, minimumAccelerometerValue, maximumAccelerometerValue)
    return scaledValue
}
function showNegativeFeedback () {
    basic.showIcon(IconNames.Sad)
    basic.pause(50000)
}
function setMaximumAccelerationFlagIfExceededMaximum (accelerationBeyondMaximum: boolean) {
    let maxAccelerationWasExceeded = 0
    if (maxAccelerationWasExceeded) {
        accelerationBeyondMaximum2 = true
    } else {
    	
    }
}
function readAccelerometer () {
    // To access the value of the acceleration sensor, you use the input.acceleration function.
    ax = input.acceleration(Dimension.X)
    ay = input.acceleration(Dimension.Y)
    az = input.acceleration(Dimension.Z)
    // The sensor values are from -1023 to 1023, but the accelerometer can be scaled to be real world units.
    // The function scaleAccelerometerToMetersAndSeconds takes care of this conversion.
    axScaled = scaleAccelerometerToMetersAndSeconds(ax)
    ayScaled = scaleAccelerometerToMetersAndSeconds(ay)
    azScaled = scaleAccelerometerToMetersAndSeconds(az)
    // This function returns an array of values, one for each direction x, y, z.
    return [axScaled, ayScaled, azScaled]
}
// The same thing about separating responsibility applies to these two small one-line functions.
function showPositiveFeedback () {
    basic.showIcon(IconNames.Happy)
}
function calculateAccelerationMagnitude (values: number[]) {
    // To access information stored in arrays, you put the index of the information you want in brackets.
    // The first storage slot is 0, the second is 1, and so on.
    ax2 = values[0]
    ay2 = values[1]
    az2 = values[2]
    // The magnitude of a 3D vector can be calculated by squaring each component, adding these squares,
    // and taking the square root.
    aMagnitude = Math.sqrt(ax2 * ax2 + ay2 * ay2 + az2 * az2)
    return aMagnitude
}
let accelerationBeyondMaximum = false
let accelerationAndMagnitude: number[] = []
let accelerationMagnitude = 0
let accelerationValues: number[] = []
let aMagnitude = 0
let az2 = 0
let ay2 = 0
let ax2 = 0
let azScaled = 0
let ayScaled = 0
let axScaled = 0
let az = 0
let ay = 0
let ax = 0
let accelerationBeyondMaximum2 = false
let scaledValue = 0
let maximumAccelerometerValue = 0
let minimumAccelerometerValue = 0
let maximumAccelerometerReading = 0
let minimumAccelerometerReading = 0
let accelString = ""
let aMagnitude2 = 0
let az3 = 0
let ay3 = 0
let ax3 = 0
let maximumAllowedAcceleration = 0
let accelerationBeyondMaximum3 = false
basic.forever(function () {
    // store readings from the accelerometer into an array variable
    accelerationValues = readAccelerometer()
    // calculate the magnitude of acceleration from the array of accelerometer values
    accelerationMagnitude = calculateAccelerationMagnitude(accelerationValues)
    // create an array of the three acceleration values and the magnitude
    accelerationAndMagnitude = [
    accelerationValues[0],
    accelerationValues[1],
    accelerationValues[2],
    accelerationMagnitude
    ]
    // check if the acceleration magnitude is more than is allowed by the system
    accelerationBeyondMaximum = isAccelerationMoreThanIsAllowed(accelerationMagnitude)
    // use this value to set the maximum acceleration was reached variable to be either true or false
    setMaximumAccelerationFlagIfExceededMaximum(accelerationBeyondMaximum)
    // display feedback about acceleration
    displayAccelerationFeedback(accelerationBeyondMaximum)
    // for debugging purposes, print out a string that shows the acceleration, among other things
    printAccelerationString(accelerationAndMagnitude)
    // Include a brief pause of the system before looping again
    basic.pause(5)
})
