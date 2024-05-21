const shoppingIcon = document.querySelectorAll(".shopping__cart__icon ");
const shoppingCart = document.querySelector(".shopping__cart");
const shoppingClose = document.querySelector(".shopping__close");
var shoppingContainer = document.querySelector(".shopping__container");

const listDishItem = document.querySelectorAll(".dish__item");

const btnAddCart = document.querySelectorAll(".add__card");

RenderListDish ();
var indexCart=document.querySelectorAll('.shopping__list li').length;
var indexArr=[];

let listCard = document.querySelector(".listCard");
let total = document.querySelector(" .checkOut .total");
let shoppingListItem;
// Set lại giá trị value cho các thẻ input
const cartArr=document.querySelectorAll('.shopping__item__input');
cartArr.forEach((mem,index)=>{
  indexArr[index]=mem.value;
})
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


  // Thêm thông tin vào mảng listDish
  listDish.push({
    id: index ,
    image: image,
    name: name,
    price: price,
  });
});

shoppingIcon.forEach((item,index)=>{
  item.addEventListener("click", () => {
    shoppingContainer.style.display = "block";
    setTimeout(() => {
      shoppingCart.classList.add("active");
    }, 100);
    console.log(1);
  });
})


// const cartTest=document.querySelector('#cartTest');
// cartTest.addEventListener("click", () => {
//   shoppingContainer.style.display = "block";
//   setTimeout(() => {
//     shoppingCart.classList.add("active");
//   }, 100);
//   console.log(1);
// });


shoppingClose.addEventListener("click", () => {
  shoppingCart.classList.remove("active");
  setTimeout(() => {
    shoppingContainer.style.display = "none";
  }, 200);
});

btnAddCart.forEach( (cartItem , index) => {
  cartItem.addEventListener('click', () => {
    const cartImg = listDish[index].image;
    const carttName = listDish[index].name;
    const cartPrice = listDish[index].price;
    AddCart(cartImg , carttName ,cartPrice )
    
  } ) ;

});

