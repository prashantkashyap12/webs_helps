import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent {

  eventDetails:any[] = [
    {img:'assets/img/event-details.jpg', dadicat:'Admin', head1:'Manager Disapproved of the Most Recent Work.', pera11:'I must explain to you how all this mistaken idea of pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.', pera12:'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise.',
      head2:'Our Event Mission', pera22:'Cast obscure badger jeep quail congenialy when changed as cat jeepers affectionate thus facilisi goodness this far like ipsum dolor sit amet, consectetur adipisicing elits eiusmod tempo incididunt et laboret dolore magna aliqua enim ad minim. Eveniet in vulputate esse molestie consequat, illum Eveniet in vulputate esse molestie dolore .', li1:'Creating and editing content', li2:'Workflows, reporting, and content organization', li3:'User & role-based administration and security', li4:'Flexibility, scalability, and performance and analysis', li5:'Multilingual content capabilities',
    }
  ]

}
