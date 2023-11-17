// typy generyczne

const table : number[] = [];
//z wykorzystniem typow generycznych
const table2 = Array<number>();
const printTable = (inputArr: Array<number>) => {
    console.log('Print table using generic type:', inputArr);
    
}
printTable([1,2,3,4,5])