const addButtonActs=document.getElementById('add-button');
const newToDoElementName=  document.getElementById('new-task-input');
addButtonActs.addEventListener('click',whenAddButtonClicked);
newToDoElementName.addEventListener('keypress',whenKeyPressed);

function    whenAddButtonClicked (){
    const newToDoElement=document.createElement('div');
    const checkDone=document.createElement('button');
    checkDone.innerText='X';
    checkDone.setAttribute('type','button');
    newToDoElement.addEventListener('click',whenStatusChanged);
    checkDone.addEventListener('click',whenchekDoneClicked);
    newToDoElement.innerHTML=newToDoElementName.value;
    newToDoElement.appendChild(checkDone);
    newToDoElement.classList.add('todo-item');
    const allToDoes=document.getElementById("todo-items-list");
    allToDoes.appendChild(newToDoElement);
    

   

    newToDoElementName.value='';
    
}

function whenKeyPressed(e){
    if (e.which===13) whenAddButtonClicked();
}

function whenchekDoneClicked(e){
    const currenElement=e.target;
    currenElement.parentElement.remove();
    e.stopPropagation();
}
function whenStatusChanged(e){
    const currenTask=e.currentTarget;
    currenTask.classList.toggle('completed');
}