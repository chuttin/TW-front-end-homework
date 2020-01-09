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
    <td class="status ${statusJudge(ele.status)}" id="status${ele.id}">${ele.status}</td>
    <td class="operating"><button>删除</button></td>
    `;
    table.appendChild(row);
  });
}

let statusJudge = (status) => {
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

window.onload = () => {
  getData(listShow);
  descriptionAnime();
}