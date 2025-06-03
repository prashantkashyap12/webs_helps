import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProjectsDetailsComponent } from './our-projects-details.component';

describe('OurProjectsDetailsComponent', () => {
  let component: OurProjectsDetailsComponent;
  let fixture: ComponentFixture<OurProjectsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurProjectsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurProjectsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
