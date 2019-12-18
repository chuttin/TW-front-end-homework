function refreshList(arr) {
  var taskList = document.getElementById('task-list');
  taskList.innerHTML = '';

  for(let i = 0; i < arr.length; i++) {
    var task = document.createElement('li');
    task.setAttribute('name', 'task-li');
    taskList.appendChild(task);

    if (isColor) {
      task.style.backgroundColor = '#F3EBEB';
    }
    isColor = !isColor;

    var checkBox = document.createElement('input');
    task.appendChild(checkBox);
    checkBox.setAttribute('type', 'checkbox');

    if (arr[i].checked === 'checked') {
      checkBox.setAttribute('checked', 'checked');
      Done(task);
    }

    checkBox.setAttribute('name', 'taskCheckBox');

    var taskContent = document.createElement('span');
    taskContent.innerHTML = arr[i].content;
    task.appendChild(taskContent);

    var deleteIcon = document.createElement('img');
    task.appendChild(deleteIcon);
    deleteIcon.setAttribute('src', 'close.png');
  }
}

function deleteIcon(clicktarget) {
  var r = confirm("是否删除该 TODO？");
  if (r) {
    for (let i = 0; i < dataStorage.length; i++) {
      if (dataStorage[i].content === clicktarget.previousSibling.innerHTML) {
        dataStorage.splice(i, 1);
      }
    }
  }
}

function Done (task) {
  task.style.textDecoration = 'line-through';
  task.style.color = '#9A9999';
}

function activeList() {
  var activeData = [];
  for (let i = 0; i < dataStorage.length; i++) {
    if (dataStorage[i].checked === 'none') {
      activeData.push(dataStorage[i]);
    }
  }
  refreshList(activeData);
  phase = 1;
}

function completeList() {
  var completeData = [];
  for (let i = 0; i < dataStorage.length; i++) {
    if (dataStorage[i].checked === 'checked') {
      completeData.push(dataStorage[i]);
    }
  }
  refreshList(completeData);
  phase = 2;
}

function allList() {
  refreshList(dataStorage);
  phase = 3;
}

function addStorage() {
  var toDoObj = {};
  var inputContent = document.getElementById('add-input');
  toDoObj.content = inputContent.value;
  toDoObj.checked = 'none';
  dataStorage.push(toDoObj);
  inputContent.value = '';
}

function phaseAct() {
  if (phase === 1) {
    activeList();
  }

  if (phase === 2) {
    completeList();
  }

  if (phase === 3) {
    allList();
  }
}

var dataStorage = [];
var phase = 3;
var isColor = false;

window.onload = function () {
  var addBtn = document.getElementById('add-btn');
  addBtn.addEventListener('click', function() {
    addStorage();
    phaseAct();
  });

  window.addEventListener('keydown', function (event) {
    if (event.code === 'Enter') {
      addStorage();
      phaseAct()
    }
  });

  var listDiv = document.getElementById('list-div');
  listDiv.addEventListener('click', function (event) {
    if (event.target.tagName.toLowerCase() === 'img') {
      deleteIcon(event.target);
      refreshList(dataStorage);
    }

    if (event.target.tagName.toLowerCase() === 'input') {
      for (let i = 0; i < dataStorage.length; i++) {
        if (dataStorage[i].content === event.target.nextSibling.innerHTML) {
          if (dataStorage[i].checked === 'none') {
            dataStorage[i].checked = 'checked';
          }else if(dataStorage[i].checked === 'checked'){
            dataStorage[i].checked = 'none';
          }
        }
      }
      phaseAct();
    }
  });

  var activeBtn = document.getElementById('active-btn');
  activeBtn.addEventListener('click', activeList);

  var completeBtn = document.getElementById('complete-btn');
  completeBtn.addEventListener('click', completeList);

  var allBtn = document.getElementById('all-btn');
  allBtn.addEventListener('click', allList);
}