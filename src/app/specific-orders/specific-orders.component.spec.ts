import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificOrdersComponent } from './specific-orders.component';

describe('SpecificOrdersComponent', () => {
  let component: SpecificOrdersComponent;
  let fixture: ComponentFixture<SpecificOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
