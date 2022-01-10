import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {  FormGroup,FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  endpoint1: string = "customerOrders/orders";
  endpoint2: string = "";
  endpoint3: string = "";
  endpoint4: string = "";
  specificId:string = "";
  public  datas:any;
  postData:any =  {
    "data": {
      "phone": "",
      "honey_type": "",
      "delivery": ""
    }};
  updateData:any =  {
        "service_type": "",
      }; 
  deleteData:any =  {
        "id": ""
      };  
  currentForm =new FormGroup({
        phone: new FormControl(''),
        honey_type: new FormControl(''),
        delivery:new FormControl('')

     });        
  constructor(private mechanicService :HttpService,private router :Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
      
   const problem_id :any = this.route.snapshot.paramMap.get('id');
   this.specificId = problem_id;
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
  onSubmit(){
    console.log(this.currentForm.value); 
    this.postData.data.phone = this.currentForm.value.phone;
    this.postData.data.honey_type = this.currentForm.value.honey_type;
    this.postData.data.delivery = this.currentForm.value.delivery;
    this.mechanicService.postData(this.endpoint1, this.postData).subscribe(
      (response: any) => {
        console.log(response);
         
      }

    );
  }
}
