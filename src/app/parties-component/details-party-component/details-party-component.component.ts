import {Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {Party} from "../Party";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-details-party-component',
  templateUrl: './details-party-component.component.html',
  styleUrls: ['./details-party-component.component.scss']
})
export class DetailsPartyComponentComponent implements OnInit {

  constructor(private toastr: ToastrService) { }
  @ViewChild('formBook') formBook: ElementRef;
  @Input() parties: Party[];
  @Input() message: string;
  @Output() bookEmitter = new EventEmitter<any>();
  placeToBook: number;
  reserved =  true;
  ngOnInit(): void {}

  sendPlaceToBook(party: Party) {
    this.bookEmitter.emit({'party':party, 'placeToBook': this.placeToBook});
    this.placeToBook = 0;

    this.formBook.nativeElement.hidden=true;
  }

}
