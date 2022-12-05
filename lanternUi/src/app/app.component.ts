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

  shipname = 'red';

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
      this.shipname = '';
      return false;
    }

    return name;
  }

  getName() {
    return 'abc';
  }

  unusedvar() {
    const someunusedvar = 42;

    // Write-only variables are not considered as used.
    let y = 10;
    y = 5;

    // A read for a modification of itself is not considered as used.
    let z = 0;
    z += 1;
  }

  getX(x: number, y: number) {
    return x;
  }

  foo() {
    const x = 1;
    const y = 2;
    if (x) {
      return x;
    }
    return y;
  }

  // no-dupe-else-if
  // foo2(n: number) {
  //   if (n === 1) {
  //     this.foo();
  //   } else if (n === 2) {
  //     this.bar();
  //   } else if (n === 3) {
  //     this.baz();
  //   } else if (n === 2) {
  //     this.quux();
  //   } else if (n === 5) {
  //     this.quuux();
  //   }
  // }

  foo3(n: number) {
    if (n === 1) {
      this.foo();
    } else if (n === 2) {
      this.bar();
    } else if (n === 3) {
      this.baz();
    } else if (n === 4) {
      this.quux();
    } else if (n === 5) {
      this.quuux();
    }
  }

  quux() {
    console.log('Method not implemented.');
  }

  baz() {
    console.log('Method not implemented.');
  }

  bar() {
    console.log('Method not implemented.');
  }

  quuux() {
    console.log('Method not implemented.');
  }

  unaryincrements(isValid: boolean) {
    const foo = 'superLongLongLongLongLongLongLongLongString';
    let num = 1;
    // FIXME: shouldn’t use a global here
    // num++;
    num += 1;

    // TODO: total should be configurable by an options param
    console.log('remove this');
    return num;
  }
}
