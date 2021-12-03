import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit {
  loginForm = new FormGroup({
    number: new FormControl('')
    });
  constructor (private mechanicService :HttpService,private router :Router){ }

  ngOnInit(): void {
    if((this.mechanicService.ifUserLoggedIn())){
      this.router.navigate(['/home']);      
    }
    else{
       this.router.navigate(['/user-phone']);
    }
    console.log(localStorage.getItem('userToken'));

  }
  onSubmit(){
   
    const userId =  this.loginForm.value;
        localStorage.setItem('userToken',userId.number);
        const mechanicNumber = this.loginForm.value;
        localStorage.setItem('userNumber',mechanicNumber.number);
        console.log( localStorage.getItem('userToken'));
        this.router.navigate(['/map-what']);
   }

}
