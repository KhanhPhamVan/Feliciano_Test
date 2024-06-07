    // localStorage.removeItem('gr_staff');
    // localStorage.setItem('checkAdd',false);
    // localStorage.removeItem('checkCard');
var sideMenu = document.querySelector("aside");
var menuBtn = document.querySelector("#menu_bar");
var closeBtn = document.querySelector("#close_btn")
var themeToggeler = document.querySelector(".theme-toggler");

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = "block";
})
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = "none";
})

themeToggeler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggeler.querySelector("span:nth-child(1)").classList.toggle("active");
    themeToggeler.querySelector("span:nth-child(2)").classList.toggle("active");
    if (document.body.classList.contains('dark-theme-variables'))
        localStorage.setItem('darkMode', 'true');
    else localStorage.setItem('darkMode', 'false');
    document.body.style.transition = '0.3s';
})
//Modal
var btnOpen = document.querySelectorAll(".detail");
var modal = document.querySelectorAll(".modal");
var btnClose = document.querySelectorAll(".close");
function toggleModal() {
    modal.classList.toggle('hidden');
}
btnOpen.forEach((item, index) => {
    item.addEventListener('click', function (e) {
        modal[index].classList.toggle('hidden');
    })
});
btnClose.forEach((item, index) => {
    item.addEventListener('click', function (e) {
        modal[index].classList.toggle('hidden');
    })
})
//Add
var add = document.querySelector('.add_staff');
var addmodal = document.querySelector('.add_modal');
var done = document.querySelector('.add_modal_footer');
add.addEventListener('click', () => {
    addmodal.classList.toggle('hidden');
    document.querySelector('#input_name').value = '';
    document.querySelector('#input_id').value = '';
    document.querySelector('#input_pos').value = '';
    document.querySelector('#input_address').value = '';
    document.querySelector('#input_phone').value = '';
    document.querySelector('#input_email').value = '';
    document.querySelector('#file_avt').classList.remove('hidden');
    document.querySelector('#file_avt').value = '';
    container=document.querySelector('.add_avt');
    newImg=document.querySelector('.add_avt img');
    if(newImg)
        container.removeChild(newImg);
});
var addClose = document.querySelector('#add_close');
addClose.addEventListener('click', () => {
    addmodal.classList.toggle('hidden');

});
var staffAddList = [];
function add_staff(input_name,input_id,input_pos,input_address,input_phone,input_email,newImg){
    var insert_staff = `<div class="staff">
    <div class="card">
        <div class="card_img">
            <img src="${newImg}">
        </div>
        <h2 class="name_title">${input_name}</h2>
        <h2 class="position">
        <span class="material-symbols-outlined">person</span>${input_pos}</h2>
        <div class="card_social">
            <a href=""><span class="material-symbols-outlined">
                    phone_in_talk
                </span></a>
            <a href=""><span class="material-symbols-outlined">
                    mail
                </span></a>
            <a href="#"><span class="material-symbols-outlined">
                    home
                </span></a>
        </div>
        <button class="detail">Chi tiết</button>
        <div class="modal hidden">
            <div class="modal_inner">
                <div class="modal_header">
                    <p>Thông tin chi tiết</p>
                </div>
                <div class="modal_body">
                    <img
                        src="${newImg}">
                    <div class="info">
                        <h2><span class="material-symbols-outlined">
                                terminal
                            </span>Mã nhân viên:${input_id}</h2>
                        <h2><span class="material-symbols-outlined">
                                bookmark_manager
                            </span>Chức vụ:${input_pos}</h2>
                        <h2><span class="material-symbols-outlined">
                                person
                            </span>Tên:${input_name}</h2>
                        <h2><span class="material-symbols-outlined">
                                home
                            </span>Địa chỉ:${input_address}</h2>
                        <h2><span class="material-symbols-outlined">
                                phone_in_talk
                            </span>Số điện thoại:${input_phone}</h2>
                        <h2><span class="material-symbols-outlined">
                                mail
                            </span>Email:${input_email}</h2>
                    </div>
                </div>
                <div class="modal_footer">
                    <button class="close">Close</button>
                </div>
            </div>
        </div>
    </div>
</div>`
var savedList = localStorage.getItem('gr_staff');
if (savedList) {
    document.querySelector('.group_staff').innerHTML = savedList;}
    var group = document.querySelector('.group_staff .staff:last-child');
    group.insertAdjacentHTML('beforebegin', insert_staff);
    btnOpen = document.querySelectorAll(".detail");
    modal = document.querySelectorAll(".modal");
    btnOpen.forEach((item, index) => {
        item.addEventListener('click', function (e) {
            modal[index].classList.remove('hidden');
        })
    });
    btnClose = document.querySelectorAll(".close");
    console.log(btnClose);
    btnClose.forEach((item, index) => {
        item.addEventListener('click', function (e) {
            modal[index].classList.add('hidden');
        })
    })
    var gr_staff = document.querySelector('.group_staff');
    localStorage.setItem('gr_staff', gr_staff.innerHTML);

}
done.addEventListener('click', () => {
    addmodal.classList.toggle('hidden');

    var input_name = document.querySelector('#input_name').value;
    var input_id = document.querySelector('#input_id').value;
    var input_pos = document.querySelector('#input_pos').value;
    var input_address = document.querySelector('#input_address').value;
    var input_phone = document.querySelector('#input_phone').value;
    var input_email = document.querySelector('#input_email').value;
    add_staff(input_name,input_id,input_pos,input_address,input_phone,input_email,newImg.src);

    var newStaff = {
        img: newImg.src,
        id: input_id,
        pos: input_pos,
        name: input_name,
        address: input_address,
        phone: input_phone,
        email: input_email
    };
    staffAddList.push(newStaff);
    var updatedStaffListString = JSON.stringify(staffAddList);

    // Lưu trữ chuỗi mới vào local storage
    localStorage.setItem('staffList', updatedStaffListString);
    var test = [];
    test = JSON.parse(localStorage.getItem('staffList'));
    console.log(test)
    //Reset lại chỗ thêm nhân viên
    localStorage.setItem('checkAdd', true);
});

