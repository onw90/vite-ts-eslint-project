function x(value: number | undefined) {
  if (value) {
    console.log('x * 2', value * 2);
  }
}

// ta funkcja moze nie miec wartosci, parametr opcjonalny ?, opcjonalne podajemy na końcu
function y(value?: number) {
  if (value) {
    console.log('x * 2', value * 2);
  }
}

x(44);
y(33);

const z = (value: 'Adam' | 'Karol') => {
    console.log(value);
    
}

z('Adam');


