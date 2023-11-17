//funkcję countCharacters liczącą ilość znaków w stringu
const countCharacters = (a: string): number => a.length;
countCharacters('lololo');
console.log('countCharacters', countCharacters('lololo'));

//funkcję isEven mówiącą czy liczba jest parzysta czy nie (zwracająca boolean)

function isEven(liczba: number): boolean {
  return liczba % 2 === 0;
}

console.log('isEven', isEven(1));

//funkcję getParityMessage która na podstawie boolean zwraca komunikat ta liczba jest parzysta/ta liczba nie jest parzysta

const getParityMessage = (value: boolean): string => {
  if (value) {
    return 'liczba jest parzysta';
  } else {
    return 'liczba jest nieparzysta';
  }
};

console.log(getParityMessage(true));


//funkcję processString która na podstawie stringa, wypisuje go, wypisuje liczbę jego znaków
// oraz informację czy liczba znaków jest/nie jest parzysta. Funkcja ta powinna wywoływać 3
// powyższe funkcje (zwraca string)

const processString = (value: string): string => {
    return value + ' ' + countCharacters(value) + ' ' + isEven(value.length)
}

console.log(processString('Adam'));


// value jest opcjonalne
const processString2 = (value?: string): string => {
  if(!value) {
     return 'Nie podano argumentu'
  }
  return value + ' ' + countCharacters(value) + ' ' + isEven(value.length)
}

console.log(processString2(), processString2('Kasia'));
 
