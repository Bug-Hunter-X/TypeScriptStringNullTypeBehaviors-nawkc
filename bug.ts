function printName(name: string | null): void {
  console.log(`Hello, ${name}`);
}

printName(null); // This will print 'Hello, null'
printName(undefined); // This will throw an error because 'undefined' is not assignable to 'string | null'