import {Component, OnInit} from '@angular/core';
import {Doctor} from "./Doctor";

@Component({
  selector: 'app-doctor-component',
  templateUrl: './doctor-component.component.html',
  styleUrls: ['./doctor-component.component.scss']
})
export class DoctorComponent implements OnInit {

  constructor() {
  }

  specialties = [
    'Ophtalmologiste', 'radiologue', 'Pédiatre', 'cardiologue', 'dermatologue', 'gastrologue'
  ];
  public doctors = [
    {nom: 'DR SOPHIE PIERREPONT', specialite: 'Ophtalmologiste', disponibilite: true},
    {nom: 'DR Alexandra Dupont', specialite: 'Ophtalmologiste', disponibilite: false},
    {nom: 'Dr Alexandre Paul', specialite: 'radiologue', disponibilite: true},
    {nom: 'Dr Nadir Madani', specialite: 'Pédiatre', disponibilite: false}
  ];

  selectedSpecialty: any;
  filtredDoctors = this.doctors;
  showList = false;


  ngOnInit(): void {

  }

  onChangeSpecialty(value: any) {
    this.showList = true;
    this.selectedSpecialty = value
    this.filtredDoctors = this.doctors.filter(doctor => doctor.specialite === this.selectedSpecialty);


  }

  isReservation = false;
  displayForm() {
    this.isReservation = true;
  }
}
