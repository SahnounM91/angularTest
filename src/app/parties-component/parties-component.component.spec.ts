import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartiesComponentComponent } from './parties-component.component';

describe('PartiesComponentComponent', () => {
  let component: PartiesComponentComponent;
  let fixture: ComponentFixture<PartiesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartiesComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartiesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
