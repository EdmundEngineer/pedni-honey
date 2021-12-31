import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-orders',
  templateUrl: './search-orders.component.html',
  styleUrls: ['./search-orders.component.scss']
})
export class SearchOrdersComponent implements OnInit {

  endpoint1: string = "customerOrders/orders";
  endpoint2: string = "";
  endpoint3: string = "";
  endpoint4: string = "";
  specificId:string = "";
  public  datas:any;
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
