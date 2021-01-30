import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPartyComponentComponent } from './details-party-component.component';

describe('DetailsPartyComponentComponent', () => {
  let component: DetailsPartyComponentComponent;
  let fixture: ComponentFixture<DetailsPartyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPartyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPartyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
