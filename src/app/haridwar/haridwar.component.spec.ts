import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaridwarComponent } from './haridwar.component';

describe('HaridwarComponent', () => {
  let component: HaridwarComponent;
  let fixture: ComponentFixture<HaridwarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaridwarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaridwarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
