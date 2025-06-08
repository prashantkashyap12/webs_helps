import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { project_ls } from '../../interface/project/project_list';
import { ProjectListService } from '../../service/project/project.service';

@Component({
  selector: 'app-our-projects',
  standalone: true,
  imports: [RouterLink, CommonModule],
  providers:[ProjectListService],
  templateUrl: './our-projects.component.html',
  styleUrl: './our-projects.component.css'
})
export class OurProjectsComponent implements OnInit{

  constructor(private _proj:ProjectListService){}
  ngOnInit(): void {
    this.getRes();
  }
  
  getRes(){
    this._proj.projectLs().subscribe(res=>{
      console.log(res);
    });
  }

  details:project_ls [] = [
    {id:1, head:'Child trouble & care', pera:' Demostic & Transportation', Imgpath:'assets/img/project-1.jpg', Path:'project-details'},
    {id:2, head:'Child trouble & care', pera:' Demostic & Transportation', Imgpath:'assets/img/project-2.jpg', Path:'project-details'},
    {id:3, head:'Child trouble & care', pera:' Demostic & Transportation', Imgpath:'assets/img/project-3.jpg', Path:'project-details'},
    {id:4, head:'Child trouble & care', pera:' Demostic & Transportation', Imgpath:'assets/img/project-4.jpg', Path:'project-details'},
    {id:5, head:'Child trouble & care', pera:' Demostic & Transportation', Imgpath:'assets/img/project-1.jpg', Path:'project-details'},
    {id:6, head:'Child trouble & care', pera:' Demostic & Transportation', Imgpath:'assets/img/project-2.jpg', Path:'project-details'}
  ]


}
