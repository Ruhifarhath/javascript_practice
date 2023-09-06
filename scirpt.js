const inputBox = document.getElementById("inputbox");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }

    else{
        let li = document.createElement("li") // creating element with li tag
        li.innerHTML= inputBox.value; // inserting input element
        listContainer.appendChild(li); // adding li input to list container
        let span= document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
        }
        inputBox.value="";
        saveData();
}

listContainer.addEventListener("click",function(e) {
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }

    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();