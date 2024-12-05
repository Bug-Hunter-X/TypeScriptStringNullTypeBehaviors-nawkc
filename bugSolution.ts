function printName(name: string | null | undefined): void {
  if (name === undefined) {
    console.log('Hello, guest'); // Handle undefined case
    return;
  }
  console.log(`Hello, ${name}`);
}

printName(null);
printName(undefined);
printName('John Doe');

// Alternative using optional chaining
function printName2(name?: string): void {
  console.log(`Hello, ${name ?? 'guest'}`);
}

printName2();
printName2('Jane Doe');