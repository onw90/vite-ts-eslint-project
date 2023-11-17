type Animal = {
  name: string;
  age?: number;
};

type PrintAnimal = (animal: Animal) => void;
// void nic nie zwraca

const printAnimal: PrintAnimal = (animal) => {
  console.log(animal.name, animal.age);
};

printAnimal({ name: 'Bear' });
printAnimal({ name: 'Tiger', age: 3 });

// tu type lub interface
type Car = {
  name: string;
  printName: () => void;
};

// const car: Car = {
//   name: 'And',
//   printName: () => {
//     console.log('Hello');
//   },
// };

class CarClass implements Car {
    private abc = 7; // prywatna zmienna niedostepna na zewnątrz
    public name = 'Opel';
    public printName = () => console.log(this.name);

}

const car = new CarClass();
car.printName();


type UnionTypeParam = string | number;
// tego nie mogę zrobić wewnatrz interface'u, tylko tak:

interface Ship {
    name: UnionTypeParam
}
// interface definiuje wartości

interface FunctionInt {
    (value: string): void
}
// marge'owanie definicji

type Dog = {
    name: string;
}

// type Dog = {
//     age: number
// }

type DogWithAge = Dog & {
age: number;
}

interface Cat {
    name: string;
}
// rozszerzam interface Cat
interface Cat {
    age: number;
}

const printCat = (value: Cat) => {
    console.log(value);
    
}

printCat({age: 3, name: 'Kotek'})