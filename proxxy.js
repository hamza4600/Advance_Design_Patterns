// Proxiy Patterns
// provides a surrogate or placeholder for another object to control access to it.
//  A proxy is a wrapper or agent object that is being called by the client to access the real serving object behind the scenes. Use of the proxy can simply be forwarding to the real object, or can provide additional logic. In the proxy extra functionality can be provided, for example caching when operations on the real object are resource intensive, or checking preconditions before operations on the real object are invoked.

// commonlay used  in javascript for security , caching , logging , validation , and error handling

// example of proxy pattern is a virtual proxy
// virtual proxy is a placeholder for an object that is expensive to create
// example of virtual proxy is a thumbnail image that is displayed instead of a full size image
// when the user clicks on the thumbnail image , the full size image is loaded
// the virtual proxy is used to defer the creation of the full size image until it is actually needed

// useed in react for lazy loading

 
class GeoCoder {
    getLatLng(address) {
        if (address === 'Amsterdam') {
            return '52.3700° N, 4.8900° E';
        } else if (address === 'London') {
            return '51.5171° N, 0.1062° W';
        } else if (address === 'Paris') {
            return '48.8742° N, 2.3470° E';
        } else if (address === 'Berlin') {
            return '52.5233° N, 13.4127° E';
        } else {
            return '';
        }
    }
}

class GeoProxy {
    constructor() {
        this.geocoder = new GeoCoder();
        this.geocache = {};
    }

    getLatLng(address) {
        if (!this.geocache[address]) {
            this.geocache[address] = this.geocoder.getLatLng(address);
        }
        return this.geocache[address];
    }

    getCount() {
        return Object.keys(this.geocache).length;
    }
}

function test() {
    const geo = new GeoProxy();

    // geolocation requests

    geo.getLatLng('Paris');
    geo.getLatLng('London');
    geo.getLatLng('London');
    geo.getLatLng('London');
    geo.getLatLng('London');
    geo.getLatLng('Amsterdam');
    geo.getLatLng('Amsterdam');
    geo.getLatLng('Amsterdam');
    geo.getLatLng('London');
    geo.getLatLng('London');

    console.log(geo.getCount()); // 3
}
// it caches the results of the geolocation requests , so that if the same location is requested multiple times , the geolocation service is not called again save a lot of time and money
test();

