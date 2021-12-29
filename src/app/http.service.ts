import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
baseUrl:string = "https://quick-garage-api.herokuapp.com/";
  constructor(private http :HttpClient,private router :Router) { }
  //headers
 
  //authentication

  logoutUser(){
    localStorage.removeItem('userToken');
    this.router.navigate(['/user-auth']);
  }
  ifUserLoggedIn(){
    return !!localStorage.getItem('userToken');
  }
  ifMechanicLoggedIn(){
    return !!localStorage.getItem('userToken');
  }
    ifAdminLoggedIn(){
    return !!localStorage.getItem('adminToken');
  }
  loginUser(endpoint:string,postData:any){
    //let endpoints = "/api/clients/auth/signin";
    return this.http.post(this.baseUrl+endpoint,postData);
      }
  registerUser(endpoint:string,postData:any){
   // let endpoints = "/api/clients/auth/signup";
    return this.http.post(this.baseUrl+endpoint,postData);
          }
  forgotPasswordUser(endpoint:string,postData:any){
  // let endpoints = "/api/clients/auth/forgot-password";
   return this.http.post(this.baseUrl+endpoint,postData);
          }     
  //get Specicfic Route
  getSpecificData(endpoint:string,ids:any){
      let id = ids;
      let endpoints = endpoint+id;
      console.log(this.baseUrl+endpoints);
      return this.http.get(this.baseUrl+endpoints);
                }        
  //getRoute
  getData(endpoint:string){
    return this.http.get(this.baseUrl+endpoint);
        }
  postData(endpoint:string,postData:any){
    console.log(postData); 
     const httpHeaders = new HttpHeaders(
    
      { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*' } /** Use Content-type as your requirement undifined OR application/json**/
   
 );
    return this.http.post(this.baseUrl+endpoint,postData,{headers:httpHeaders});
       }
  updateData(endpoint:string,updateData:any){
    //let id = ObjectId;
    //let endpoints = "mechanics"+id;
    const httpHeaders = new HttpHeaders(
    
      { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*' } /** Use Content-type as your requirement undifined OR application/json**/
   
 );
 
    return this.http.put(this.baseUrl+endpoint,updateData,{headers:httpHeaders});
      }    
  deleteData(endpoint:string,Data:any){
    let id = Data;
    let endpoints = endpoint+id;
    return this.http.delete(this.baseUrl+endpoints);
        }     


}
