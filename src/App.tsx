import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './ts-exercise-01';
import './ts-exercise-02';
import './ts-exercise-03';
import './ts-exercise-04';
import './ts-exercise-05';
import './ts-exercise-06';
import './ts-exercise-07';
import './ts-exercise-08';
import './ts-exercise-09';
import './ts-exercise-10';
import './ts-exercise-12';
import { TypeScriptComponent } from './TypeScriptComponent';
import { Planet, PlanetsRoot } from './planetsTypes';

const getDataFromLocalStorage = (): number => {
  const stringCount = localStorage.getItem('count');
  if (stringCount) {
    const count = parseInt(stringCount);
    //const count = JSON.parse(stringCount) as number;
    return count;
  } else {
    return 0;
  }
};

const saveToLocalStorage = (count: number) => {
  localStorage.setItem('count', count.toString());
};
// TS ogranicza dynamiczność typowania (na strongly typed) i coersing z JS
// w przeglądarce nie wykonuje się TS, tylko kod zostaje zamieniony na JS --> transpilacja/kompilacja na JS który jest wykonywany przez przeglądarkę
function App() {
  console.log('odczyt z local storage', getDataFromLocalStorage());

  //wykorzystanie ts generics type interence
  const [count, setCount] = useState(getDataFromLocalStorage); // wartość początkowa pochodzi z local storage, przy odswiezeniu str mamy poprzednią wartość countera
  //wykorzystanie ts generics explicite type definition
  //const [message, setMessage] = useState<string | number>('');
  const [planets, setPlanets] = useState<Planet[]>([]);

  // function X() {
  //   console.log('X');
  // }

  const v: string = 'test';
  const d: number = 2;

  // function Y() {
  //   console.log('S');
  // }

  // X();
  // Y();
  // console.log(v, g);

  useEffect(() => {
    async function fetchPlanets() {
      const result = await fetch('https://swapi.dev/api/planets/?page=1');
      if (result.ok) {
        const data: PlanetsRoot = await result.json();
        setPlanets(data.results);
      }
    }
    fetchPlanets();
  }, []);

  const handleOnClick = () => {
    setCount((count) => count + 1);
    saveToLocalStorage(count + 1);
    return count + 1;
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleOnClick}>count is {count}</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <TypeScriptComponent name="John" age={33}></TypeScriptComponent>
      <div>
        Lista planet{' '}
        <ul>
          {planets.map(({ name }) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
      {v}
      {d}
    </>
  );
}

export default App;
