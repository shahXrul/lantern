import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "lanternUi12334123123";

  test() {
    const a = 1;
    const mine = 'abc123';
    const them = '321'

    const ours = 'edc12345';
    const they = '123'
    const b = `abc1234${a}`;
    console.log(a);
    this.numbercheck(1);
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
