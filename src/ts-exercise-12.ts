// Utility Types
type AnimalFunction = (name: string) => { name: string };
const animalFunction: AnimalFunction = (name) => ({ name });
console.log('animalFunction', animalFunction('Elephant'));

type AnimalObject = ReturnType<AnimalFunction>;
type AnimalObject2 = ReturnType<typeof animalFunction>;
 
interface Todo {
    title: string;
    description: string;
  }
   
  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
  }
   
  const todo1 = {
    title: "organize desk",
    description: "clear clutter",
  };
   
  const todo2 = updateTodo(todo1, {
    description: "throw out trash",
  });

  console.log('Utility types Partial todo', todo2);

  type TodoTitle = Omit<Todo, "description">;
 
const todoTitle: TodoTitle = {
  title: "Pick up kids",
};
  
type ToDoDescription = Pick<Todo, "description">;
const toDoDescription: ToDoDescription = {
    description: 'hello'
}

console.log('Utility types Pick, Omit: ', todoTitle, toDoDescription);

interface MyToDo {
    id: number,
    title: string,
    description: string,
    author: string,
}

const addToDo = (todo: Omit<MyToDo, "id">) => {
    // zapisz dane na serwerze fetch....
}
const editToDo = (todo: Omit<MyToDo, "author">) => {
    // zapisz dane na serwerze
}