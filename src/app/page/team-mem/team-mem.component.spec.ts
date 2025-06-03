import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemComponent } from './team-mem.component';

describe('TeamMemComponent', () => {
  let component: TeamMemComponent;
  let fixture: ComponentFixture<TeamMemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamMemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamMemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
