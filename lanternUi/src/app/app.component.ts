import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lanternUi';

  test() {
    const a = 1;
    const mine = 'abc';
    const them = '321'

    const ours = 'edc1234';
    const they = '123'
    const b = `abc1234${a}`;
    console.log(a);
  }
}
