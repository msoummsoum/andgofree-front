import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListingComponent } from './add-vehicle.component';

describe('AddListingComponent', () => {
  let component: AddListingComponent;
  let fixture: ComponentFixture<AddListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