function AddCart (cartImg , carttName ,cartPrice ) { 
     var li = document.createElement('li');

     var shoppingListItem = document.querySelectorAll('.shopping__list li');
     for (var i = 0; i < shoppingListItem.length; i++) {
         var shoppingName  = document.querySelectorAll('.shopping__item__name h3'); 
         if(shoppingName[i].innerText == carttName) {
             alert('Sản phẩm của bạn đã có trong của hàng');
             return; 
         }
     }

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
                <input class="shopping__item__input" type="number" value="1"  min="1" style="width: 40px; height: 28px;border: none; background-color: transparent; color: #fff;">
                <span class="shopping__item__price" style="color: #fff;"> ${cartPrice} </span>
            </div>
        </div>
        <button class="delete" >Xóa</button>
     </div>
    `
  var shoppingList = document.querySelector('.shopping__list');
  shoppingList.appendChild(li);

  // var input = document.querySelectorAll('.shopping__item__input');
  // input.forEach((inputItem , index) => {
  //   inputItem.value = '1';
  // });
  // shoppingListItem = document.querySelectorAll('.shopping__list li');
  // shoppingListItem.forEach((mem,index)=>{
    //Thêm vào thù tiến hành thêm vào mảng tạm
    indexArr[indexCart++]='1';
    localStorage.setItem('count',indexArr);
  // })

  SaveListDish ();
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
  SaveTotalDish ();
}


// function deleteCart(){
//   var deleteBtn = document.querySelectorAll('.delete');

//   deleteBtn.forEach((btnItem , index) => {
//     var shoppingListItem = document.querySelectorAll('.shopping__list li');
//     btnItem.addEventListener('click', function(event) {
//       indexCart--;
//       if(indexCart<0)
//         indexCart=0;
//       indexArr.splice(index, 1); 
//       localStorage.setItem('count',indexArr);
//       shoppingListItem[index].remove();
//       cartTotal ();
//       changeQuantity ();
//       SaveListDish ();   
//       console.log(1) 
//       console.log(shoppingListItem)
//       event.preventDefault();
//       event.stopPropagation();
//     })

//   })
// }
function deleteCart(){
  var deleteBtn = document.querySelectorAll('.delete');

  deleteBtn.forEach((btnItem , index) => {
    btnItem.removeEventListener('click', deleteCartItem); // Xóa sự kiện xóa cũ trước khi gán lại

    var shoppingListItem = document.querySelectorAll('.shopping__list li');
    btnItem.addEventListener('click', deleteCartItem); // Gán sự kiện xóa mới
  });
}

function deleteCartItem(event) {
  var shoppingListItem = document.querySelectorAll('.shopping__list li');
  var index = Array.from(shoppingListItem).indexOf(event.currentTarget.parentElement.parentElement);
  shoppingListItem[index].remove();
  cartTotal ();
  changeQuantity ();
  SaveListDish ();   
  indexCart--;
  if(indexCart<0)
    indexCart=0;
  indexArr.splice(index, 1); 
  localStorage.setItem('count',indexArr);
}



function inputChange () {
  var input = document.querySelectorAll('.shopping__item__input');
  input.forEach((inputItem , index) => {
    inputItem.addEventListener('change', (event) => {
      event.stopPropagation();
      valueChange = inputItem.value;
      input[index] = valueChange;// Gán lại giá trị value cho các thẻ input khi có thay đổi
      indexArr[index]=valueChange;
      localStorage.setItem('count',indexArr);
      SaveListDish ();
      cartTotal ();
    });
  });
}

function changeQuantity () {
  var quantity = document.querySelectorAll('.shopping__cart__icon span');
  var shoppingListItem = document.querySelectorAll('.shopping__list li');
  quantity.forEach((item,index)=>{
    item.innerText = shoppingListItem.length ;
  })
  
}

function soundEffect () {
  var audio = new Audio('./img/thanhCong.mp3');
  audio.play();
  var menuShopping = document.querySelectorAll('.shopping__cart__icon');
  menuShopping.forEach((item,index)=>{
    item.classList.add('effectShopping');
    setTimeout(function() {
      item.classList.remove('effectShopping');
    }, 1000);
  })
  console.log(1);
}


// lưu vào list dish vào trong localstorage 

function SaveListDish () {
  let listDishs = document.querySelector('.shopping__list');
  localStorage.setItem('shopping__list',listDishs.innerHTML);
}


function SaveTotalDish () {
  var value = document.querySelector('.shopping__cart__total');
  localStorage.setItem('total',value.innerHTML);

}


function RenderListDish () {
  let list = localStorage.getItem('shopping__list');
  let listDishs = document.querySelector('.shopping__list');
  listDishs.innerHTML = list;
  changeQuantity ();
  cartTotal();
  deleteCart();
  inputChange ();
  //Load lại thì tiến hành lấy từ local để cập nhật
  var index=document.querySelectorAll('.shopping__item__input');
  var count1 = [];
  if(localStorage.getItem('count'))
    count1 = localStorage.getItem('count').split(',');
  index.forEach((mem, i) => {
    mem.value = parseInt(count1[i]);
    index[i].value=mem.value;
  })
  cartTotal();
  var value2 = localStorage.getItem('total');
  var totalTemp = document.querySelector('.shopping__cart__total');
  totalTemp.innerHTML = value2;
}


// cartArr.forEach((mem,index)=>{
//   mem.addEventListener('change',()=>{
//     cartArr[index].value=mem.value;
//     indexArr[index]=mem.value;
//     console.log(indexArr);
//     localStorage.setItem('count',indexArr);
//   })
// })
// var count=1;
// window.addEventListener('af', function(event) {
//   var shoppingListItem1 = document.querySelectorAll('.shopping__list li');
//     localStorage.setItem('count12',shoppingListItem1.length);
//     this.localStorage.setItem('checkLoad','true');
//     count=5;
//   })
