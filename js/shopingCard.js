const shoppingIcon = document.querySelector(".shopping__cart__icon ");
const shoppingCart = document.querySelector(".shopping__cart");
const shoppingClose = document.querySelector(".shopping__close");
var shoppingContainer = document.querySelector(".shopping__container");

const listDishItem = document.querySelectorAll(".dish__item");
//console.log(listDishItem);

const btnAddCart = document.querySelectorAll(".add__card");
//console.log(listAddCard);




let listCard = document.querySelector(".listCard");
let total = document.querySelector(" .checkOut .total");
let shoppingListItem;
const listDish = [];

// Lặp qua mỗi phần tử và trích xuất thông tin
listDishItem.forEach((dishItem, index) => {
  const image = dishItem.querySelector(".dish__img")
  .style.backgroundImage.replace('url("', "")
  .replace('")', "");
  // Lấy tên món ăn
  const name = dishItem.querySelector(".dish__name").textContent.trim();

  // Lấy giá
  const price = dishItem.querySelector(".dish__price").textContent.trim();
//console.log(lisDishPrice);sh__price").textContent.trim();

  // Thêm thông tin vào mảng listDish
  listDish.push({
    id: index ,
    image: image,
    name: name,
    price: price,
  });
});

shoppingIcon.addEventListener("click", () => {
  console.log(1)
  shoppingContainer.style.display = "block";
  setTimeout(() => {
    shoppingCart.classList.add("active");
  }, 100);

});

console.log(shoppingClose)
shoppingClose.addEventListener("click", () => {
  shoppingCart.classList.remove("active");
  setTimeout(() => {
    shoppingContainer.style.display = "none";
  }, 200);
});

btnAddCart.forEach( (cartItem , index) => {
  cartItem.addEventListener('click', () => {
    var cartImg = listDish[index].image;
    var carttName = listDish[index].name;
    var cartPrice = listDish[index].price;
    AddCart(cartImg , carttName ,cartPrice )
    
  } ) ;

});

function AddCart (cartImg , carttName ,cartPrice ) { 
     var li = document.createElement('li');

     var shoppingListItem = document.querySelectorAll('.shopping__list li');
     for (var i = 0; i < shoppingListItem.length; i++) {
         var shoppingName  = document.querySelectorAll('.shopping__item__name h3'); 
         if(shoppingName[i].innerText == carttName) {
             alert('sản phẩm cùa bạn đã có trong của hàng');
             return; 
         }
     }

     
    console.log(shoppingList);

     // khi nào add đc vào giỏ hàng thì mới có sound effect
     
     soundEffect();
     li.innerHTML = ` 
     <div style="margin-bottom:16px; display: flex; justify-content: space-between;">
        <img class="shopping__item__img" src="${cartImg}" alt="" style="width: 80px; height: 60px; border-radius:6px">
        <div class="shopping__item__content" style="width: 250px; padding: 0 12px;">
            <span class="shopping__item__name" style="display: block;">
                <h3  style="font-size: 15px; margin: 0; color: #fff;">${carttName}</h3>
            </span>
            <div class="" style="display: flex; justify-content: space-between;">
                <input class="shopping__item__input" type="number" value="1" min="1" style="width: 40px; height: 28px;border: none; background-color: transparent; color: #fff;">
                <span class="shopping__item__price" style="color: #fff;"> ${cartPrice} </span>
            </div>
        </div>
        <button class="delete" >Xóa</button>
     </div>
    `
  var shoppingList = document.querySelector('.shopping__list');
  shoppingList.appendChild(li);
  cartTotal();
  deleteCart();
  inputChange ();
  changeQuantity();
}

function cartTotal () {
  var totalShopping = document.querySelector('.shopping__cart__total');
   var total = 0 ;
   var shoppingListItem = document.querySelectorAll('.shopping__list li');
  for(var i = 0; i < shoppingListItem.length ; i++) {
    var textPrice = shoppingListItem[i].querySelector('.shopping__item__price').textContent.trim();
    var price = parseInt(textPrice);
    var input = shoppingListItem[i].querySelector('.shopping__item__input').value;
    total = total + price * input;
  }
  totalShopping.innerHTML = total + '$';
}


function deleteCart(){
  var deleteBtn = document.querySelectorAll('.delete');
  deleteBtn.forEach((btnItem , index) => {
    var shoppingListItem = document.querySelectorAll('.shopping__list li');
    btnItem.addEventListener('click', () => {
      shoppingListItem[index].remove();
      cartTotal ();
      changeQuantity ()
    })
  })
}


function inputChange () {
  var input = document.querySelectorAll('.shopping__item__input');
  input.forEach((inputItem , index) => {
    inputItem.addEventListener('change', () => {
      cartTotal ();
    });
  });
}

function changeQuantity () {
  var quantity = document.querySelector('.shopping__cart__icon span');
  var shoppingListItem = document.querySelectorAll('.shopping__list li');
  quantity.innerText = shoppingListItem.length ;
}

function soundEffect () {
  var audio = new Audio('./img/thanhCong.mp3');
  audio.play();
  var menuShopping = document.querySelector('.shopping__cart__icon');
  menuShopping.classList.add('effectShopping');
}

