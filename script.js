let input = document.getElementById('input'),
    btnCreate = document.getElementById('create'),
    tasks = document.getElementById('tasks');

let array;

if (!localStorage.tasks) {
    array = []
} else {
   array = JSON.parse(localStorage.getItem('tasks'))
}

function Task(text) {
    this.text = text;
}

function template(task, index) {
    return`
        <div class="task">
            ${task.text}
            <button onclick = "removeTask(${index})">Delete</button>
        </div>
        `
}

function addHtmlelement() {
    tasks.innerHTML = ''
    if (array.length > 0) {
        array.forEach((elem,index) => {
            tasks.innerHTML += template(elem, index)
        });
    }
}
addHtmlelement()

function LocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(array))
}

function removeTask(index){
    array.splice(index,1)
    LocalStorage()
    addHtmlelement()
}


btnCreate.addEventListener('click', function () {
    array.push(new Task(input.value));
    input.value = ''
    LocalStorage()
    addHtmlelement()
})

