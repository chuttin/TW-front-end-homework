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

let descriptionAnime = () => {
  descriptionShowAll();
  descriptionShowTwoLine();
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
  document.getElementById('pending-percent').innerHTML = `${(pendingCount / sum) * 100}%`;
  document.getElementById('active-percent').innerHTML = `${(activeCount / sum) * 100}%`;
  document.getElementById('closed-percent').innerHTML = `${(closedCount / sum) * 100}%`;
}

window.onload = () => {
  getData(listShow);
  descriptionAnime();
  getData(menuCount);
}