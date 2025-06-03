import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { link } from 'fs';
import { event_ls } from '../../interface/event/event_list';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {

  events:event_ls[] = [
    { id:1, imgPath: 'assets/img/blog-b-1.jpg', date: '2023-10-01', heading:'Manager Disapproved of the Most Recent Work.', pera:'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernaturaut', place: 'Venue', address:'350 5th AveNew York, NY 118 United States', link: 'event-detail', linkText: 'Event Details'},
    { id:1, imgPath: 'assets/img/blog-b-3.jpg', date: '2023-10-01', heading:'Manager Disapproved of the Most Recent Work.', pera:'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernaturaut', place: 'Venue', address:'350 5th AveNew York, NY 118 United States', link: 'event-detail', linkText: 'Event Details'},
    { id:1, imgPath: 'assets/img/blog-b-2.jpg', date: '2023-10-01', heading:'Manager Disapproved of the Most Recent Work.', pera:'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernaturaut', place: 'Venue', address:'350 5th AveNew York, NY 118 United States', link: 'event-detail', linkText: 'Event Details'},
    { id:1, imgPath: 'assets/img/blog-b-3.jpg', date: '2023-10-01', heading:'Manager Disapproved of the Most Recent Work.', pera:'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernaturaut', place: 'Venue', address:'350 5th AveNew York, NY 118 United States', link: 'event-detail', linkText: 'Event Details'},
    { id:1, imgPath: 'assets/img/blog-b-1.jpg', date: '2023-10-01', heading:'Manager Disapproved of the Most Recent Work.', pera:'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernaturaut', place: 'Venue', address:'350 5th AveNew York, NY 118 United States', link: 'event-detail', linkText: 'Event Details'},
    { id:1, imgPath: 'assets/img/blog-b-3.jpg', date: '2023-10-01', heading:'Manager Disapproved of the Most Recent Work.', pera:'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernaturaut', place: 'Venue', address:'350 5th AveNew York, NY 118 United States', link: 'event-detail', linkText: 'Event Details'},
  ]
}
