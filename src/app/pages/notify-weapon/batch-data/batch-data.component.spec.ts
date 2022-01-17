import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchDataComponent } from './batch-data.component';

describe('BatchDataComponent', () => {
  let component: BatchDataComponent;
  let fixture: ComponentFixture<BatchDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
