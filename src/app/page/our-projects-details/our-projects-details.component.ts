import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectListService } from '../../service/project/project.service';
import { baseurl } from '../../interface/baseurl';

@Component({
  selector: 'app-our-projects-details',
  standalone: true,
  imports: [CommonModule],
  providers:[ProjectListService],
  templateUrl: './our-projects-details.component.html',
  styleUrl: './our-projects-details.component.css'
})
export class OurProjectsDetailsComponent implements OnInit {

  constructor(private _proj:ProjectListService, private _actvRoute:ActivatedRoute){}  
  ngOnInit(): void {
    this.getRes();  
  }
  private url = new baseurl().baseUrl;

  getRes(){
    let projId = this._actvRoute.snapshot.paramMap.get('id');
    this._proj.projectDetails(projId).subscribe(res=>{
      console.log(res.results);

      this.projDetails1 = res.results.map((data:any)=>({
        img1:this.url+data.Img1,
        img2:this.url+data.Img2,
        img3:this.url+data.Img3
      }))

      this.projDetails2 = res.results.map((data:any)=>({
        head1:data.Head1,
        pera1:data.Pera1,
        head2:data.Img3,
        pera2:data.Pera2,
        head3:data.Head3,
        pera3:data.Pera3,
      }))

      this.projInfo =res.results.map((data:any)=>({
        cat:data.Cat,
        auth:data.Auth,
        tag:data.Tag,
        cost:data.Cost,
        date:data.Date
      }))
    })
  }

  projDetails1:any[] = [
    // {img1:'assets/img/project-details-img-1.jpg', img2:'assets/img/project-details-img-1.jpg', img3:'assets/img/project-details-img-1.jpg'}
  ]
  projDetails2:any[]=[
    // {head1:'Child trouble & care', 
    // pera1:'Netus lorem rutrum arcu dignissim at sit morbi phasellus nascetur eget potenti vestibulum is cras. Tempor nonummy metus lobortis. Sociis velit etiam, dapibus.Lectus ve pellentesque a cras posuere tempor facilisi habitant lectus rutrum pede quisque hendrerit mauris ad to elementum fringilla facilisi volutpat fusce pharetra.', 
    // pera11:'Netus lorem rutrum arcu dignissim at sit morbi phasellus nascetur eget potenti vestibulum is cras. Tempor nonummy metus lobortis. Sociis velit etiam, dapibus.Lectus ve pellentesque a cras posuere tempor facilisi habitant lectus rutrum pede . Netus lorem rutrum arcu dignissim at sit morbi phasellus nascetur eget potenti vestibulum is cras.', 
    // head2:'Challenge & Solution ', 
    // pera2:'Future, as it seeks to lead the industry in technological innovation and sustainable building practices to deliver long-lasting value for its clients. Netus lorem rutrum arcu dignissim at sit morbi nascetur eget potenti vestibulum is cras. Tempor nonummy metus lobortis. Sociis velit etiam, dapibus.Lepellentesque a cras posuere tempor facilisi habitant lectus rutrum pede .', 
    // head3:'Final Result', 
    // pera3:'For almost 50 years Leighton Asia, one of the region’s largest and most respected construc companies, has been progressively building for a better future by leveraging international expertise with local intelligence. In that time Leighton.'}
  ]
  projInfo:any[] = [
    // {cat:'Business, Marketing', auth:'Athena Jones', tag:'Data Masters', cost:'USD 1,50,499', date:'25 February, 2024'}
  ]

}
