import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificDataComponent } from './specific-data.component';

describe('SpecificDataComponent', () => {
  let component: SpecificDataComponent;
  let fixture: ComponentFixture<SpecificDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
