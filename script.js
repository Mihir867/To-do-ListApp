const inputBox = document.getElementById("input-bar");
const listContainer = document.getElementById("list-container");

function countTasks() {
  const listContainer = document.getElementById("list-container");
  const tasks = listContainer.querySelectorAll("li");
  return tasks.length;
}

function updateTaskCount() {
  const countElement = document.getElementById("task-count");
  const count = countTasks();
  countElement.textContent = count;
}



function addEvent() {
  if (inputBox.value === '') {
    alert("You must write something to add a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "&times;";
    li.appendChild(span);
  }
  inputBox.value = "";
  updateTaskCount();
  saveData();
}


listContainer.addEventListener("click", function(e){
	if(e.target.tagName==="LI"){
		e.target.classList.toggle("checked");
		updateTaskCount();
		saveData();

	}
	else if(e.target.tagName==="SPAN"){
		e.target.parentElement.remove();
		updateTaskCount();
		saveData();

	}
}, false);


function saveData(){
	localStorage.setItem("data",listContainer.innerHTML);
	updateTaskCount();
}

function showTask(){
	listContainer.innerHTML= localStorage.getItem("data");
	updateTaskCount();
}

showTask();