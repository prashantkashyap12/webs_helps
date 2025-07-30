import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DonationService } from '../../service/donation/donation.service';
import { baseurl } from '../../interface/baseurl';

@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [CommonModule],
  providers:[DonationService],
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.css'
})
export class DonateComponent implements OnInit {

  constructor(private _donate:DonationService, private _activateRouter:ActivatedRoute){}

  private url = new baseurl().baseUrl;
  
  ngOnInit(): void {
    this.getRes();
  }

  getRes(){
    let donateId = this._activateRouter.snapshot.paramMap.get('id');
    this._donate.donateDetails(donateId).subscribe(res=>{
      console.log(res.result);
      this.donate = res.result.map((data:any)=>({
        img:this.url+data.Img,
        colAmt:data.ColAmt,
        raised:data.Raised ,
        progres:data.Progres,
        notes:data.Notes,
        fix_amt1:data.FixAmt1,
        fix_amt2:data.FixAmt2,
        fix_amt3:data.FixAmt3,
        fix_amt4:data.FixAmt4,
        fix_amt5:data.FixAmt5,
        sumryPera:data.SumryPera,
        sumryLi1:data.SumryLi1,
        sumryLi2:data.SumryLi2,
        sumryLi3:data.SumryLi3,
        sumryLi4:data.SumryLi4,
        sumryLi5:data.SumryLi5,
        sumryLi6:data.SumryLi6,
        sumryLi7:data.SumryLi7,
        sumryLi8:data.SumryLi8,
        smr_img1:this.url+data.SmrImg1,
        smr_img2:this.url+data.SmrImg2,
        smr_pra1:data.SmrPra1,
        smr_blockqt:data.SmrBlockqt,
        smr_pra2:data.SmrPra2
      }))
    })
  }

  total:any = 100;
  donate:any[] = [
    // {
    //   img:'assets/img/donation-details-img.jpg',
    //   colAmt:'69000',
    //   raised:' 100000',
    //   progres:'60',
    //   notes:'Test mode is enabled. While in test mode no live donations are processed.',
    //   fix_amt1:'1000',
    //   fix_amt2:'2000',
    //   fix_amt3:'3000',
    //   fix_amt4:'4000',
    //   fix_amt5:'5000',
    //   sumryPera:'Future, as it seeks to lead the industry in technological innovation and sustainable building practices to deliver long-lasting value for its clients. Netus lorem rutrum arcu dignissim at sit morbi nascetur eget potenti vestibulum is cras. Tempor nonummy metus lobortis. Sociis velit etiam, dapibus.Lepellentesque a cras posuere tempor facilisi habitant lectus cras posuere tempor facilisi habitant rutrum pede.',
    //   sumryLi1:'Empower Through Charity',
    //   sumryLi2:'Giving Hope, Changing Lives',
    //   sumryLi3:'Healing Communities',
    //   sumryLi4:'Together We Can',
    //   sumryLi5:'Compassion in Action',
    //   sumryLi6:'Compassion in Action',
    //   sumryLi7:'Multilingual content capabilities',
    //   sumryLi8:'Every Act Counts',
    //   smr_img1:'assets/img/donation-details-inner-1.jpg',
    //   smr_img2:'assets/img/donation-details-inner-2.jpg',
    //   smr_pra1:'Future, as it seeks to lead the industry in technological innovation and sustainable building practices to deliver long-lasting value for its clients. Netus lorem rutrum arcu dignissim at sit morbi nascetur eget potenti vestibulum is cras. Tempor nonummy metus lobortis. Sociis velit etiam, dapibus.Lepellentesque a cras posuere tempor facilisi habitant lectus cras posuere tempor facilisi habitant rutrum pede .',
    //   smr_blockqt:"Mosico has been an invaluable partner to us. Any talent we've worked with ha shown a deep understanding of digital experiences. They're seamlessl integrate with or team and meet the level of craft that we hold ourselves accountable with our team and meet to. They're seamlessl integrate with our team and meet",
    //   smr_pra2:'Future, as it seeks to lead the industry in technological innovation and sustainable building practices to deliver long-lasting value for its clients. Netus lorem rutrum arcu dignissim at sit morbi nascetur eget potenti vestibulum is cras. Tempor nonummy metus lobortis. Sociis velit etiam, dapibus.Lepellentesque a cras posuere tempor facilisi habitant lectus cras posuere tempor facilisi habitant rutrum pede .'
    // }
  ]
}
