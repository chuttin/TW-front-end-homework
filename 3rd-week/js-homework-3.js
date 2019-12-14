var carProducts = [
  {
    "id": 1,
    "name": "英雄牌 钢笔",
    "count": 1,
    "price": 69,
    "checked": false
  },
  {
    "id": 2,
    "name": "晨光牌 铅字笔",
    "count": 2,
    "price": 5.5,
    "checked": true
  },
  {
    "id": 3,
    "name": "晨光牌 铅笔",
    "count": 1,
    "price": 2,
    "checked": false
  },
  {
    "id": 4,
    "name": "狗熊牌 橡皮擦",
    "count": 1,
    "price": 1,
    "checked": false
  },
  {
    "id": 5,
    "name": "瑞士牌 双肩书包",
    "count": 1,
    "price": 199,
    "checked": true
  },
  {
    "id": 6,
    "name": "晨光牌 作业本",
    "count": 5,
    "price": 2.5,
    "checked": false
  }
];

function countCal(){
  var count = 0;
  for (let i = 0; i < carProducts.length; i++){
    if (carProducts[i].checked){
      count = count + carProducts[i].count;
    }
  }
  return function(){
    return count;
  }
}

function priceCal(){
  var price = 0;
  for (let i = 0; i < carProducts.length; i++){
    if (carProducts[i].checked){
      price = price + carProducts[i].count * carProducts[i].price;
    }
  }
  return function(){
    return price;
  }
}

var itemCount = countCal()();
var finalPrice = priceCal()();


window.onload = function () {
  var par = document.getElementById('table');

  for (let i = 0; i < carProducts.length; i++) {
    var tr = document.createElement('tr')
    par.appendChild(tr);
    addCommodities(carProducts[i],tr);
  }

  allChosen(par);

  par.addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() === 'input' || event.target.tagName.toLowerCase() === 'button') {
      itemCount = countCal()();
      finalPrice = priceCal()();
      allTotalPrice.innerHTML = '共计' + itemCount +'件商品，' + finalPrice +'\u00A5';
    }
  });
  
  var allTotalPrice = document.createElement('td');
  allTotalPrice.setAttribute('colspan', 4);
  par.lastChild.appendChild(allTotalPrice);
  allTotalPrice.innerHTML = '共计' + itemCount +'件商品，' + finalPrice +'\u00A5';
}


var j = 1;
function addCommodities(item, trContent) {
  var input = document.createElement('input');
  var maxNum = item.count;
  input.setAttribute('type', 'checkbox');

  if (item.checked){
    input.setAttribute('checked', 'checked');
  }

  input.addEventListener('click', function () {
    if (item.checked === true){
      item.checked = false;
    }else{
      item.checked = true;
    }

    if (item.checked){
      input.setAttribute('checked', 'checked');
    }
  });


  var firstCol = trContent.appendChild(document.createElement('td'));
  firstCol.appendChild(input);

  if (item.id === j) {
    for (let m in item){
      if (m === "name"){
        var td = document.createElement('td');
        trContent.appendChild(td);
        td.innerHTML = item.name;
      }else if (m === "price"){
        var td = document.createElement('td');
        trContent.insertBefore(td, trContent.lastChild);
        td.innerHTML = item.price;
      }else if (m === "count") {
        var td = document.createElement('td');
        trContent.appendChild(td);

        var minusBtn = document.createElement('button');
        minusBtn.setAttribute('id', 'minus');
        var addBtn = document.createElement('button');
        addBtn.setAttribute('id', 'add');
        var countNum = document.createElement('span');

        td.appendChild(minusBtn);
        minusBtn.innerHTML = '-';

        td.appendChild(countNum);
        countNum.innerHTML = item.count;
        td.appendChild(addBtn);
        addBtn.innerHTML = '+';
      }
    }

    minusBtn.addEventListener('click', function(){
      item.count = item.count - 1;
      if (item.count <= 0){
        trContent.remove();
      }else {
        countNum.innerHTML = item.count;
        totalPrice.innerHTML = item.count * item.price;
      }
      console.log(item.count);
    });

    addBtn.addEventListener('click', function(){
      if (item.count < maxNum) {
        item.count = item.count + 1;
        countNum.innerHTML = item.count;
        totalPrice.innerHTML = item.count * item.price;
      }
      console.log(item.count);
    });


    var totalPrice = document.createElement('td');
    trContent.appendChild(totalPrice);
    totalPrice.innerHTML = item.count * item.price;
    j++;
  }
}

function allChosen(parent){
  lastTr = document.createElement('tr');
  lastTr.setAttribute('id','lastTr')
  parent.appendChild(lastTr);

  var allChosenTd = document.createElement('td')
  lastTr.appendChild(allChosenTd);

  allChosenTd.setAttribute('id', 'allchosen');
  var allChosenText = document.createElement('span');
  allChosenText.innerHTML = '全选';
  allChosenTd.appendChild(allChosenText);
  var allChosenInput = document.createElement('input');
  allChosenInput.setAttribute('type', 'checkbox');
  allChosenTd.appendChild(allChosenInput);

  var isAllChosenOn = false;

  allChosenInput.addEventListener('click', function(){
    if (isAllChosenOn) {
      isAllChosenOn = false;
    }else{
      isAllChosenOn = true;
    }

    var allInput = document.getElementsByTagName('input');

    if (isAllChosenOn) {
      for (let i = 0; i < carProducts.length; i++){
        carProducts[i].checked = true;
      }
      for (let m = 0; m < allInput.length; m++) {
        allInput[m].setAttribute('checked', 'checked');
      }
    }else{
      for (let i = 0; i < carProducts.length; i++){
        carProducts[i].checked = false;
      }
      for (let m = 0; m < allInput.length; m++) {
        allInput[m].removeAttribute('checked');
      }
    }
  });
}