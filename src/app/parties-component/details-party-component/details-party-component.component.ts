import {Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Party} from "../Party";

@Component({
  selector: 'app-details-party-component',
  templateUrl: './details-party-component.component.html',
  styleUrls: ['./details-party-component.component.scss']
})
export class DetailsPartyComponentComponent implements OnInit {

  constructor() { }

  @Input() parties: Party[]
  bookForm = false
  placeToBook: number;
  @Output() bookEmitter = new EventEmitter<any>();
  ngOnInit(): void {
  }

  display(){
    this.bookForm = true
  }

  sendPlaceToBook(party: Party) {
    this.bookEmitter.emit({'party':party, 'placeToBook': this.placeToBook});
  }

}
