import { Component } from '@angular/core';
import { mydemo } from './Employee';

// npm install eslint-config-airbnb —-save-dev
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lanternUi12334123123123';

  testVarialbe() {
    const usedVariable = 42;
    const Notusedvariable = 42;
  }

  numbercheck(x: number) {
    const inputValue = '4';

    // bad
    const val = Number(inputValue);

    if (x === 2) {
      return x + 5;
    }
    if (x === 3) {
      return x + 1;
    }
    return x;
  }

  IteratorsandGenerators() {
    const numbers = [1, 2, 3, 4, 5];

    // bad
    // const increasedByOne = [];
    // for (let i = 0; i < numbers.length; i++) {
    //   increasedByOne.push(numbers[i] + 1);
    // }
    // good
    const increasedByOne: number[] = [];
    numbers.forEach((num) => {
      increasedByOne.push(num + 1);
    });
    console.log(increasedByOne);
  }

  Properties() {
    const luke = {
      jedi: true,
      age: 28,
    };

    // bad
    // const isSith = luke['jedi'];

    // good
    const isJedi = luke.jedi;
  }

  checkName(hasName: string) {
    const name = this.getName();

    if (hasName === 'test') {
      return false;
    }

    if (name === 'test') {
      return false;
    }

    return name;
  }

  getName() {
    return 'abc';
  }
}
