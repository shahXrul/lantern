import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-darkside',
  templateUrl: './darkside.component.html',
  styleUrls: ['./darkside.component.scss'],
})
export class DarksideComponent implements OnInit {
  ngOnInit(): void {
    const data1 = 'i am himan';
    console.log('tost', data1);
  }
}
