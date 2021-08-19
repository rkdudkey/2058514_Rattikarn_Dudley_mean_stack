import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TestMcqsService } from '../test-mcqs.service';
import { Test } from '../test.model';


@Component({
  selector: 'app-test-mcqs',
  templateUrl: './test-mcqs.component.html',
  styleUrls: ['./test-mcqs.component.css']
})
export class TestMcqsComponent implements OnInit {

  myForm: FormGroup;
  tests: Test[] = [];
  answer: string[] = new Array();
  correctAns: number = 0;
  wrongAns: number = 0;
  disableMsg: boolean = false;
  flagResult:boolean = false;
  result:string = "";


  constructor(public tService: TestMcqsService, public form: FormBuilder) {
    this.myForm = form.group({});
  }

  ngOnInit(): void {
    this.tService.getTestInfo().subscribe(test => {
      for (let q of test) {
        this.myForm.addControl(q.question, this.form.control("", Validators.required));
        this.tests.push(q);
      }
    });

  }

  submit() {

    //get the answer from users
    Object.keys(this.myForm.value).forEach(ans =>
      this.answer.push(this.myForm.value[ans])
    );

    for (let i = 0; i < this.tests.length; i++) {
      if (this.tests[i].correct == this.answer[i]) {
        this.tests[i].isTrue = "Correct Answer";
        this.tests[i].enabled = true;
        this.correctAns++;

      } else {
        this.tests[i].isTrue = "Wrong Answer";
        this.tests[i].enabled = false;
        this.wrongAns++;
      }
    }

    //display result at the end
    if(this.correctAns > 5) {
      this.result = `Result: ${this.correctAns}/10 Pass!` 
      this.disableMsg = true;
      this.flagResult = true;
    } else {
      this.result = `Result: ${this.correctAns}/10 Fail!` 
      this.disableMsg = true;
    }

    this.correctAns = 0;
    this.wrongAns = 0;

  }

  refreshPage(){
    window.location.reload();
  }

}
