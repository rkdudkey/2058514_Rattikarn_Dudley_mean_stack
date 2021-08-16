import { Component } from '@angular/core';
//use global array to access the whole application
import { Record } from "./record.module";
import { users } from './mock.records';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  flagCheckUser: boolean = false;

  loginText: string = "";
  registertext: string = "";
  userName: any = "";

  userInfo = users;

  constructor() {

  }

  storeData(regisRef: NgForm) {
    let register = regisRef.value;

    let data: Record = {
      firstName: register.firstName,
      lastName: register.lastName,
      userName: register.userName,
      password: register.password
    };

    users.push(data);
    console.log(users);

    this.registertext = "You have been registered";
  }

  checkUser(loginRef: NgForm) {
    //check if the username and password matching 
    this.flagCheckUser = users.some(e => e.userName == loginRef.value.userNameLogin && e.password == loginRef.value.passwordLogin);

    if (this.flagCheckUser) {
      users.forEach(e => {
        if (e.userName == loginRef.value.userNameLogin && e.password == loginRef.value.passwordLogin) {
          //assign the first name of the user, pull from the find object 
          this.userName = e.firstName;
        }
      });
    } else {
      this.loginText = "The username and password is not matching, please enter a correct data !"
    }
    //reset all input text after click login
    loginRef.reset();
  }

  resetRegister(regisRef: any) {
    regisRef.reset();
  }

  addContact(contactRef: NgForm) {

    //find index 
    let index:number = 0;
    
    users.some((entry, i)  => {
      if (entry.firstName == this.userName) {
        index = i;
      }
    });

    users[index].contactName = contactRef.value.contactName;
    users[index].phoneNumber = contactRef.value.phoneNumber;

    console.log(users);
  }

}
