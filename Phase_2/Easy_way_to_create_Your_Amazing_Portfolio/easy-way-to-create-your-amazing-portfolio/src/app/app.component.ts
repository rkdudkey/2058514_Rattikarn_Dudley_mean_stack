import { Component } from '@angular/core';
//use global array to access the whole application
import { Record } from "./record.module";
import { Contact } from "./contact.module"
import { users, contactInfo } from './mock.records';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  flagCheckUser: boolean = false;
  flagSignup:boolean = false;
  flagLogin:boolean = true;
  
  data:string = "start";

  loginText: string = "";
  registertext: string = "";
  firstName: any = "";

  userInfo = users;
  userContact: Array<Contact> = [];

  constructor() {

  }

  toggle() {
    if(this.data == "start") {
      this.flagLogin = false;
      this.flagSignup = true;
      this.data = "signup";
    } else if (this.data == "signup"){
      this.flagSignup = false;
      this.flagLogin = true;
      this.data = "start";
    }
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

    this.registertext = "You have been registered";
    regisRef.reset();
  }

  checkUser(loginRef: NgForm) {
    //check if the username and password matching 
    this.flagCheckUser = users.some(e => e.userName == loginRef.value.userNameLogin && e.password == loginRef.value.passwordLogin);

    if (this.flagCheckUser) {
      users.forEach(e => {
        if (e.userName == loginRef.value.userNameLogin && e.password == loginRef.value.passwordLogin) {
          //assign the first name of the user, pull from the find object 
          this.firstName = e.firstName;
        }

        this.flagLogin = false;
      });

        let oldData: Contact;
        //display save recorded
        contactInfo.find(e => {
          if (e.firstName === this.firstName) {
            //copy old data
            oldData = {
              contactName: e.contactName,
              phoneNumber: e.phoneNumber,
              firstName: e.firstName
            };
            this.userContact.push(oldData);
          }
         
        })
       
    } else {
      this.loginText = "The username and password is not matching, please enter a correct data !"
    }
    //reset all input text after click login
    loginRef.reset();
  }

  resetRegister(regisRef: any) {
    regisRef.reset();
  }

  addContact(contactRef: NgForm): void {
    let contact = contactRef.value;

    //add new data 
    let newData: Contact = {
      contactName: contact.contactName,
      phoneNumber: contact.phoneNumber,
      firstName: this.firstName
    };

    this.userContact.push(newData);

   contactRef.reset();
  }

  
}
