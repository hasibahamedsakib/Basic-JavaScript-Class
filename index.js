let elementByID = (id) => document.getElementById(id);

let todoName = elementByID("todoName");
let todoDescription = elementByID("todoDescription");
let addTodo = elementByID("addBtn");
// todo container
let todosContainer = elementByID("todosContainer");

let todoIndex = 0;

addTodo.addEventListener("click", () => {
  let name = todoName.value;
  let description = todoDescription.value;
  if (name && description) {
    let todoObject = { name, description };

    //   clear the input filed
    todoName.value = "";
    todoDescription.value = "";

    // add new todos
    let createList = document.createElement("li");
    createList.setAttribute(
      "class",
      "flex items-center justify-between mb-2 bg-gray-800 rounded p-5"
    );
    createList.innerHTML = `
          <div id='complete-${todoIndex}'>
            <strong class="text-white text-lg">${todoObject?.name}</strong>
            <p class="text-white text-sm">${todoObject?.description}</p>
          </div>
          <div>
            <button
              class="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded mr-2"
              id='completeBtn-${todoIndex}'
            >
              Complete
            </button>
            <button
              class="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
              id='deleteBtn-${todoIndex}'
            >
              Delete
            </button>
          </div>        
          `;
    todosContainer.appendChild(createList);

    // deleted fucntionlit.
    let completeBtn = elementByID(`completeBtn-${todoIndex}`);
    let complete = elementByID(`complete-${todoIndex}`);
    completeBtn.addEventListener("click", () => {
      complete.setAttribute("class", "line-through");
    });
    let deleteBtn = elementByID(`deleteBtn-${todoIndex}`);
    deleteBtn.addEventListener("click", () => {
      todosContainer.removeChild(createList);
    });
    todoIndex++;
  }
});
