window.onload = function () {
  tableContent();
  eventListen();
}

function tableContent() {
  addCommodities();
  lastRow();
}

function lastRow() {
  var allTotalPrice = document.getElementById('allTotalPrice');
  var itemCount = totalCal()[0];
  var finalPrice = totalCal()[1];
  allTotalPrice.innerHTML = '共计' + itemCount +'件商品，' + finalPrice +'\u00A5';
}

function totalCal(){
  var count = 0;
  var price = 0;
  for (let i = 0; i < carProducts.length; i++){
    if (carProducts[i].checked){
      count = count + carProducts[i].count;
      price = price + carProducts[i].count * carProducts[i].price;
      document.getElementById('itemCheck' + i).checked = true;
    }else if (!carProducts[i].checked) { 
      document.getElementById('itemCheck' + i).checked = false;
    }
    var lastRowPara = [count, price];
  }
  return lastRowPara;
}


function addCommodities() {
  var par = document.getElementById('table');
  par.innerHTML = '';
  carProducts.forEach(function(item, index) {
    par.innerHTML = par.innerHTML +'<tr id="' + index +'">' + 
    '<td><input type="checkbox" class="itemCheck" id="itemCheck' + index + '"/></td>' + 
    '<td>' + item.name + '</td>' +
    '<td>' + item.price + '</td>' +
    '<td><button class="minusBtn">-</button>' + item.count + '<button class="addBtn">+</button></td>'+
    '<td>' + item.count*item.price + '</td>'+
    '</tr>';
  });

  lastTr = document.createElement('tr');
  par.appendChild(lastTr);

  lastTr.innerHTML = '<td>全选<input type="checkbox" id="allChosen" /></td>' +
  '<td colspan=4 id="allTotalPrice"></td>'
}

function eventListen() {
  var par = document.getElementById('table');
  var maxNum = [];
  carProducts.forEach(function(item) {
    maxNum.push(item.count);
  })
  par.addEventListener('click', function() {
    if (event.target.className === 'minusBtn'){
      let idValue = event.target.parentNode.parentNode.id;
      carProducts[idValue].count -= 1;
      if (carProducts[idValue].count <= 0){
        carProducts.splice(idValue, 1);
      }
      tableContent();
    }else if (event.target.className === 'addBtn') {
      let idValue = event.target.parentNode.parentNode.id;
      if (carProducts[idValue].count < maxNum[idValue-1]) {
        carProducts[idValue].count += 1;
        tableContent();
      }
    }else if (event.target.className === 'itemCheck') {
      let idValue = event.target.parentNode.parentNode.id;
      carProducts[idValue].checked = event.target.checked;
      tableContent();

    }else if(event.target.id === 'allChosen') {
      for (let i = 0; i < carProducts.length; i++){
        carProducts[i].checked = allChosen.checked;
      }
      lastRow();
    }
  });
}