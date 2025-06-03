import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {


  constructor(){}
  ngOnInit(){}
  
  
  newsletter = [
    {sr:'1', url:'', heading:'On 4th May 2025, Helping Hand Sanstha is organizing a Health Camp event.', date:'04-05-2024'},
    {sr:'2', url:'', heading:'We are opening a Computer Coaching Center for children to help them learn and grow.', date:'Comming Soon'},
    {sr:'3', url:'', heading:'Helping Hand Sanstha is starting a Stitching Training Center to empower women and girls.', date:'Comming Soon'},
    {sr:'5', url:'', heading:'Our upcoming meeting will focus on planning new initiatives and strengthening our projects.', date:'Comming Soon'},
  ]

  // Marquee PLAY / PUSH  -- Open
  stopScrolling() {
    const marquee = document.querySelector('.marquee-content') as HTMLElement;
    if (marquee) {
      marquee.style.animationPlayState = 'paused';  // Pause the scrolling
    }
  }

  startScrolling() {
    const marquee = document.querySelector('.marquee-content') as HTMLElement;
    if (marquee) {
      marquee.style.animationPlayState = 'running';  // Resume the scrolling
    }
  }
  // Marquee PLAY / PUSH -- Close


}
