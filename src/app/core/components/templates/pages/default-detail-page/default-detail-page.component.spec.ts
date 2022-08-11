import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultDetailPageComponent } from './default-detail-page.component';

describe('DefaultDetailPageComponent', () => {
  let component: DefaultDetailPageComponent;
  let fixture: ComponentFixture<DefaultDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
