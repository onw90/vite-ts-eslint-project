const sumAll = (tab: number[]): number => {
return tab.reduce((accumulator, currentValue,) => accumulator + currentValue, 0)
} 

console.log('wynik sumAll:', sumAll([1,2,3,4,5]));
