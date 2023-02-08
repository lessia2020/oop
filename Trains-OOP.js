class Train {

    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }

    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }

    lightsStatus() {
        console.log("Lights on? ", this.lightsOn);
    }

    getSelf() {
        console.log(this);
    }

    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}



class highSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn){
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }

    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log("High speed status: ", this.highSpeedOn);
    }

    toggleLights() {
        super.toggleLights;
        super.lightsStatus;
    }

}





var myFirstTrain = new Train("red", true);
//console.log(myFirstTrain);
mySecondTrain = new Train("green", false);
myThirdTrain = new Train("green", false);

var train4 = new Train("black ", false);

train4.toggleLights();
train4.lightsStatus();
train4.getSelf();
train4.getPrototype();

console.log(train4);

var train5 = new Train("yellow", false);
var highSpeed1 = new highSpeedTrain(200, false, "blue", false);

train5.toggleLights();
train5.lightsStatus();
highSpeed1.toggleLights();
highSpeed1.toggleHighSpeed();

