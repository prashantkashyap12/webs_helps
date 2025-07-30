import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { link } from 'fs';
import { event_ls } from '../../interface/event/event_list';
import { EventListService } from '../../service/event/events.service';
import { baseurl } from '../../interface/baseurl';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule, RouterLink],
  providers:[EventListService],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent implements OnInit{

  private url = new baseurl().baseUrl;
  constructor(private _event:EventListService){}
  ngOnInit(): void {
    this._event.eventLs().subscribe(res=>{
      console.log(res.result);
      this.events = res.result.map((data:any)=>({
        id:data.EventTran,
        imgPath:this.url+data.ImgPath,
        date:data.Date,
        heading:data.Heading,
        pera:data.Para,
        place:data.Place,
        address:data.Address,
        link:'event-detail',
        linkText:'Event Details'
      }))
    })
  }
  

  events:event_ls[] = [
    // { id:1, imgPath: 'assets/img/blog-b-one.jpg', date:'2025-05-04', heading:'Helping Hand Sanstha is organize a Free Health Camp on 4th May 2025 at Bodla', pera:'Our goal is to provide free medical checkups, doctor consultations, basic medicines, and health education to those who cannot afford healthcare.', place: 'Agra', address:'Sikandra Road, Bodla Chauraha, Agra', link: 'event-detail', linkText: 'Event Details'},
    // { id:2, imgPath: 'assets/img/blog-3.jpg', date:'2023-06-22', heading:'पेड़ लगाओ, पर्यावरण बचाओ कार्यक्रम', pera:'"हम प्रतिज्ञा करते हैं कि हम पेड़ों की रक्षा करेंगे और हर साल कम से कम एक पेड़ अवश्य लगाएंगे।"', place: 'Agra', address:'आवास विकास कॉलोनी, आगरा', link: 'event-detail', linkText: 'Event Details'},
    // { id:3, imgPath: 'assets/img/blog-b-2.jpg', date:'2023-10-01', heading:'Manager Disapproved of the Most Recent Work.', pera:'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernaturaut', place: 'Venue', address:'350 5th AveNew York, NY 118 United States', link: 'event-detail', linkText: 'Event Details'},
    // { id:4, imgPath: 'assets/img/blog-b-3.jpg', date:'2023-10-01', heading:'Manager Disapproved of the Most Recent Work.', pera:'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernaturaut', place: 'Venue', address:'350 5th AveNew York, NY 118 United States', link: 'event-detail', linkText: 'Event Details'},
    // { id:5, imgPath: 'assets/img/blog-b-1.jpg', date:'2023-10-01', heading:'Manager Disapproved of the Most Recent Work.', pera:'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernaturaut', place: 'Venue', address:'350 5th AveNew York, NY 118 United States', link: 'event-detail', linkText: 'Event Details'},
    // { id:6, imgPath: 'assets/img/blog-b-3.jpg', date:'2023-10-01', heading:'Manager Disapproved of the Most Recent Work.', pera:'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernaturaut', place: 'Venue', address:'350 5th AveNew York, NY 118 United States', link: 'event-detail', linkText: 'Event Details'},
  ]
}
