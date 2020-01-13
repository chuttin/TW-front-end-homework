let getData = callback => {
  return axios.get('http://localhost:3000/projects');
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
  <th class="endtime">
    <span>截止时间</span>
    <div class="sort-icon">
      <svg class="icon list-icon arrow-click" id="up-arrow" aria-hidden="true">
        <use xlink:href="#icon-shengxu"></use>
      </svg>
      <svg class="icon list-icon arrow-unclick" id="down-arrow" aria-hidden="true">
        <use xlink:href="#icon-jiangxu1"></use>
      </svg>
    </div>
  </th>
  <th class="status">状态</th>
  <th class="operating">操作</th>
 </tr>`;

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
  upsort(data);
  downsort(data);
  search(data);
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
    getData().then(response => {
      contentShow(response.data);
    });
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

const upsort = (data) => {
  let upsortButton = document.getElementById('up-arrow');
  upsortButton.addEventListener('click', () => {
    data.sort((a, b) => {
      return a.endTime < b.endTime ? -1 : 1;
    });
    contentShow(data);
  });
}

const downsort = (data) => {
  let downsortButton = document.getElementById('down-arrow');
  // let upsortData = [];
  downsortButton.addEventListener('click', () => {
    data.sort((a, b) => {
      return a.endTime < b.endTime ? 1 : -1;
    });
    contentShow(data);
  });
}

const search = (data) => {
  let searchSubmit = document.getElementById('search-icon');
  let searchData = [];
  searchSubmit.addEventListener('click', () => {
    let searchData = [];
    let searchContent = document.getElementById('search-content').value;
    if(searchContent) {
      data.forEach((ele) => {
        if (ele.name.match(searchContent)) {
          searchData.push(ele);
        }
      });
      listShow(searchData);
    }else {
      listShow(data);
    }
  });

}

window.onload = () => {
  getData().then(response => {
    contentShow(response.data);
  });
}