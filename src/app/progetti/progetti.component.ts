import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-progetti',
  templateUrl: './progetti.component.html',
  styleUrls: ['./progetti.component.scss']
})
export class ProgettiComponent implements OnInit{
  constructor() { }

  ngOnInit() {
    Aos.init();
 }

}
