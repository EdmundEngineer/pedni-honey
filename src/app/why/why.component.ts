import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {  FormGroup,FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.scss']
})
export class WhyComponent implements OnInit {

  public lat:number = 0; 
  public lng:number = 0;
  zoom=16;
  endpoint1: string = "";
  endpoint2: string = "";
  endpoint3: string = "";
  endpoint4: string = "";
  specificId:string = "";
  public  datas:any;
  latLong:any =  {
    "current": {
      "latitude": 0,
      "longitude": 0
    }
 }   ;
  postData:any =  {
    "data": {
      "": "",
    }};
  updateData:any =  {
        "service_type": "",
      }; 
  deleteData:any =  {
        "id": ""
      };  
  currentForm =new FormGroup({
        search: new FormControl('')
     });   
  nearestEndpoint :string = "";        
  constructor(private mechanicService :HttpService,private router :Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
      
   const problem_id :any = this.route.snapshot.paramMap.get('id');
   this.specificId = problem_id;
   const whenPositionGet = new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));
   whenPositionGet.then(
     (position:any) => {
      const coords = position.coords; 
      this.latLong.current.latitude =  parseFloat(coords.latitude);
      this.latLong.current.longitude =  parseFloat(coords.longitude);
      console.log("Latitude " + position.coords.latitude, "Longitude " + position.coords.longitude);
      this.mechanicService.postData(this.nearestEndpoint,this.latLong).subscribe(
        (response2: any) => {
       
          for (const data of response2){
            const response = data;
            console.log(data);
            this.lat = parseFloat(response.data.location.latitude);
            this.lng = parseFloat(response.data.location.longitude);
            //this.mechanicId = response.id;
            this.latLong.current.latitude = response.data.location.latitude;
            this.latLong.current.longitude = response.data.location.longitude;
            console.log(response.data.location.latitude);
            console.log(response.data.location.longitude);
            console.log("Nearest:"+this.postData);
          

          }
          //console.log(response.data);

        
           
        /*   console.log(this.mechanicId);
          console.log(this.latLong.current.latitude);
          console.log(this.latLong.current.longitude);*/
        }

      );



     },
     (error:any) => {
         console.error(error);

     });
  }
  create(){
    this.mechanicService.postData(this.endpoint1,this.postData).subscribe(
      (response: any) => {
        console.log(response);
         
      }

    );
  }
  read(){
    this.mechanicService.getData(this.endpoint1).subscribe(
      (response: any) => {
        console.log(response);
         
      }

    );
  }
  readSpecific(){
    this.mechanicService.getSpecificData(this.endpoint1,this.specificId).subscribe(
      (response: any) => {
        console.log(response);
         
      }

    );
  }
  update(){
    this.mechanicService.updateData(this.endpoint1,this.updateData).subscribe(
      (response: any) => {
        console.log(response);
         
      }

    );
  }
  delete(){
    this.mechanicService.deleteData(this.endpoint1,this.deleteData).subscribe(
      (response: any) => {
        console.log(response);
         
      }

    );
  }

}
