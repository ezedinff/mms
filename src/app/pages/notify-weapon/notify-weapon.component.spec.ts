import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyWeaponComponent } from './notify-weapon.component';

describe('NotifyWeaponComponent', () => {
  let component: NotifyWeaponComponent;
  let fixture: ComponentFixture<NotifyWeaponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifyWeaponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifyWeaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
