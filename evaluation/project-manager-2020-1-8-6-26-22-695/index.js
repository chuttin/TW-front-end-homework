let getData = (callback) => {
  axios.get('http://localhost:3000/projects')
  .then(function(response) {
    return callback(response.data);
  });
}

let listShow = (data) => {
  let table = document.getElementById('project-table');
  data.map((ele) => {
    let row = document.createElement('tr');
    row.setAttribute('class', 'projRow');
    row.setAttribute('id', `${ele.id}`);
    row.innerHTML = `<td class="name">${ele.name}</td>
    <td class="description" id="description${ele.id}"><p class="showTwoLine">${ele.description}</p></td>
    <td class="endtime">${ele.endTime}</td>
    <td class="status ${statusToClass(ele.status)}" id="status${ele.id}">${ele.status}</td>
    <td class="operating"><button>删除</button></td>
    `;
    table.appendChild(row);
  });

  descriptionShowAll();
  descriptionShowTwoLine();
}

let statusToClass = (status) => {
  let statusClass = '';
  if (status === 'ACTIVE') {
    statusClass = 'active';
  }
  if (status === 'PENDING') {
    statusClass = 'pending';
  }
  if (status === 'CLOSED') {
    statusClass = 'closed';
  }
  return statusClass;
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

let menuCount = (data) => {
  let [activeCount, pendingCount, closedCount, sum] = [0, 0, 0, 0];
  data.map((ele) => {
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
  })

  document.getElementById('pending-count').innerHTML = pendingCount;
  document.getElementById('active-count').innerHTML = activeCount;
  document.getElementById('closed-count').innerHTML = closedCount;
  document.getElementById('all-count').innerHTML = sum;
  document.getElementById('pending-percent').innerHTML = `${Math.round((pendingCount / sum) * 100)}%`;
  document.getElementById('active-percent').innerHTML = `${Math.round((activeCount / sum) * 100)}%`;
  document.getElementById('closed-percent').innerHTML = `${Math.round((closedCount / sum) * 100)}%`;
}

let deleteProj = (data) => {
  let deleteButton = document.getElementById('project-table');

  deleteButton.addEventListener('click', (event) => {
    if (event.target.nodeName === 'BUTTON') {
      let id = event.target.parentNode.parentNode.id;
      deleteconfirm(data, id);
    }
  });
}

let deleteconfirm = (data, deleteId) => {
  let deleteconfirm = document.getElementById('delete-win');
  deleteconfirm.style.display = "block";

  let bodyEl = document.body;
  let top = window.scrollY;
  bodyEl.style.position = 'fixed';
  bodyEl.style.top = -top + 'px';

  deleteconfirm.addEventListener('click', (event) => {
    if (event.target.id === 'delete-yes') {
      data.map((ele) => {
        if (ele.id === Number(deleteId)) {
          axios.delete('http://localhost:3000/projects/'+ele.id);
          location.reload();
        }
      });
    }
    if (event.target.id === 'delete-no' || event.target.id === 'cancel-icon' || event.target.id === 'delete-yes') {
      deleteconfirm.style.display = "none";
      bodyEl.style.position = '';
      bodyEl.style.top = '';
      window.scrollTo(0, top);
    }
  });
}

window.onload = () => {
  getData(listShow);
  getData(menuCount);
  getData(deleteProj);
}