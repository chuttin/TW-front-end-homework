let getData = callback => {
  axios.get('http://localhost:3000/projects')
  .then(function(response) {
    return callback(response.data);
  });
}

let menuShow = data => {
  let [activeCount, pendingCount, closedCount, sum] = [0, 0, 0, 0];
  data.map(ele => {
    if (ele.status === "ACTIVE") {
      activeCount += 1;
    }
    if (ele.status === "PENDING") {
      pendingCount += 1;
    }
    if (ele.status === "CLOSED") {
      closedCount += 1;
    }
    sum += 1;
  });

  document.getElementById('pending-count').innerHTML = pendingCount;
  document.getElementById('active-count').innerHTML = activeCount;
  document.getElementById('closed-count').innerHTML = closedCount;
  document.getElementById('all-count').innerHTML = sum;
  document.getElementById('pending-percent').innerHTML = `${Math.round((pendingCount / sum) * 100)}%`;
  document.getElementById('active-percent').innerHTML = `${Math.round((activeCount / sum) * 100)}%`;
  document.getElementById('closed-percent').innerHTML = `${Math.round((closedCount / sum) * 100)}%`;
}

let listShow = data => {
  let table = document.getElementById('project-table');
  table.innerHTML = `<tr>
    <th class="name">项目名称</th>
    <th class="description"><p>项目描述</p></th>
    <th class="endtime">截止时间</th>
    <th class="status">状态</th>
    <th class="operating">操作</th>
  </tr>
  `;

  data.map(ele => {
    let row = document.createElement('tr');
    row.setAttribute('class', 'projRow');
    row.setAttribute('id', `${ele.id}`);
    row.innerHTML = `<td class="name">${ele.name}</td>
    <td class="description" id="description${ele.id}"><p class="showTwoLine">${ele.description}</p></td>
    <td class="endtime">${ele.endTime}</td>
    <td class="status ${ele.status.toLowerCase()}" id="status${ele.id}">${ele.status}</td>
    <td class="operating"><button onclick="deleteConfirm(this)">删除</button></td>
    `;
    table.appendChild(row);
  });

  descriptionShowAll();
  descriptionShowTwoLine();
}

let contentShow = (data) => {
  menuShow(data);
  listShow(data);
}

let descriptionShowAll = () => {
  let projTable = document.getElementById('project-table');
  projTable.addEventListener('mouseover', (event) => {
    if (event.target.nodeName === 'P') {
      event.target.removeAttribute('class');
    }
  });
}

let descriptionShowTwoLine = () => {
  let projTable = document.getElementById('project-table');
  projTable.addEventListener('mouseout', (event) => {
    if (event.target.nodeName === 'P') {
      event.target.setAttribute('class', 'showTwoLine');
    }
  });
}

let deleteConfirm = deleteButton => {
  let id = deleteButton.parentNode.parentNode.id;
  let deleteconfirm = document.getElementById('delete-win');
  deleteconfirm.style.display = "block";
  deleteconfirm.name = id;

  let bodyEl = document.body;
  let top = window.scrollY;
  bodyEl.style.position = 'fixed';
  bodyEl.style.top = -top + 'px';

  let deleteCancel = document.getElementById('cancel-icon');
  deleteCancel.addEventListener('click', deleteNo);
}

let deleteYes = confirm => {
  let bodyEl = document.body;
  let top = window.scrollY;
  let deleteconfirm = document.getElementById('delete-win');
  let deleteId = confirm.parentNode.parentNode.name;


  axios.delete(`http://localhost:3000/projects/${deleteId}`).then(() => {
    getData(contentShow);
  });
  
  deleteconfirm.style.display = "none";
  bodyEl.style.position = '';
  bodyEl.style.top = '';
  window.scrollTo(0, top);
}

let deleteNo = () => {
  let bodyEl = document.body;
  let top = window.scrollY;
  let deleteconfirm = document.getElementById('delete-win');

  deleteconfirm.style.display = "none";
  bodyEl.style.position = '';
  bodyEl.style.top = '';
  window.scrollTo(0, top);
}

window.onload = () => {
  getData(contentShow);
}