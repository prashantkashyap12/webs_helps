import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EventListService } from '../../service/event/events.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { baseurl } from '../../interface/baseurl';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [CommonModule],
  providers:[EventListService],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent implements OnInit {

 constructor(private _event:EventListService, private _activatedRoute:ActivatedRoute){}
   ngOnInit(): void {
    this.getData()
   }
   private url = new baseurl().baseUrl;
   getData(){
     let evntId = this._activatedRoute.snapshot.paramMap.get('id');
     this._event.eventDetails(evntId).subscribe(res=>{
       this.eventDetails = res.results.map((data:any)=>({
        img:this.url+data.ImgPath,
        dadicat:data.Dedicate,
        head1:data.Head1,
        pera11:data.Pera11,
        pera12:data.Pera12,
        head2:data.Head2,
        pera22:data.Pera22,
        li1:data.Li1,
        li2:data.Li2,
        li3:data.Li3,
        li4:data.Li4,
        li5:data.Li5,
        otherHead:data.OtherHead,
        parti1:data.Parti1,
        parti12:data.Parti12,
        parti13:data.Parti13,
        parti14:data.Parti14,
        parti15:data.Parti15,
        parti16:data.Parti16,
        parti17:data.Parti17,
       }))
     })
   }

  eventDetails:any[] = [
    // {img:'assets/img/event-details.jpg', dadicat:'Admin', 
    //   head1:'Nurturing Health, Empowering Lives — Together for Health: A Successful Medical Mission by Helping Hand Sanstha',
    //   pera11:'Helping Hand Sanstha organized a Free Health Camp on 4th May 2025 at Bodla Chauraha, Agra, to provide essential health services to the underprivileged.', 
    //   pera12:'This initiative was aimed at spreading awareness about preventive healthcare and ensuring medical access for all.',
    //   head2:'Our mission is to empower communities by providing accessible healthcare services.',
    //   pera22:'Through this health camp, we aim to build a healthier society by connecting people with dedicated doctors, essential checkups, and a reliable health support system like our Help Health Card.', 
    //   li1:'More than 400 patients received free checkups', 
    //   li2:'Services included Blood Pressure, Diabetes, and General Health Checkups', 
    //   li3:'Health education sessions on nutrition, hygiene, and preventive care', 
    //   li4:'Spreading awareness about preventive health.', 
    //   li5:'Promoting well-being for all—especially the underserved and vulnerable.',
    //   otherHead:'Participating Doctors',
    //   parti1:'Dr. Renu Sharma',
    //   parti12:'Dr. Arti Kanaujia',
    //   parti13:'Dr. Shivang Sharma (Diabetologist)',
    //   parti14:'Dr. Ravi Sharma',
    //   parti15:'Dr. D. K. Dixit',
    //   parti16:'Dr. R. N. Singh',
    //   parti17:'Several local doctors and healthcare volunteers'
    // }
  ]

}
