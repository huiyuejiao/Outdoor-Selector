export class LocationService{
  //  static location:string;
 //   static lat:number;
   // static lng:number;
   location:string;
   lat:number;
   lng:number;
    constructor(){
        console.log("this is location service")
    }
    setLocation(location:string){
       // LocationService.location=location;
        this.location=location;
    }
    getLocation(){
        return this.location;
       // return LocationService.location;
    }
    setLatitude(latitude:number){
        //LocationService.lat=latitude;
        this.lat=latitude;
    }
    getLatitude(){
        return this.lat;
       // return LocationService.lat;
    }
    setLongitude(longitude:number){
      //  LocationService.lng=longitude;
      this.lng=longitude;
    }
    getLongitude(){
        return this.lng;
       // return LocationService.lng;
    }
}