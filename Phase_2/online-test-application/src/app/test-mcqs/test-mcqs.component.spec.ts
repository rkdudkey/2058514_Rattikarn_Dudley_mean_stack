import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMcqsComponent } from './test-mcqs.component';

describe('TestMcqsComponent', () => {
  let component: TestMcqsComponent;
  let fixture: ComponentFixture<TestMcqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestMcqsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMcqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
