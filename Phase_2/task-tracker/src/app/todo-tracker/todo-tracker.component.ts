import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../employee.module';
import { EMP_DATA } from '../emp.mock';
import { ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';


@Component({
  selector: 'app-todo-tracker',
  templateUrl: './todo-tracker.component.html',
  styleUrls: ['./todo-tracker.component.css']
})

export class TodoTrackerComponent implements OnInit {
  @ViewChild(MatTable) table!: MatTable<any>;

  dataSource = EMP_DATA;
  msg:string ="";

  displayedColumns: string[] = ['EmpId', 'Name', 'Task', 'Deadline'];
  
  constructor() { }

  ngOnInit(): void {
  }

  addTracker(trackerRef:NgForm) {
    let track = trackerRef.value;
    
    let empData: Employee = {
      id:track.id,
      name: track.name,
      task: track.task,
      deadLine: track.date,
    };
   
    EMP_DATA.push(empData);
    trackerRef.reset();
    this.table.renderRows();
    
  }

  resetData(trackerRef:NgForm){
    trackerRef.reset();
  }

}