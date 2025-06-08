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


  donate:any[] = [
    
  ]
}
