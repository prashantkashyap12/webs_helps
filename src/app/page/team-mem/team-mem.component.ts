import { Component, OnInit } from '@angular/core';
import { TeamListService } from '../../service/team/team.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-team-mem',
  standalone: true,
  imports: [CommonModule, RouterLink],
  providers:[TeamListService],
  templateUrl: './team-mem.component.html',
  styleUrl: './team-mem.component.css'
})
export class TeamMemComponent implements OnInit{

      constructor(private _team:TeamListService){}
      ngOnInit(): void {
        this.getRes();
      }
      getRes(){
        this._team.TeamLs().subscribe(res=>{
          console.log(res);
        });
      }

      teamData:any[]= [
        {}
      ]

}
