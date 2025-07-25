import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { blog_ls } from '../../interface/blog/blog_list';
import { BlogListService } from '../../service/blog/blog.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {

  constructor(private _blog:BlogListService){}

  ngOnInit(): void {
    this.getRes();
  }
  async getRes(){
    await this._blog.blogLs().subscribe(res=>{
      console.log(res);
    })
  }


  blogList:blog_ls [] = [
    {id:1, imgPath:'assets/img/blog-1.jpg', date:'2023-10-01', rights:'By Admin', type:'Donation', link:'BlogDetails', linkText1:'Give Education, It’s The Best Gift Ever.', linkText2:'Read More' },
    {id:2, imgPath:'assets/img/blog-2.jpg', date:'2023-10-01', rights:'By Team Leader', type:'Donation', link:'BlogDetails', linkText1:'Give Education, It’s The Best Gift Ever.', linkText2:'Read More' },
    {id:3, imgPath:'assets/img/blog-3.jpg', date:'2023-10-01', rights:'By Admin', type:'Donation', link:'BlogDetails', linkText1:'Give Education, It’s The Best Gift Ever.', linkText2:'Read More' },
    {id:4, imgPath:'assets/img/blog-2.jpg', date:'2023-10-01', rights:'By Team Leader', type:'Donation', link:'BlogDetails', linkText1:'Give Education, It’s The Best Gift Ever.', linkText2:'Read More' },
    {id:5, imgPath:'assets/img/blog-1.jpg', date:'2023-10-01', rights:'By Team Leader', type:'Donation', link:'BlogDetails', linkText1:'Give Education, It’s The Best Gift Ever.', linkText2:'Read More' },
    {id:6, imgPath:'assets/img/blog-3.jpg', date:'2023-10-01', rights:'By Admin', type:'Donation', link:'BlogDetails', linkText1:'Give Education, It’s The Best Gift Ever.', linkText2:'Read More' },
  ];
}
