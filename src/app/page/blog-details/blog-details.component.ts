import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogListService } from '../../service/blog/blog.service';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers:[BlogListService],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent {

  constructor(private _blog:BlogListService){}
   ngOnInit(){
    this.getRes();
  }
  getRes(){
    this._blog.blogDetails().subscribe(res=>{
      console.log(res);
    })
  }
  blogDetails:any [] = [
    {
      img:'assets/img/blog-b-1.jpg',
      rigths:'Admin',
      Donation:'Donation',
      head:'Outstanding entrepreneurs and develop your skills.',
      pera1:'When to Use Lorem Ipsum generally, lorem ipsum is best suited to keeping template fo looking bare or minimizing the distractions of the draft copy. Second, use lorem ipsum if you think placeholder text will distracting. in voluptate velit esse. Cursus libero viverra.',
      pera2:'One of the most remarkable applications of AI in healthcare is in diagnostics. Machine and learning algorithms are capable of analyzing vast amounts of medical data with speed to unprecedente speed and accuracy. This has led to earlier and more precise disease speed detection, greatly enhancing the chances of successful treatment.',
      blockquate:"Mosico has been an invaluable partner to us. Any talent we've worked with ha shown a deep understanding of digital experiences. They're seamlessl integrate with or team and meet the level of craft that we hold ourselves accountable with our team and meet to. They're seamlessl integrate with our team and meet",
      pera3:'One of the most remarkable applications of AI in healthcare is in diagnostics. Machine and learning algorithms are capable of analyzing vast amounts of medical data with speed to unprecedente speed and accuracy. This has led to earlier and more precise disease speed detection, greatly enhancing the chances of successful treatment.',
      blogImg1:'assets/img/donation-details-inner-1.jpg', 
      blogImg2:'assets/img/donation-details-inner-2.jpg',
      pera4:'One of the most remarkable applications of AI in healthcare is in diagnostics. Machine and learning algorithms are capable of analyzing vast amounts of medical data with speed to unprecedente speed and accuracy. This has led to earlier and more precise disease speed detection, greatly enhancing the chances of successful treatment.',
      fbLink:'#', 
      twLink:'#', 
      linkLink:'#', 
      InstLink:'#',
    }

  ]

}
