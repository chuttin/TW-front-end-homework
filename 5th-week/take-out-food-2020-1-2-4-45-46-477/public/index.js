let showAllItems = () => {

  let itemsTable = document.getElementById('items-table');
  let items = loadAllItems();
  for (let i in items) {
    itemsTable.innerHTML += `
      <tr>
        <td>菜品：${items[i].name}</td>
        <td>单价：${items[i].price}元</td>
        <td>数量：<input type="text" placeholder="0" id="${items[i].id}"/></td>
      </tr>
      `
  }
  let idToItems = arr => {
    let items = loadAllItems();
    let idToItems = [];
    for (let i in arr) {
      for (let j in items) {
        if (arr[i] === items[j].id) {
          let item = {};
          item.name = items[j].name;
          item.price = items[j].price;
          idToItems.push(item);
        }
      }
    }
    return idToItems;
  }

  let showPromotions = () => {
    let promotionsType = document.getElementById('promotions-type');
    let promotions = loadPromotions();
  
    for (let i in promotions) {
      if (promotions[i].items) {
        let itemList = idToItems(promotions[i].items);
        let nameList = [];
        for (let j in itemList) {
          nameList.push(itemList[j].name);
        }
          promotionsType.innerHTML += `
            <li>
            ${promotions[i].type}（${nameList}）
            </li>
            `
      }else {
        promotionsType.innerHTML += `
        <li>
          ${promotions[i].type}
        </li>
        `
      }
    }
  }

  showPromotions();
}

function calculatePrice() {
  let calMessage = document.getElementById('message');
  let countInput = document.getElementsByTagName('input');
  let itemArr = [];

  for (let i = 0; i < countInput.length; i++) {
    if (countInput.item(i).value) {
      if (Number(countInput.item(i).value) || countInput.item(i).value === '0') {
        let itemSelected = '';
        itemSelected = `${countInput.item(i).id} x ${countInput.item(i).value}` ,
        itemArr.push(itemSelected);
      }else {
        countInput.item(i).value = '';
        alert('请输入数值');
      }
    }
  }

  calMessage.innerHTML = bestCharge(itemArr);
  console.log(calMessage.innerHTML);
}

function clearHistory() {
  let countInput = document.getElementsByTagName('input');
  for (let i = 0; i < countInput.length; i++) {
    countInput.item(i).value = '';
  }
  return calculatePrice();
}

showAllItems();
calculatePrice();