window.onload = function () {
    if (localStorage.getItem('checkCard')==='true') {
                var test=[];
                test=JSON.parse(localStorage.getItem('staffCard'));
                test.forEach((item,index)=>{
                    add_staff(item.name,item.id,item.pos,item.address,item.phone,item.email,item.img);
                })
        
                localStorage.setItem('checkCard',false);
                var gr_staff = document.querySelector('.group_staff');
                localStorage.setItem('gr_staff', gr_staff.innerHTML);
            }
    var savedList = localStorage.getItem('gr_staff');
    if (savedList) {
        document.querySelector('.group_staff').innerHTML = savedList;
        var btnOpen = document.querySelectorAll(".detail");
        var modal = document.querySelectorAll(".modal");
        var btnClose = document.querySelectorAll(".close");
        function toggleModal() {
            modal.classList.toggle('hidden');
        }
        btnOpen.forEach((item, index) => {
            item.addEventListener('click', function (e) {
                modal[index].classList.toggle('hidden');
            })
        });
        btnClose.forEach((item, index) => {
            item.addEventListener('click', function (e) {
                modal[index].classList.toggle('hidden');
            })
        })
        //Add
        var add = document.querySelector('.add_staff');
        var addmodal = document.querySelector('.add_modal');
        var done = document.querySelector('.add_modal_footer');
        add.addEventListener('click', () => {
            addmodal.classList.toggle('hidden');
            document.querySelector('#input_name').value = '';
            document.querySelector('#input_id').value = '';
            document.querySelector('#input_pos').value = '';
            document.querySelector('#input_address').value = '';
            document.querySelector('#input_phone').value = '';
            document.querySelector('#input_email').value = '';
            document.querySelector('#file_avt').classList.remove('hidden');
            document.querySelector('#file_avt').value = '';
            container = document.querySelector('.add_avt');
            newImg = document.querySelector('.add_avt img');
            if(newImg)
                container.removeChild(newImg);
        });
        var addClose = document.querySelector('#add_close');
        addClose.addEventListener('click', () => {
            addmodal.classList.toggle('hidden');

        });
        var staffAddList = [];
        done.addEventListener('click', () => {
            addmodal.classList.toggle('hidden');

            var input_name = document.querySelector('#input_name').value;
            var input_id = document.querySelector('#input_id').value;
            var input_pos = document.querySelector('#input_pos').value;
            var input_address = document.querySelector('#input_address').value;
            var input_phone = document.querySelector('#input_phone').value;
            var input_email = document.querySelector('#input_email').value;
        add_staff(input_name,input_id,input_pos,input_address,input_phone,input_email,newImg.src);

        var newStaff = {
            img: newImg.src,
            id: input_id,
            pos: input_pos,
            name: input_name,
            address: input_address,
            phone: input_phone,
            email: input_email
        };
        staffAddList.push(newStaff);
        var updatedStaffListString = JSON.stringify(staffAddList);
    
        // Lưu trữ chuỗi mới vào local storage
        localStorage.setItem('staffList', updatedStaffListString);
        var test = [];
        test = JSON.parse(localStorage.getItem('staffList'));
        console.log(test)
        //Reset lại chỗ thêm nhân viên
        localStorage.setItem('checkAdd', true);

        });

        var fileImage = document.querySelector('#file_avt');
        var container = document.querySelector('.add_avt');
        var newImg;
        fileImage.addEventListener('change', function (event) {
            var file = event.target.files[0];
            newImg = document.createElement('img');
            newImg.src = fileImage.value;
            var reader = new FileReader();
            reader.onload = function () {
                newImg.src = reader.result;
                newImg.alt = 'Alternative text for image';
                // fileImage.insertAdjacentElement('afterend', newImg);
                fileImage.classList.add('hidden');
                container.appendChild(newImg);
            };
            reader.readAsDataURL(file);
        })
    }
    if(localStorage.getItem('index1')){
        var indexAdd = localStorage.getItem('index1'); // Lấy chuỗi từ localStorage
        indexAdd = indexAdd.split(','); // Chuyển đổi chuỗi thành mảng, sử dụng dấu phẩy làm điểm phân cách

        var staff = Array.from(document.querySelectorAll('.group_staff .staff'));
        indexAdd.forEach((item, i) => {
            staff[parseInt(item)].remove();
            staff = Array.from(document.querySelectorAll('.group_staff .staff'));
        });

        localStorage.removeItem('index1');
        console.log(indexAdd)
        var gr_staff = document.querySelector('.group_staff');
        localStorage.setItem('gr_staff', gr_staff.innerHTML);
    }
};

//Dropdown
var allDropDown = document.querySelectorAll('.dropdown');
allDropDown.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('show');
    })
})

var isDarkModeEnabled = localStorage.getItem('darkMode') === 'true';
if (isDarkModeEnabled) {
    document.body.classList.toggle('dark-theme-variables');
    themeToggeler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggeler.querySelector('span:nth-child(2)').classList.toggle('active');
}
else
    localStorage.setItem('darkMode', 'false');
//

var fileImage = document.querySelector('#file_avt');
var container = document.querySelector('.add_avt');
var newImg;
fileImage.addEventListener('change', function (event) {
    var file = event.target.files[0];
    newImg = document.createElement('img');
    newImg.src = fileImage.value;
    var reader = new FileReader();
    reader.onload = function () {
        newImg.src = reader.result;
        newImg.alt = 'Alternative text for image';
        // fileImage.insertAdjacentElement('afterend', newImg);
        fileImage.classList.add('hidden');
        container.appendChild(newImg);
    };
    reader.readAsDataURL(file);
})
//Thêm thẻ nhân viên
//Lưu thông tin thêm vào




