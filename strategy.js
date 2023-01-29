// Strategy Pattern
// allow to create a family of algorithms , encapsulate each one , and make them interchangeable , strategy lets the algorithm vary independently from clients that use it 
//  mostaly used in building plugin in mechanism when building extensible applications , for example , a plugin for a text editor , a plugin for a web browser , a plugin for a video player , etc

// a real world example is of a video player , a video player can play different types of videos , for example , mp4 , avi , mkv , etc , and each type of video has a different way of playing , for example , mp4 videos are played using the mp4 player , avi videos are played using the avi player , mkv videos are played using the mkv player , etc , so we can use the strategy pattern to create a family of algorithms , encapsulate each one , and make them interchangeable , strategy lets the algorithm vary independently from clients that use it

class Player {
    constructor() {
        this.player = null;
    }

    setPlayer(player) {
        this.player = player;
    }

    play() {
        this.player.play();
    }
}

class MP4Player {
    play() {
        //  each have its own way of playing
        console.log('Play MP4');
    }
}

class AVIPlayer {
    play() {
        console.log('Play AVI');
    }
}

class MKVPlayer {
    play() {
        console.log('Play MKV');
    }
}

function test() {
    const player = new Player();
    const mp4Player = new MP4Player();
    player.setPlayer(mp4Player);
    player.play();
    player.setPlayer(new AVIPlayer());
    player.play();
    player.setPlayer(new MKVPlayer());
    player.play();
}

test();

// a navigation app that navigate cars , walking , and bikes , each one has its own way of navigating , for example , cars navigate using the car navigator , walking navigate using the walking navigator , bikes navigate using the bike navigator , etc , so we can use the strategy pattern to create a family of algorithms , encapsulate each one , and make them interchangeable , strategy lets the algorithm vary independently from clients that use it

class Navigator {
    constructor() {
        this.navigator = null;
    }

    setNavigator(navigator) {
        this.navigator = navigator;
    }

    navigate() {
        this.navigator.navigate();
    }
}

class CarNavigator {
    navigate() {
        console.log('Navigate Car');
    }
}

class WalkingNavigator {
    navigate() {
        console.log('Navigate Walking');
    }
}

class BikeNavigator {
    navigate() {
        console.log('Navigate Bike');
    }
}

function test2() {
    const navigator = new Navigator();
    const carNavigator = new CarNavigator();
    navigator.setNavigator(carNavigator);
    navigator.navigate();
    navigator.setNavigator(new WalkingNavigator());
    navigator.navigate();
    navigator.setNavigator(new BikeNavigator());
    navigator.navigate();
}

test2();