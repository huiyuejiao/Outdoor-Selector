export class ProjectNameService{
  //  static location:string;
 //   static lat:number;
   // static lng:number;
   projectname:string="dsfsdf";
    constructor(){
        console.log("this is projectname service")
    }
    setProjectName(projectname:string){
       // LocationService.location=location;
        this.projectname=projectname;
    }
    getProjectName(){
        return this.projectname;
       // return LocationService.location;
    }
  
}