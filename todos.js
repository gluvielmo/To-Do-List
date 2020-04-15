var list = document.querySelector('.task ul')
var taskDiv = document.querySelector('.task .addTask')
var btn = document.querySelector('.task a')

var tasks = [
    'Study C#',
    'Workout',
    'Read a book'
]

function renderDefaultTasks() {
    for (task of tasks) {
        var taskElement = document.createElement('li')
        var taskText = document.createTextNode(task)

        var newBtn = document.createElement("a")
        var removeText = document.createTextNode("Remove")
        newBtn.appendChild(removeText)
        newBtn.setAttribute("class", "remove")

        taskElement.appendChild(taskText)
        taskElement.appendChild(newBtn)
        list.appendChild(taskElement)
    }
}

renderDefaultTasks()

var remove = document.getElementsByClassName("remove");

for (var i = 0; i < remove.length; i++) {
    remove[i].onclick = function() {
        this.parentElement.remove()
    }
}

function createInput() {
    var newDiv = document.createElement("div");
    var newItem = document.createElement("input");
    newItem.style.width = "100%"

    newDiv.appendChild(newItem);
    taskDiv.insertBefore(newDiv, taskDiv.childNodes[0]);

    btn.style.display = "none"

    var newBtn = document.createElement("a")
    var taskText = document.createTextNode("Add new task")
    newBtn.appendChild(taskText)
    newBtn.setAttribute("class", "newBtn")

    taskDiv.appendChild(newBtn)

    newBtn.onclick = () => {
        addtask();
        newDiv.remove()
        newBtn.remove()
        btn.style.display = "inline-block"
    }
}

function addtask() {
    var inputValue = document.querySelector('.task input').value
    if (inputValue) {
        var taskElement = document.createElement('li')
        var taskText = document.createTextNode(inputValue)

        taskElement.appendChild(taskText)
        list.appendChild(taskElement)

        var newBtn = document.createElement("a")
        var removeText = document.createTextNode("Remove")
        newBtn.appendChild(removeText)
        newBtn.setAttribute("class", "remove")

        taskElement.appendChild(taskText)
        taskElement.appendChild(newBtn)
        list.appendChild(taskElement)
    }

    var remove = document.getElementsByClassName("remove");

    for (var i = 0; i < remove.length; i++) {
        remove[i].onclick = function() {
            this.parentElement.remove()
        }
    }
}

btn.onclick = () => {
    createInput();
}