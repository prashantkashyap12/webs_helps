import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { BlogListService } from '../../service/blog/blog.service';
import { CommonService } from '../../service/common.service';
import { baseurl } from '../../interface/baseurl';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers:[BlogListService],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent {

  constructor(private _blog:BlogListService, private _router:ActivatedRoute){}
   ngOnInit(){
   this.getRes();
  }

  private url = new baseurl().baseUrl;


  getRes(){
    let blogTran = this._router.snapshot.paramMap.get('id');
    console.log(blogTran);

    this._blog.blogDetails(blogTran).subscribe(res=>{
      this.blogDetails = res.result.map((data:any)=>({
        img:this.url+data.img,
        type:data.type,
        rigths:data.Rights,
        head1:data.Head,
        pera1:data.Pera1,
        pera2:data.Pera2,
        blockquate:data.Blockquate,
        pera3:data.Pera3,
        blogImg1:this.url+data.BlogImg1,
        blogImg2:this.url+data.BlogImg2,
        pera4:data.Pera3,
        fbLink:data.FbLink,
        twLink: data.TwLink,
        linkLink: data.LinkLink,
        instLink: data.InstLink
      }))
    })
  }
  blogDetails:any [] = [
    // {
    //   img:'assets/img/blog-b-1.jpg',
    //   rigths:'Admin',
    //   type:'Donation',
    //   head1:'Outstanding entrepreneurs and develop your skills.',
    //   pera1:'When to Use Lorem Ipsum generally, lorem ipsum is best suited to keeping template fo looking bare or minimizing the distractions of the draft copy. Second, use lorem ipsum if you think placeholder text will distracting. in voluptate velit esse. Cursus libero viverra.',
    //   pera2:'One of the most remarkable applications of AI in healthcare is in diagnostics. Machine and learning algorithms are capable of analyzing vast amounts of medical data with speed to unprecedente speed and accuracy. This has led to earlier and more precise disease speed detection, greatly enhancing the chances of successful treatment.',
    //   blockquate:"Mosico has been an invaluable partner to us. Any talent we've worked with ha shown a deep understanding of digital experiences. They're seamlessl integrate with or team and meet the level of craft that we hold ourselves accountable with our team and meet to. They're seamlessl integrate with our team and meet",
    //   pera3:'One of the most remarkable applications of AI in healthcare is in diagnostics. Machine and learning algorithms are capable of analyzing vast amounts of medical data with speed to unprecedente speed and accuracy. This has led to earlier and more precise disease speed detection, greatly enhancing the chances of successful treatment.',
    //   blogImg1:'assets/img/donation-details-inner-1.jpg', 
    //   blogImg2:'assets/img/donation-details-inner-2.jpg',
    //   pera4:'One of the most remarkable applications of AI in healthcare is in diagnostics. Machine and learning algorithms are capable of analyzing vast amounts of medical data with speed to unprecedente speed and accuracy. This has led to earlier and more precise disease speed detection, greatly enhancing the chances of successful treatment.',
    //   fbLink:'#', 
    //   twLink:'#', 
    //   linkLink:'#', 
    //   instLink:'#',
    // }
  ]
}
