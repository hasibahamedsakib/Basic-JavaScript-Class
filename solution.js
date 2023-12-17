const elementById = (id) => document.getElementById(id);

// title
const todoName = elementById("todoName");

// todo description
const todoDesc = elementById("todoDescription");

// add todo button
const addBtn = elementById("addBtn");
// set all todos in the container
const todosContainer = elementById("todosContainer");

let todoIndex = 0;

addBtn.addEventListener("click", () => {
  let name = todoName.value;
  let desc = todoDesc.value;

  let todo = { name, desc };

  if (name && desc) {
    console.log(todoIndex);

    // creating a html tag in js
    let todoList = document.createElement("li");
    todoList.setAttribute(
      "class",
      "flex items-center justify-between mb-2 bg-gray-800 rounded p-5"
    );

    todoList.innerHTML = `
           <div id='todoWrapper-${todoIndex}'>
            <strong class="text-white text-lg">${todo.name}</strong>
            <p class="text-white text-sm">
              ${todo.desc}
            </p>
          </div>
          <div>
            <button
              class="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded mr-2"
               id="completeTodo-${todoIndex}"
            >
              Complete
            </button>
            <button
              class="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
              id="deleteTodo-${todoIndex}"
            >
              Delete
            </button>
          </div>
    `;

    todosContainer.appendChild(todoList);

    // clear the input field
    todoName.value = "";
    todoDesc.value = "";

    // find update button
    const todoWrapper = elementById(`todoWrapper-${todoIndex}`);
    const completeBtn = elementById(`completeTodo-${todoIndex}`);
    completeBtn.addEventListener("click", () => {
      todoWrapper.setAttribute("class", "line-through opacity-70");
    });

    // find delete button
    const deleteBtn = elementById(`deleteTodo-${todoIndex}`);
    deleteBtn.addEventListener("click", () => {
      todosContainer.removeChild(todoList);
    });

    //   updating todo index.
    todoIndex++;
  } else {
    alert("Please Provide Todo Title And Description");
  }
});
