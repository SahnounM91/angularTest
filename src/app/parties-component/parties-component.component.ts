import {Component, OnInit} from '@angular/core';
import {PartiesServiceService} from '../_services/parties-service.service';
import {Party} from './Party';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-parties-component',
  templateUrl: './parties-component.component.html',
  styleUrls: ['./parties-component.component.scss']
})
export class PartiesComponent implements OnInit {
  public party: Party;
  public parties: Party[];
  public message = '';

  constructor(private toastr: ToastrService, private partiesService: PartiesServiceService) {
    this.getParties();
  }

  ngOnInit(): void {
  }

  getParties() {
    this.partiesService.getParties().subscribe((parties: Party[]) => {
      this.parties = parties;
      this.parties.map((obj) => {
        obj.nb_place_available = obj.nb_place;
        return obj;
      });
    });
  }

  receivedBookInformation($event) {
    if ($event.placeToBook > $event.party.nb_place_available) {
      this.toastr.error('pas assez de places!', 'Zut!',);
    } else if ($event.placeToBook === 0) {
      this.toastr.warning('aucune place reservé !', '0 places !',);
    } else {
      $event.party.nb_place_available = $event.party.nb_place_available - $event.placeToBook;
      this.toastr.success('bienvenu chez nous!', 'place reservées!',);
    }

  }
}
