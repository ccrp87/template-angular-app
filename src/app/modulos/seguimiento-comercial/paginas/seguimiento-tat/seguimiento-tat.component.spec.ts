import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoTATComponent } from './seguimiento-tat.component';

describe('SeguimientoTATComponent', () => {
  let component: SeguimientoTATComponent;
  let fixture: ComponentFixture<SeguimientoTATComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeguimientoTATComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeguimientoTATComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
