import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { project_ls } from '../../interface/project/project_list';

@Component({
  selector: 'app-our-projects',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './our-projects.component.html',
  styleUrl: './our-projects.component.css'
})
export class OurProjectsComponent {


  details:project_ls [] = [
    {id:1, head:'Child trouble & care', pera:' Demostic & Transportation', Imgpath:'assets/img/project-1.jpg', Path:'project-details'},
    {id:2, head:'Child trouble & care', pera:' Demostic & Transportation', Imgpath:'assets/img/project-2.jpg', Path:'project-details'},
    {id:3, head:'Child trouble & care', pera:' Demostic & Transportation', Imgpath:'assets/img/project-3.jpg', Path:'project-details'},
    {id:4, head:'Child trouble & care', pera:' Demostic & Transportation', Imgpath:'assets/img/project-4.jpg', Path:'project-details'},
    {id:5, head:'Child trouble & care', pera:' Demostic & Transportation', Imgpath:'assets/img/project-1.jpg', Path:'project-details'},
    {id:6, head:'Child trouble & care', pera:' Demostic & Transportation', Imgpath:'assets/img/project-2.jpg', Path:'project-details'}
  ]


}
