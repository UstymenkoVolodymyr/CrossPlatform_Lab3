import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-lab4',
  templateUrl: './lab4.page.html',
  styleUrls: ['./lab4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Lab4Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
