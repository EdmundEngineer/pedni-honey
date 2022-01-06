import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {  FormGroup,FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  endpoint1: string = "adminProducts/productsSearch/0701376319";
  endpoint2: string = "";
  endpoint3: string = "";
  endpoint4: string = "";
  specificId:string = "";
  public  datas:any;
  public total = 0;
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
   //this.searchSth();
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
  searchSth(){
    this.mechanicService.searchSth(this.endpoint1).subscribe(
      (response: any) => {
        console.log(response);
        this.datas = response;   
        this.total = response.length;      
         
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
    this.searchSth();
  }

}
