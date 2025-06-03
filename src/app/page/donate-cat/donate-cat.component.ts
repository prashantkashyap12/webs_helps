import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { donations } from '../../interface/donation/donation_ls';

@Component({
  selector: 'app-donate-cat',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './donate-cat.component.html',
  styleUrl: './donate-cat.component.css'
})
export class DonateCatComponent {

  donation_ls:donations[] = [
    { id:1, imgPath:'assets/img/donation-1.jpg', categ:'Foods', rais:'$1200', goal:'$30,000', heading:'Lifes kills for Children in South African peoples', para:'We work together to make a lasting difference, helping people. With kindness and hard work',progress:85, link:'donate-details'},
    { id:2, imgPath:'assets/img/donation-2.jpg', categ:'Foods', rais:'$1200', goal:'$30,000', heading:'Lifes kills for Children in South African peoples', para:'We work together to make a lasting difference, helping people. With kindness and hard work',progress:55, link:'donate-details'},
    { id:3, imgPath:'assets/img/donation-3.jpg', categ:'Foods', rais:'$1200', goal:'$30,000', heading:'Lifes kills for Children in South African peoples', para:'We work together to make a lasting difference, helping people. With kindness and hard work',progress:55, link:'donate-details'},
    { id:4, imgPath:'assets/img/donation-4.jpg', categ:'Foods', rais:'$1200', goal:'$30,000', heading:'Lifes kills for Children in South African peoples', para:'We work together to make a lasting difference, helping people. With kindness and hard work',progress:55, link:'donate-details'},
    { id:1, imgPath:'assets/img/donation-1.jpg', categ:'Foods', rais:'$1200', goal:'$30,000', heading:'Lifes kills for Children in South African peoples', para:'We work together to make a lasting difference, helping people. With kindness and hard work',progress:55, link:'donate-details'},
    { id:2, imgPath:'assets/img/donation-2.jpg', categ:'Foods', rais:'$1200', goal:'$30,000', heading:'Lifes kills for Children in South African peoples', para:'We work together to make a lasting difference, helping people. With kindness and hard work',progress:55, link:'donate-details'},
    { id:3, imgPath:'assets/img/donation-3.jpg', categ:'Foods', rais:'$1200', goal:'$30,000', heading:'Lifes kills for Children in South African peoples', para:'We work together to make a lasting difference, helping people. With kindness and hard work',progress:55, link:'donate-details'},
    { id:4, imgPath:'assets/img/donation-4.jpg', categ:'Foods', rais:'$1200', goal:'$30,000', heading:'Lifes kills for Children in South African peoples', para:'We work together to make a lasting difference, helping people. With kindness and hard work',progress:55, link:'donate-details'},
    
  ]

}
