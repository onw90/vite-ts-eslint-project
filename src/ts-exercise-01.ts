console.log('Hello');

// implicite typing
const liczba = 65;
// explicite typing - tak nie robić, niepotrzebne
const tekst: string = 'abc';
const prawda = true;
const brak = undefined;
const pusty = null;

const add = (a: number, b: number) => a + b;
add(4, 9);

const sum = (a: number, b: number | null): number => {
 // if (a>10) return 'too large number';
  if (b === null) return a * a;
  return a + b;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const greet = (name : any): string => {
    return `Hello ${name}`;
}


//lepiej unknown niz any - ale sprawdzamy w ifach typy i dopiero działanie funkcji
const sumOrGreet = (value: unknown): string  => {
    if (typeof value === 'number') {return `Suma: ${value + value}`}
     else  {
        return `Greetings ${value}`
     }
     
}

greet
console.log(liczba, tekst, prawda, brak, pusty, greet("Ola"), sumOrGreet('Jan'));
