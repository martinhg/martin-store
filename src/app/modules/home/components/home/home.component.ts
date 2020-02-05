import { Component, OnInit, AfterViewInit } from '@angular/core';

import Swiper from 'swiper';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  mySwiper: Swiper;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container');
  }

}
