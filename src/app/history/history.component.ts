import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {  FormGroup,FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  
  endpoint1: string = "adminProducts/products";
  endpoint2: string = "";
  endpoint3: string = "";
  endpoint4: string = "";
  specificId:string = "";
  public  datas:any;
  public total = 0;
  condition:boolean = false;
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
          
  constructor(private mechanicService :HttpService,private router :Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
      
   const problem_id :any = this.route.snapshot.paramMap.get('id');
   this.specificId = problem_id;
   this.read();
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
        this.datas = response;   
        this.total = response.length;   
        if(this.total != 0){
          this.condition = true;
        }
         
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
  searchSth(){
    this.mechanicService.searchSth(this.endpoint1+this.currentForm.value.search).subscribe(
      (response: any) => {
        console.log(response);
        this.datas = response;   
        this.total = response.length;   
        if(this.total != 0){
          this.condition = true;
        }
         
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
    this.searchSth();
  }

}
