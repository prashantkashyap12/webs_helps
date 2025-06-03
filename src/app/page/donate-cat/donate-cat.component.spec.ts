import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateCatComponent } from './donate-cat.component';

describe('DonateCatComponent', () => {
  let component: DonateCatComponent;
  let fixture: ComponentFixture<DonateCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonateCatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonateCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
