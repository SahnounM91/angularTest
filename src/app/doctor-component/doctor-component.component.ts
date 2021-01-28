import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-component',
  templateUrl: './doctor-component.component.html',
  styleUrls: ['./doctor-component.component.scss']
})
export class DoctorComponent implements OnInit {

  constructor() { }
  doctors = [
    {nom: 'DR SOPHIE PIERREPONT', specialite: 'Ophtalmologiste', disponibilite: true},
    {nom: 'DR Alexandra Dupont', specialite: 'Ophtalmologiste', disponibilite: false},
    {nom: 'Dr Alexandre Paul', specialite: 'radiologue', disponibilite: true},
    {nom: 'Dr Nadir Madani', specialite: 'Pédiatre', disponibilite: false}
  ];
  specialties = [
    'Ophtalmologiste', 'radiologue', 'Pédiatre', 'cardiologue', 'dermatologue', 'endocrinologue', 'gastrologue'
  ];
  ngOnInit(): void {
    console.log(this.specialties);
  }

}
