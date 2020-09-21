import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RijutaComponent } from './rijuta.component';

describe('RijutaComponent', () => {
  let component: RijutaComponent;
  let fixture: ComponentFixture<RijutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RijutaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RijutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
