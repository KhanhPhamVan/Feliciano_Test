const listDishItem2= document.querySelectorAll(".dish__item");
//console.log(listDishItem);

const btnOrders = document.querySelectorAll('.order');
const listDishModal = [];

// Lặp qua mỗi phần tử và trích xuất thông tin
listDishItem2.forEach((dishItem, index) => {
  const URLimage = dishItem.querySelector(".dish__img")
        .style.backgroundImage.replace('url("', "")
   .replace('")', "");
  // Lấy tên món ăn
  var image = URLimage;
  const name = dishItem.querySelector(".dish__name").textContent.trim();

  const desc = dishItem.querySelector(".dish__prameter").textContent.trim()
  // Lấy giá
  const price = dishItem.querySelector(".dish__price").textContent.trim();
//console.log(lisDishPrice);sh__price").textContent.trim();

  // Thêm thông tin vào mảng listDish
  listDishModal.push({
    id: index ,
    image: image,
    name: name,
    desc: desc,
    price: price,
  });
});

var checkModal=false;
setInterval(function(){
    if(document.querySelector('.modal').classList.contains('active'))
        {
            checkModal=true;
        }
    else checkModal=false;
    localStorage.setItem('checkModal',checkModal);
},1000)
btnOrders.forEach( (btnItem , index ) => {
    btnItem.addEventListener( 'click', () => {
        var modalImg = listDishModal[index].image;
        var modalName = listDishModal[index].name;
        var modalDesc = listDishModal[index].desc;
        var modalPrice = listDishModal[index].price;
        addModal(modalImg,modalName ,modalDesc,modalPrice);

        var selectImg = document.querySelectorAll('.select__img');
        selectImg.forEach ( item  => {
            item.addEventListener( 'click', () => {
                document.querySelector('.select__img.active').classList.remove('active');
                item.classList.add('active');
                URLimageItem = item.querySelector(".select__img").style.backgroundImage.replace('url("', "")
                .replace('")', "");
                console.log(URLimageItem);
                modalImg = URLimageItem;
            })
        })
        var temp_cart=` 
        <div style="margin-bottom:16px; display: flex; justify-content: space-between;">
           <img class="shopping__item__img" src="${modalImg}" alt="" style="width: 80px; height: 60px; border-radius:6px">
           <div class="shopping__item__content" style="width: 250px; padding: 0 12px;">
               <span class="shopping__item__name" style="display: block;">
                   <h3  style="font-size: 15px; margin: 0; color: #fff;">${modalName}</h3>
               </span>
               <div class="" style="display: flex; justify-content: space-between;">
                   <input class="shopping__item__input" type="number" value="1"  min="1" style="width: 40px; height: 28px;border: none; background-color: transparent; color: #fff;">
                   <span class="shopping__item__price" style="color: #fff;"> ${modalPrice} </span>
               </div>
           </div>
           <button class="delete" >Xóa</button>
        </div>
       `
       localStorage.setItem('temp_cart',temp_cart);  
       console.log(temp_cart);
       checkModal=true;
       localStorage.setItem('checkModal',checkModal);     
    } );
})

function addModal( modalImg,modalName ,modalDesc,modalPrice) {
    // trước khi tạo modal mới thì xóa modal cũ đi
    var existingModals = document.querySelectorAll('.modal__container');
    existingModals.forEach(function(modal) {
        modal.remove();
    });

    var div = document.createElement('div');
    div.innerHTML = `
            <div class="row" style="height: 80%;" >
            <div class=" col-md-8 col-12 modal__container g-0">
                <div class="row g-0" style="height: 100%;">
                    <div class="col-md-7" >
                        <div class="modal__img"
                            style="background-image: url('${modalImg}'); width: 100%; height: 100%; background-size: cover; background-position: center;; padding: 50px 0;">
                        </div>
                        
                    </div>
                    <div class="col-md-5 modal__content " >
                        <div class="row">
                            <div class="col-12">
                                <div class="name">
                                    <h3 class="modal__dish__name">${modalName}</h3>
                                </div>
                            </div>


                            <div class="content__body col-12" style="margin-top: 30px;">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="modal__desc" style="margin-bottom: 10px; font-weight: 600;">
                                            <span> Mô tả : </span> <span class="modal__dish__prameter text"
                                                style="font-weight: 500;">${modalDesc}</span>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="price " style="margin-bottom: 10px;">
                                            <div class=""
                                                style=" display: inline-block; width: 98px; font-weight: 600; ">
                                                <span> Giá </span> <span style="float: right;"> : </span>
                                            </div>
                                            <span class="modal__dish__price" >${modalPrice} </span>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="quantity" style="margin-bottom: 10px;">
                                            <div class=""
                                                style=" display: inline-block; width: 98px; font-weight: 600;">
                                                <span> Số lượng </span> <span style="float: right;"> : </span>
                                            </div>
                                            <input class="quantity__input" type="number" placeholder="Nhập vào số lượng"
                                                value="1" min="0">
                                            <span class="feedback"> Vui lòng nhập số lượng lớn hơn 1 </span>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="total" style="margin-bottom: 10px;">
                                            <div class=""
                                                style=" display: inline-block; width: 98px; font-weight: 600;">
                                                <span> Tổng </span> <span style="float: right;"> : </span>
                                            </div>
                                            <span class="total__price"> </span>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="note" style="margin-bottom: 20px;">
                                            <div class=""
                                                style=" display: inline-block; width: 98px; font-weight: 600;">
                                                <span>Ghi chú </span>
                                            </div>
                                            <textarea rows="2" class="message" placeholder="Your message "
                                                aria-required="true" style="width: 100%;"> </textarea>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                    <a href="./xacNhan.html" target="_blank" >
                                    
                                            <button class="modal__order" style="width: 100%; padding: 10px 0;">
                                            Order 
                                            
                                            </button>
                                            </a>
                                            
                                    </div>

                                    <div class="col-12">
                                        <div class=""
                                            style="font-family: Great Vibes, cursive ; color: #C8A97E; font-size: 60px;  text-align: center;">
                                            Feliciano</div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div class="icon">
                        <i class="fa-solid fa-xmark" onclick="hideModal()"></i>
                    </div>
                </div>
            </div>
        </div>
    `
    var modal = document.querySelector('.modal');
    modal.appendChild(div);
    modalTotal (modalPrice);
    localStorage.setItem('modalIndex',1);
    var count=document.querySelector('.quantity__input');
    count.addEventListener('change',function(){
        localStorage.setItem('modalIndex',count.value);
        console.log(count.value);
    })
    console.log(count.value);
}

function modalTotal (modalPrice) { 
    var input = document.querySelector('.modal .quantity__input');
    var totalModal = document.querySelector('.total__price');
    var numberPrice = parseInt(modalPrice);
    var inputValue = input.value;
    var total = inputValue  * numberPrice ;
    totalModal.innerHTML = total + '$';
    input.addEventListener('change', () => {
        var input = document.querySelector('.modal .quantity__input');
        var inputValue = input.value;
        total = inputValue  * numberPrice ;
        totalModal.innerHTML = total + '$';
        localStorage.setItem('total_book',totalModal.innerHTML);
    });
    localStorage.setItem('total_book',modalPrice);
}



