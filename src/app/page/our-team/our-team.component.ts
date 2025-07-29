import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TeamListService } from '../../service/team/team.service';
import { baseurl } from '../../interface/baseurl';

@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [CommonModule],
  providers:[TeamListService],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.css'
})
export class OurTeamComponent implements OnInit{

  private url = new baseurl().baseUrl;
  constructor(private _teamSer:TeamListService){}
  ngOnInit(): void {
    this.getRes()
  }

  getRes(){
    this._teamSer.TeamLs().subscribe(res=>{
      console.log(res.res);
      this.teamMembers = res.res.map((data:any)=>({
        imgPath:this.url+data.ImgPath,
        name:data.Name,
        position:data.Position
      }));
    })
  }

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
