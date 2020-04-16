var list = document.querySelector('.task ul')
var taskDiv = document.querySelector('.task .addTask')
var btn = document.querySelector('.task a')

var tasks = JSON.parse(localStorage.getItem('taskList')) || ['Study JS', 'Workout', 'Read a book'];

function renderTasks() {
    list.innerHTML = '';

    for (task of tasks) {
        var taskElement = document.createElement('li')
        var taskText = document.createTextNode(task)

        var newBtn = document.createElement('a')
        var removeText = document.createTextNode('Remove')
        newBtn.appendChild(removeText)
        newBtn.setAttribute("class", "remove")

        var pos = tasks.indexOf(task);

        newBtn.setAttribute('onclick', 'removeTask(' + pos + ')');

        taskElement.appendChild(taskText)
        taskElement.appendChild(newBtn)
        list.appendChild(taskElement)
    }
}

renderTasks()

function createInput() {
    var newDiv = document.createElement('div');
    var newItem = document.createElement('input');
    newItem.style.width = '100%'

    newDiv.appendChild(newItem);
    taskDiv.insertBefore(newDiv, taskDiv.childNodes[0]);

    btn.style.display = 'none'

    var newBtn = document.createElement('a')
    var taskText = document.createTextNode('Add new task')
    newBtn.appendChild(taskText)
    newBtn.setAttribute('class', 'newBtn')

    taskDiv.appendChild(newBtn)

    newBtn.onclick = () => {
        addtask();
        newDiv.remove();
        newBtn.remove();
        btn.style.display = 'inline-block'
    }
}

function addtask() {
    var inputValue = document.querySelector('.task input').value
    if (inputValue) {
        tasks.push(inputValue)
    }

    renderTasks();
    saveToStorage();
}

btn.onclick = createInput;

function removeTask(pos) {
    tasks.splice(pos, 1);

    renderTasks();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('taskList', JSON.stringify(tasks))
}