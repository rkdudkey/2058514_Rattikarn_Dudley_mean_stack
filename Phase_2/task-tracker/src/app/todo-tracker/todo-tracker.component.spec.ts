import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTrackerComponent } from './todo-tracker.component';

describe('TodoTrackerComponent', () => {
  let component: TodoTrackerComponent;
  let fixture: ComponentFixture<TodoTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
