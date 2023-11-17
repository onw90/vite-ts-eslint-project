// tablice
const tablica = [1,2,3,4];
let tablica2: (number | string)[];
// eslint-disable-next-line prefer-const, @typescript-eslint/no-unused-vars
tablica2 = [4,5,6, "siedem"];
tablica.push(5);

type Building = {
    floors: number;
    bedrooms:number;
    adress: string;
}

const buildings : Building[] = [];
buildings.push({adress: 'Warsaw', bedrooms: 3, floors: 9});
buildings.push({adress: 'Cracow', bedrooms: 2, floors: 3});

const bedrooms = buildings.map((value)=>value.bedrooms);
const floors = buildings.map(({floors})=>floors);
console.log('bedrooms', bedrooms);
console.log('floors', floors)


type Touple = [number, string];
// tu kolejność ma znaczenie!!
const touple : Touple = [3, 'Adam'];
console.log('touple', touple);
 