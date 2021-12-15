// Grab All
const input = document.querySelector('.todo');
const submitBtn = document.querySelector('.todo-submit');
const outputBox = document.querySelector('.todo-output');

let stateIndex = 0;

// setting Event
input.addEventListener('keypress', (e) => {
  if(e.key === "Enter") {
    addTodo(e.target.value);
    input.value = "";
  };
});

submitBtn.addEventListener('click', () => {
  const val = input.value;
  addTodo(val);
  input.value = "";
})


// Add todo function
function addTodo(value) {
  if(value !== '') {
    const singleTodo = create('div', { class: 'single-output', id: stateIndex });
    const todoContent = create('p', { class: 'output-content'});
    todoContent.innerHTML = value;
    const actions = create('div', { class: 'actions' });
    const editBtn = create('button', {
      class: 'action-btn edit', key: stateIndex
    });

    editBtn.innerHTML = 'E';
    const dltBtn = create('button', {
      class: 'action-btn delete',  Key: stateIndex
    });
    dltBtn.innerHTML = 'D';

    singleTodo.appendChild(todoContent);
    actions.appendChild(editBtn);
    actions.appendChild(dltBtn);
    singleTodo.appendChild(actions);
    outputBox.appendChild(singleTodo);

    ++stateIndex;
    edit();
    dlt();
  }
}


// Edit Function
function edit () {
    const edit_btn = document.querySelectorAll('.edit');
    edit_btn.forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.getAttribute('key');
        const back_content = document.getElementById(key);
        const newInput = prompt("Enter a new Data");
        if(newInput !== '') {
          back_content.querySelector('p').innerHTML = newInput;
        }
      })
    })
}


// Delete Function
function dlt () {
  const dlt_btn = document.querySelectorAll('.delete');
  dlt_btn.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('key');
      const content = document.getElementById(key);
      outputBox.removeChild(content)
    });
  })
}


// Essensial Methods
// DOM Create Method
function create () {
  if (arguments.length === 0) return document.createElement('div');
  if(arguments.length === 1) return document.createElement(arguments[0]);
  if(arguments.length === 2) {
    const attr_obj = arguments[1];
    const ele = document.createElement(arguments[0]);
    for(let i in attr_obj) {
      ele.setAttribute(i, attr_obj[i]);
    }
    return ele;
  }
}
