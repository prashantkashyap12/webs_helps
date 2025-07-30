import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { blog_ls } from '../../interface/blog/blog_list';
import { BlogListService } from '../../service/blog/blog.service';
import { RouterLink } from '@angular/router';
import { baseurl } from '../../interface/baseurl';
import moment, { Moment } from 'moment';


@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink, DatePipe],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {

  constructor(private _blog:BlogListService){}
  ngOnInit(): void { 
    this.getRes();
  }
  private url = new baseurl().baseUrl;
   getRes(){
      this._blog.blogLs().subscribe(res=>{
      this.blogList = res.result.map((data:any)=>({
        id:data.blogTran,
        imgPath:this.url+data.imgPath,
        date: moment(data.date).format('DD-MM-YYYY'),
        rights:data.rights,
        type:data.type,
        linkText1:data.linkText1,
        linkText2:data.linkText2,
        link:'BlogDetails'
      }))
    })
  }

  blogList:blog_ls [] = [
  ];
}
