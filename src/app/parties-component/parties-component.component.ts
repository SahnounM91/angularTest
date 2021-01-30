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
  public message: string = ""
  constructor(private partiesService: PartiesServiceService) { }

  ngOnInit(): void {
    this.getParties()
  }

  getParties(){
    this.partiesService.getParties().subscribe((parties: Party[]) => {
      this.parties = parties
      this.parties.map((obj) => {
        obj.nb_place_available = obj.nb_place;
        return obj;
      })
      console.log(this.parties)
    });
  }

  receivedBookInformation($event) {
    if ($event.placeToBook > $event){
      return this.message = "il n'y a pas assez de place"
    }
    this.message = "places reservés"
    $event.party.nb_place_available -= $event.placeToBook

    return $event.party
  }
}
