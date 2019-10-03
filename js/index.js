function deleteItem(event){
  event.target.parentElement.remove();
}



function getPriceByProduct(itemNode){
  let totalUnitsArray = [...document.querySelectorAll('.costUnit')];
  let totalQuantity = [...document.querySelectorAll('.quantity')];
  let listTotals = [...document.querySelectorAll('.total')];
  let totalUnitsValue = 0.0; 

  for (let i = 0; i<totalUnitsArray.length; i++){
    totalUnitsValue = parseFloat(totalUnitsArray[i].innerText * totalQuantity[i].value).toFixed(2);
  
    listTotals[i].innerText = totalUnitsValue; //Sobrescribim la listTotals i li diem que el seu contingut sigui el totalque hem calculat

    console.log(totalUnitsValue);
  }
}



function updatePriceByProduct(productPrice, index){
}

function getTotalPrice() {
  getPriceByProduct();
  let listTotals = [...document.querySelectorAll('.total')];
  let div = document.querySelector('#sumAll')
  let total =0.0;

  for(let i=0; i<listTotals.length; i++){
    total += parseFloat(listTotals[i].innerText)
  }

  let h2 = document.querySelector("h2");

  if (h2 < 1){
  let h2 = document.createElement('h2');
  div.appendChild(h2);
  h2.innerText = `Total Price: $ ${total}`;
  } else {
    h2.innerText = `Total Price: $ ${total}`
  }
}


function createNewItem(){
  let products = document.querySelector('#products');
  let newProduct = document.querySelector('#newProduct').value;
  let price = document.querySelector('#newPrice').value;
  price =parseFloat(price).toFixed(2);
  let div = document.createElement('div');

  div.setAttribute("class", "wrapper");
  div.innerHTML = `
        <span class="productName"> ${newProduct} </span>
        <div class="price">
          Unit Value $:
          <span class="costUnit"> ${price} </span>
        </div>
        <label class="label">
          QTY
          <input class="quantity" type="number" name="cantidad" value="0" />
        </label>
​
        <div class="totaly">
          Total $:
          <span class="total"> 0.00 </span>
        </div>
​
        <button class="btn btn-delete" name="btn-delete">Delete</button>`

products.appendChild(div);
update();
}



function update(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create'); 
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}


window.onload = function(){
 this.update();
};


