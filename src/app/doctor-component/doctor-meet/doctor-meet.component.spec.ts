import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorMeetComponent } from './doctor-meet.component';

describe('DoctorMeetComponent', () => {
  let component: DoctorMeetComponent;
  let fixture: ComponentFixture<DoctorMeetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorMeetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorMeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
