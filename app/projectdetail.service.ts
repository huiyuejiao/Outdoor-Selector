export class ProjectDetailService{
   projectdetail:string="dsfsdf";
    constructor(){
        console.log("this is projectdetailname service")
    }
    setProjectDeatil(projectdetail:string){
       // LocationService.location=location;
        this.projectdetail=projectdetail;
    }
    getProjectDetail(){
        return this.projectdetail;
       // return LocationService.location;
    }
  
}