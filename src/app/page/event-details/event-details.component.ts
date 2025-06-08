import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EventListService } from '../../service/event/events.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [CommonModule],
  providers:[EventListService],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent implements OnInit {

 constructor(private _event:EventListService){}
   ngOnInit(): void {
     this._event.eventDetails().subscribe(res=>{
       console.log(res);
     })
   }


  eventDetails:any[] = [
    {img:'assets/img/event-details.jpg', dadicat:'Admin', 
      head1:'Nurturing Health, Empowering Lives — Together for Health: A Successful Medical Mission by Helping Hand Sanstha',
      pera11:'Helping Hand Sanstha organized a Free Health Camp on 4th May 2025 at Bodla Chauraha, Agra, to provide essential health services to the underprivileged.', 
      pera12:'This initiative was aimed at spreading awareness about preventive healthcare and ensuring medical access for all.',
      head2:'Our mission is to empower communities by providing accessible healthcare services.',
      pera22:'Through this health camp, we aim to build a healthier society by connecting people with dedicated doctors, essential checkups, and a reliable health support system like our Help Health Card.', 
      li1:'More than 400 patients received free checkups', 
      li2:'Services included Blood Pressure, Diabetes, and General Health Checkups', 
      li3:'Health education sessions on nutrition, hygiene, and preventive care', 
      li4:'Spreading awareness about preventive health.', 
      li5:'Promoting well-being for all—especially the underserved and vulnerable.',
      otherHead:'Participating Doctors',
      parti1:'Dr. Renu Sharma',
      parti12:'Dr. Arti Kanaujia',
      parti13:'Dr. Shivang Sharma (Diabetologist)',
      parti14:'Dr. Ravi Sharma',
      parti15:'Dr. D. K. Dixit',
      parti16:'Dr. R. N. Singh',
      parti17:'Several local doctors and healthcare volunteers'

    }
  ]

}
