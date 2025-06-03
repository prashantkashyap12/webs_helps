import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.css'
})
export class OurTeamComponent {


  teamMembers:any[] = [
    { imgPath: 'assets/img/member-1.jpg', name: 'John Doe', position: 'Founder & CEO' },
    { imgPath: 'assets/img/member-2.jpg', name: 'Jane Smith', position: 'Project Manager' },
    { imgPath: 'assets/img/member-3.jpg', name: 'Alice Johnson', position: 'Lead Developer' },
    { imgPath: 'assets/img/member-4.jpg', name: 'Bob Brown', position: 'UI/UX Designer' },
    { imgPath: 'assets/img/member-5.jpg', name: 'Charlie Davis', position: 'Marketing Specialist' },
    { imgPath: 'assets/img/member-6.jpg', name: 'Eve White', position: 'Content Writer' },
    { imgPath: 'assets/img/member-7.jpg', name: 'Eve White', position: 'Content Writer' },
    { imgPath: 'assets/img/member-8.jpg', name: 'Eve White', position: 'Content Writer' }
    
  ]


}
