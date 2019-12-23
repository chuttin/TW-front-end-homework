window.onload = function () {
  var par = document.getElementById('table');

  for (let i = 0; i < carProducts.length; i++) {
    var tr = document.createElement('tr')
    par.appendChild(tr);
    addCommodities(carProducts[i],tr);
  }

  allChosen(par);
  
  var allTotalPrice = document.createElement('td');
  allTotalPrice.setAttribute('colspan', 4);
  par.lastChild.appendChild(allTotalPrice);

  var itemCount = countCal()();
  var finalPrice = priceCal()();
  allTotalPrice.innerHTML = '共计' + itemCount +'件商品，' + finalPrice +'\u00A5';

  par.addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() === 'input' || event.target.tagName.toLowerCase() === 'button') {
      itemCount = countCal()();
      finalPrice = priceCal()();
      allTotalPrice.innerHTML = '共计' + itemCount +'件商品，' + finalPrice +'\u00A5';
    }
  });
}

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

function isChecked (btn, isChecked) {
  if (isChecked){
    btn.setAttribute('checked', 'checked');
  }
}

var j = 1;
function addCommodities(item, trContent) {
  var input = document.createElement('input');
  input.setAttribute('type', 'checkbox');

  isChecked(input, item.checked);

  input.addEventListener('click', function () {
    if (item.checked === true){
      item.checked = false;
    }else{
      item.checked = true;
    }
    isChecked(input, item.checked);
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
        var addBtn = document.createElement('button');
        var countNum = document.createElement('span');

        td.appendChild(minusBtn);
        minusBtn.innerHTML = '-';
        td.appendChild(countNum);
        countNum.innerHTML = item.count;
        td.appendChild(addBtn);
        addBtn.innerHTML = '+';
      }
    }

    var maxNum = item.count;
    minusBtn.addEventListener('click', function(){
      item.count = item.count - 1;
      if (item.count <= 0){
        trContent.remove();
      }else {
        countNum.innerHTML = item.count;
        totalPrice.innerHTML = item.count * item.price;
      }
    });

    addBtn.addEventListener('click', function(){
      if (item.count < maxNum) {
        item.count = item.count + 1;
        countNum.innerHTML = item.count;
        totalPrice.innerHTML = item.count * item.price;
      }
    });

    var totalPrice = document.createElement('td');
    trContent.appendChild(totalPrice);
    totalPrice.innerHTML = item.count * item.price;
  }
  j++;
}

function allChosen(parent){
  lastTr = document.createElement('tr');
  parent.appendChild(lastTr);

  var allChosenTd = document.createElement('td')
  lastTr.appendChild(allChosenTd);

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