import {Component, Input, OnInit, Output} from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-doctor-meet',
  templateUrl: './doctor-meet.component.html',
  styleUrls: ['./doctor-meet.component.scss']
})
export class DoctorMeetComponent implements OnInit {

  @Input() doctor: object
  @Input() doctorName: string
  @Output() hidebookform = new EventEmitter<boolean>()
  patientName = "nom de patient"
  constructor() { }

  ngOnInit(): void {
  }

  confirmReservation(doctor: any) {
    doctor.disponibilite = false
    this.doctorName=""
    this.patientName=""
    this.hidebookform.emit(true)
  }
}
