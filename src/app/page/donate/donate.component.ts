import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DonationService } from '../../service/donation/donation.service';

@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [CommonModule, RouterLink],
  providers:[DonationService],
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.css'
})
export class DonateComponent implements OnInit {

  constructor(private _donate:DonationService){}
  
  ngOnInit(): void {
    this.getRes();
  }

  getRes(){
    this._donate.donateDetails().subscribe(res=>{
      console.log(res);
    })
  }

  total:any = 100;
  donate:any[] = [
    {
      img:'assets/img/donation-details-img.jpg',
      colAmt:'69000',
      raised:' 100000',
      progres:'60',
      notes:'Test mode is enabled. While in test mode no live donations are processed.',
      fix_amt1:'1000',
      fix_amt2:'2000',
      fix_amt3:'3000',
      fix_amt4:'4000',
      fix_amt5:'5000',
      sumryPera:'Future, as it seeks to lead the industry in technological innovation and sustainable building practices to deliver long-lasting value for its clients. Netus lorem rutrum arcu dignissim at sit morbi nascetur eget potenti vestibulum is cras. Tempor nonummy metus lobortis. Sociis velit etiam, dapibus.Lepellentesque a cras posuere tempor facilisi habitant lectus cras posuere tempor facilisi habitant rutrum pede.',
      sumryLi1:'Empower Through Charity',
      sumryLi2:'Giving Hope, Changing Lives',
      sumryLi3:'Healing Communities',
      sumryLi4:'Together We Can',
      sumryLi5:'Compassion in Action',
      sumryLi6:'Compassion in Action',
      sumryLi7:'Multilingual content capabilities',
      sumryLi8:'Every Act Counts',
      smr_img1:'assets/img/donation-details-inner-1.jpg',
      smr_img2:'assets/img/donation-details-inner-2.jpg',
      smr_pra1:'Future, as it seeks to lead the industry in technological innovation and sustainable building practices to deliver long-lasting value for its clients. Netus lorem rutrum arcu dignissim at sit morbi nascetur eget potenti vestibulum is cras. Tempor nonummy metus lobortis. Sociis velit etiam, dapibus.Lepellentesque a cras posuere tempor facilisi habitant lectus cras posuere tempor facilisi habitant rutrum pede .',
      smr_blockqt:"Mosico has been an invaluable partner to us. Any talent we've worked with ha shown a deep understanding of digital experiences. They're seamlessl integrate with or team and meet the level of craft that we hold ourselves accountable with our team and meet to. They're seamlessl integrate with our team and meet",
      smr_pra2:'Future, as it seeks to lead the industry in technological innovation and sustainable building practices to deliver long-lasting value for its clients. Netus lorem rutrum arcu dignissim at sit morbi nascetur eget potenti vestibulum is cras. Tempor nonummy metus lobortis. Sociis velit etiam, dapibus.Lepellentesque a cras posuere tempor facilisi habitant lectus cras posuere tempor facilisi habitant rutrum pede .'
    }
  ]
}
