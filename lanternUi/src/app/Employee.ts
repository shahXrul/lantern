export class Employee {
  empCode: number;

  empName: string;

  constructor(code: number, name: string) {
    this.empName = name;
    this.empCode = code;
  }
}

export function mydemo() {
  // logic will go here ..

  const a = 'asd';
  const abc = 'qwe';
  console.log('this is exportable function in TypeScript. !!');
}
