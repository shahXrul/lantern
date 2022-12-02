import { Component } from '@angular/core';
import { mydemo } from './Employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'lanternUi12334123123123';

  test() {
    const a = 1;
    const mine = 'abc123';
    const them = '321'

    const ours = 'edc12345';
    let they = "123";
    const b = `abc1234${a}`;
    console.log(a);
    console.log('abc');

    this.numbercheck(1);

    mydemo();
  }


  numbercheck(x: number) {
    if (x == 2) {
      return x + 5;
    }
    else if (x == 3) {
      return x + 1;
    }
    return x;
  }


}
