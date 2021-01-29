import { Component, OnInit } from '@angular/core';
import {PartiesServiceService} from "../_services/parties-service.service";
import {Party} from "./Party";

@Component({
  selector: 'app-parties-component',
  templateUrl: './parties-component.component.html',
  styleUrls: ['./parties-component.component.scss']
})
export class PartiesComponent implements OnInit {
  public party: Party;
  public parties: Party[];
  constructor(private partiesService: PartiesServiceService) { }

  ngOnInit(): void {
    this.getParties()
  }

  getParties(){
    this.partiesService.getParties().subscribe((parties: Party[]) => {
      this.parties = parties
    });
  }

}
