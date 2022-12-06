import { Component } from '@angular/core';

// npm install eslint-config-airbnb —-save-dev
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lanternUi12334123123123';

  password = '123';

  shipname = 'red';

  numbercheck(x: number) {
    // bad
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
    let sum = 0;
    // for (const num of numbers) {
    //   sum += num;
    // }
    // good
    numbers.forEach((num) => {
      sum += num;
    });
    console.log(sum);
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
    console.log(isJedi);
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
    return 'a word';
  }

  blank() {

  }

  getX(x: number, y: number) {
    return x + y;
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
    let num = 1;
    // FIXME: this should be fixed
    // num++;
    num += 1;

    // TODO: total should be configurable by an options param
    console.log('remove this', isValid);
    return num;
  }
}
