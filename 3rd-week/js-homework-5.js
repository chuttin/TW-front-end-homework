function addList() {
  var taskList = document.getElementById('task-list');
  var inputContent = document.getElementById('add-input');
  if (inputContent.value !== '') {
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
    checkBox.setAttribute('name', 'taskCheckBox')

    var taskContent = document.createElement('span');
    taskContent.innerHTML = inputContent.value;
    task.appendChild(taskContent);

    var deleteIcon = document.createElement('img');
    task.appendChild(deleteIcon);
    deleteIcon.setAttribute('src', 'close.png');

    inputContent.value = '';
  }
}

function activeList() {
  var listDiv = document.getElementById('list-div');
  listDiv.innerHTML = window.localStorage.getItem('firstData');

  var taskCheckbox = document.getElementsByName('taskCheckBox');
  let i = 0;
  while(i < taskCheckbox.length) {
    if (taskCheckbox[i].getAttribute('checked') === 'checked') {
      taskCheckbox[i].parentNode.remove();
      i = i - 1;
    }
    i++;
  }
  isChanged = 1;
  return isChanged;
}

function completeList () {
  var listDiv = document.getElementById('list-div');
  listDiv.innerHTML = window.localStorage.getItem('firstData');
  var taskCheckbox = document.getElementsByName('taskCheckBox');

  let i = 0;
  while(i < taskCheckbox.length) {
    if (!(taskCheckbox[i].getAttribute('checked') === 'checked')) {
      taskCheckbox[i].parentNode.remove();
      i = i - 1;
    }
    i++;
  }

  isChanged = 2;
  return isChanged;
}

function allList() {
  var listDiv = document.getElementById('list-div');
  listDiv.innerHTML = window.localStorage.getItem('firstData');
  isChanged = 3;
  return isChanged;
}

var isColor = false;
var isChanged = 0;

function onWhichStage(mainlist) {
  if (isChanged === 0) {
    addList();
    window.localStorage.setItem('firstData', mainlist.innerHTML);
  }else if (isChanged === 1) {
    mainlist.innerHTML = window.localStorage.getItem('firstData');
    addList();
    window.localStorage.setItem('firstData', mainlist.innerHTML);
    activeList();
    isChanged = 3;
  }else if (isChanged === 2) {
    mainlist.innerHTML = window.localStorage.getItem('firstData');
    addList();
    window.localStorage.setItem('firstData', mainlist.innerHTML);
    completeList();
    isChanged = 3;
  }else {
    mainlist.innerHTML = window.localStorage.getItem('firstData');
    addList();
    window.localStorage.setItem('firstData', mainlist.innerHTML);
    allList();
  }
}

window.onload = function () {
  var addBtn = document.getElementById('add-btn');
  var listDiv = document.getElementById('list-div');

  window.localStorage.setItem('firstData', listDiv.innerHTML);

  listDiv.addEventListener('click', function (event) {
    if (event.target.tagName.toLowerCase() === 'img') {
      var r = confirm("是否删除该 TODO？");
      if (r) {
        event.target.parentNode.remove();
        window.localStorage.setItem('firstData', listDiv.innerHTML);
      }
    }

    if (event.target.tagName.toLowerCase() === 'input') {
      if (event.target.getAttribute('checked') !== 'checked') {
        event.target.parentNode.style.textDecoration = 'line-through';
        event.target.parentNode.style.color = '#9A9999';
        event.target.setAttribute('checked', 'checked');
      }else {
          event.target.parentNode.style.textDecoration = 'none';
          event.target.parentNode.style.color = 'black';
          event.target.removeAttribute('checked');
        }
    }
    window.localStorage.setItem('firstData', listDiv.innerHTML);
  });

  addBtn.addEventListener('click', function() {
    onWhichStage(listDiv);
  });

  window.addEventListener('keydown', function (event) {
    if (event.code === 'Enter') {
      onWhichStage(listDiv);
    }
  });

  var activeBtn = document.getElementById('active-btn');
  activeBtn.addEventListener('click', activeList);

  var completeBtn = document.getElementById('complete-btn');
  completeBtn.addEventListener('click', completeList);

  var allBtn = document.getElementById('all-btn');
  allBtn.addEventListener('click', allList);
}