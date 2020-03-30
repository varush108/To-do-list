function addTask() {
    let inpNewTask = document.getElementById("inpNewTask");
    let ulTaskList = document.getElementById("ulTaskList");
    if (inpNewTask.value != "") {
        console.log("here")
        let listItem = document.createElement("li");
        listItem.classList.add("list-group-item");
        listItem.onclick = function addStrike() {

            this.classList.toggle("strike");

        }
        listItem.textContent = inpNewTask.value;
        inpNewTask.value = "";
        ulTaskList.appendChild(listItem);
    }


}

function deleteTask() {
    const ulTaskList = document.getElementById("ulTaskList");
    let doneTasks = document.getElementsByClassName("strike");
    while (doneTasks[0]) {
        ulTaskList.removeChild(doneTasks[0]);
    }
}