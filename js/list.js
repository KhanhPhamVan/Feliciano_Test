// localStorage.removeItem('staffArray');
// localStorage.removeItem('staffList');
var sideMenu=document.querySelector('aside');
var menuBtn=document.querySelector('#menu_bar');
var closeBtn=document.querySelector('#close_btn')
var themeToggeler=document.querySelector('.theme-toggler');

menuBtn.addEventListener('click',()=>{
    sideMenu.style.display='block';
})
closeBtn.addEventListener('click',()=>{
    sideMenu.style.display='none';
})

themeToggeler.addEventListener('click',()=>{
   document.body.classList.toggle('dark-theme-variables');
    themeToggeler.querySelector('span:nth-child(1)').classList.toggle('active');
themeToggeler.querySelector('span:nth-child(2)').classList.toggle('active');
if(document.body.classList.contains('dark-theme-variables'))
        localStorage.setItem('darkMode', 'true');
    else localStorage.setItem('darkMode', 'false');
    document.body.style.transition='0.3s';
})
//Add
var add = document.querySelector('.add_new');
var addmodal = document.querySelector('.add_modal');
var done=document.querySelector('.add_done');
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
function add_staff(input_name,input_id,input_pos,input_address,input_phone,input_email,newImg)
{
    
    var insert_staff=` <tr>
    <td>${input_id}</td>
    <td><img
            src="${newImg}">
    </td>
    <td>${input_pos}</td>
    <td>${input_name}</td>
    <td>${input_address}</td>
    <td>${input_phone}</td>
    <td>${input_email}</td>
    <td>
        <button class="edit_staff"> 
            <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <div class="modal hidden">
            <div class="modal_inner">
                <div class="modal_header">
                    <p>Chỉnh sửa nhân viên</p>
                    <i class="fa-solid fa-xmark close_modal"></i>
                </div>
                <div class="modal_body">
                    <img
                        src="${newImg}">
                    <div class="info">
                        <h2 contenteditable=""><span class="material-symbols-outlined">
                                terminal
                            </span>Mã nhân viên:${input_id}</h2>
                        <h2 contenteditable=""><span class="material-symbols-outlined">
                                bookmark_manager
                            </span>Chức vụ:${input_pos}</h2>
                        <h2 contenteditable=""><span class="material-symbols-outlined">
                                person
                            </span>Tên:${input_name}</h2>
                        <h2 contenteditable=""><span class="material-symbols-outlined">
                            home
                            </span>Địa chỉ:${input_pos}</h2>
                        <h2 contenteditable=""><span class="material-symbols-outlined">
                            phone_in_talk
                            </span>Số điện thoại:${input_phone}</h2>
                        <h2 contenteditable=""><span class="material-symbols-outlined">
                                mail
                            </span>Email:${input_email}</h2>
                    </div>
                </div>
                <div class="modal_footer">
                    <button class="close">Hoàn thành</button>
                </div>
            </div>
        </div>
        <button class="delete_staff">
            <i class="fa-solid fa-trash"></i>
        </button>
    </td>
</tr>`
    var savedList = localStorage.getItem('staffArray');
    if(savedList) {
        document.querySelector('.table').innerHTML = savedList;}
    var group = document.querySelector('#list_staff');
    group.insertAdjacentHTML('beforeend', insert_staff);
    var edit = document.querySelectorAll('.edit_staff');
    var allmodal = document.querySelectorAll('.close_modal');
    var modal = document.querySelectorAll('.modal');
    var modal_footer = document.querySelectorAll('.modal_footer .close');
    edit.forEach((item, index) => {
        item.addEventListener('click', () => {
            modal[index].classList.remove('hidden');
        });
    });
    allmodal.forEach((item, index) => {
        item.addEventListener('click', () => {
            modal[index].classList.add('hidden');
        });
    });
    modal_footer.forEach((item, index) => {
        item.addEventListener('click', () => {
            modal[index].classList.add('hidden');
        });
    });
    localStorage.setItem('staffArray',document.querySelector('.table').innerHTML);
    updateDeleteButtons();

}
var staffAddList = [];
done.addEventListener('click',()=>{
    addmodal.classList.toggle('hidden');
    var input_name=document.querySelector('#input_name').value;
    var input_id=document.querySelector('#input_id').value;
    var input_pos=document.querySelector('#input_pos').value;
    var input_address=document.querySelector('#input_address').value;
    var input_phone=document.querySelector('#input_phone').value;
    var input_email=document.querySelector('#input_email').value;
    add_staff(input_name,input_id,input_pos,input_address,input_phone,input_email,newImg.src);
    staffArray = Array.from(document.querySelectorAll('.table_section table tbody tr'));
    updateDeleteButtons();
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
    localStorage.setItem('staffCard', updatedStaffListString);  
    localStorage.setItem('checkCard', true);
});

//Thêm nhân viên
var fileImage=document.querySelector('#file_avt');
var container=document.querySelector('.add_avt');
var newImg;
fileImage.addEventListener('change',function(event){
    var file = event.target.files[0];
     newImg = document.createElement('img');
    newImg.src = fileImage.value;
    var reader = new FileReader();
        reader.onload = function() {
            newImg.src = reader.result;
            newImg.alt = 'Alternative text for image';
            // fileImage.insertAdjacentElement('afterend', newImg);
            fileImage.classList.add('hidden');
            container.appendChild(newImg);
        };
    reader.readAsDataURL(file);
})
//Dropdown
var allDropDown = document.querySelectorAll('.dropdown');
allDropDown.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('show');
    });
});
//Delete
// var deleteAll=document.querySelectorAll('.delete_staff');
// var delete_show=document.querySelector('.delete_modal');
// var delete_btn=document.querySelector('#delete_exit');
// var accept=document.querySelector('.delete_modal_body button');
// deleteAll.forEach((item,index)=>{
// item.addEventListener('click',()=>{
//     delete_show.classList.remove('hidden');
//     accept.addEventListener('click',check);
//     function check(event){
//         var index=Array.from(deleteAll).indexOf(event.target);
//         console.log(index);
//         delete_show.classList.add('hidden');
//         var list_staff=document.querySelectorAll('.table_section table tbody tr');
//         var elementToRemove = list_staff[index];
//         elementToRemove.remove();
//     }
// });
// });
// delete_btn.addEventListener('click',()=>{
//     delete_show.classList.add('hidden');
// });
var deleteAll = document.querySelectorAll('.delete_staff');
var delete_show = document.querySelector('.delete_modal');

var accept = document.querySelector('.delete_modal_body button');
var staffArray = Array.from(document.querySelectorAll('.table_section table tbody tr')); // Chuyển NodeList thành một mảng

let currentAcceptHandler = null; // Biến toàn cục để lưu trữ hàm xử lý hiện tại

function updateDeleteButtons() {
    deleteAll = document.querySelectorAll('.delete_staff');
    deleteAll.forEach((item, index) => {
        // Gỡ bỏ sự kiện cũ trước khi thêm sự kiện mới
        item.removeEventListener('click', deleteHandler);
        item.addEventListener('click', () => deleteHandler(index));
    });
}
var indexAdd=[];
function delete_1(index) {
    delete_show.classList.add('hidden');
    // Xóa phần tử khỏi DOM
    staffArray[index].remove();
    // Cập nhật lại mảng staffArray để loại bỏ phần tử đã xóa
    staffArray = Array.from(document.querySelectorAll('.table_section table tbody tr'));
    // if(!localStorage.getItem('staffArray'))
        localStorage.setItem('staffArray',document.querySelector('.table').innerHTML);
    updateDeleteButtons(); // Cập nhật lại các nút xóa
    console.log('Deleted item at index:', index);
    indexAdd.push(index);
    localStorage.setItem('index1',indexAdd);
    console.log(localStorage.getItem('index1'));
    // Gỡ bỏ sự kiện 'click' hiện tại
    accept.removeEventListener('click', currentAcceptHandler);
    currentAcceptHandler = null; // Đặt lại biến toàn cục
}

function deleteHandler(index) {
    delete_show.classList.remove('hidden');
    // Gỡ bỏ sự kiện 'click' trước đó nếu có
    if (currentAcceptHandler) {
        accept.removeEventListener('click', currentAcceptHandler);
    }
    // Tạo hàm xử lý mới và lưu trữ nó trong biến toàn cục
    currentAcceptHandler = () => delete_1(index);
    accept.addEventListener('click', currentAcceptHandler);   
}

updateDeleteButtons();



var delete_btn = document.querySelector('#delete_exit');
    delete_btn.addEventListener('click', () => {
    delete_show.classList.add('hidden');
});






//Modal
var edit=document.querySelectorAll('.edit_staff');
var allmodal=document.querySelectorAll('.close_modal');
var modal=document.querySelectorAll('.modal');
var modal_footer=document.querySelectorAll('.modal_footer .close');
edit.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        modal[index].classList.toggle('hidden');
    });
});
allmodal.forEach((item,index)=>{
        item.addEventListener('click',()=>{
            modal[index].classList.toggle('hidden');
        });
});
modal_footer.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        modal[index].classList.toggle('hidden');
    });
});

var isDarkModeEnabled = localStorage.getItem('darkMode') === 'true';
if (isDarkModeEnabled) {
  document.body.classList.toggle('dark-theme-variables');
    themeToggeler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggeler.querySelector('span:nth-child(2)').classList.toggle('active');
}
else
    localStorage.setItem('darkMode', 'false');


window.onload = function() {
    if (localStorage.getItem('checkAdd')==='true') {
        var test=[];
        test=JSON.parse(localStorage.getItem('staffList'));
        test.forEach((item,index)=>{
            add_staff(item.name,item.id,item.pos,item.address,item.phone,item.email,item.img);
            staffArray = Array.from(document.querySelectorAll('.table_section table tbody tr'));
            // if(!localStorage.getItem('staffArray'))
            localStorage.setItem('staffArray',document.querySelector('.table').innerHTML);
            updateDeleteButtons();
        })

        localStorage.setItem('checkAdd',false);
    }
    var savedList = localStorage.getItem('staffArray');
    if(savedList) {
        document.querySelector('.table').innerHTML = savedList;
        deleteAll = document.querySelectorAll('.delete_staff');
        delete_show = document.querySelector('.delete_modal');

        accept = document.querySelector('.delete_modal_body button');
        staffArray = Array.from(document.querySelectorAll('.table_section table tbody tr'));
        updateDeleteButtons();
        delete_btn = document.querySelector('#delete_exit');
        delete_btn.addEventListener('click', () => {
            delete_show.classList.add('hidden');
        });

        edit=document.querySelectorAll('.edit_staff');
        allmodal=document.querySelectorAll('.close_modal');
        modal=document.querySelectorAll('.modal');
        modal_footer=document.querySelectorAll('.modal_footer .close');
        edit.forEach((item,index)=>{
            item.addEventListener('click',()=>{
                modal[index].classList.toggle('hidden');
            });
        });
        allmodal.forEach((item,index)=>{
                item.addEventListener('click',()=>{
                    modal[index].classList.toggle('hidden');
                });
        });
        modal_footer.forEach((item,index)=>{
            item.addEventListener('click',()=>{
                modal[index].classList.toggle('hidden');
            });
        });

    add = document.querySelector('.add_new');
    addmodal = document.querySelector('.add_modal');
    done = document.querySelector('.add_done');
    add.addEventListener('click', () => {
        addmodal.classList.remove('hidden');
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
    addClose = document.querySelector('#add_close');
    container=document.querySelector('.add_avt');
    newImg=document.querySelector('.add_avt img');
    fileImage=document.querySelector('#file_avt');
    fileImage.addEventListener('change',function(event){
        var file = event.target.files[0];
         newImg = document.createElement('img');
        newImg.src = fileImage.value;
        var reader = new FileReader();
            reader.onload = function() {
                newImg.src = reader.result;
                newImg.alt = 'Alternative text for image';
                // fileImage.insertAdjacentElement('afterend', newImg);
                fileImage.classList.add('hidden');
                container.appendChild(newImg);
            };
        reader.readAsDataURL(file);
    })
    addClose.addEventListener('click', () => {
        addmodal.classList.toggle('hidden');
    });
    done.addEventListener('click',()=>{
        addmodal.classList.toggle('hidden');
        var input_name = document.querySelector('#input_name').value;
        var input_id = document.querySelector('#input_id').value;
        var input_pos = document.querySelector('#input_pos').value;
        var input_address = document.querySelector('#input_address').value;
        var input_phone = document.querySelector('#input_phone').value;
        var input_email = document.querySelector('#input_email').value;

        add_staff(input_name,input_id,input_pos,input_address,input_phone,input_email,newImg.src);

        updateDeleteButtons();
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
    localStorage.setItem('staffCard', updatedStaffListString);  
    localStorage.setItem('checkCard', true);
    });
    }
    var searchBar = document.querySelector('#searchStaff');
    var position = document.querySelectorAll('#list_staff tr td:nth-child(3)');
    var listPos = [];
    position.forEach((item, index) => {
        var pos = {
            pos: item.innerHTML,
            index: index
        };
        listPos.push(pos);
    })
    var listAllStaff = document.querySelectorAll('#list_staff tr');

    var tableContent = document.querySelector('#list_staff');
    localStorage.setItem('tableContent', tableContent.innerHTML);
    var test = '';
    searchBar.addEventListener('input', () => {
        listPos.forEach((item, index) => {
            if (item.pos.includes(searchBar.value))
                test += '<tr>' + listAllStaff[index].innerHTML + '</tr>';
        })
        tableContent.innerHTML = test;
        test = '';
        if (searchBar.value == '')
            tableContent.innerHTML = localStorage.getItem('tableContent');
    })
  };

//Search Staff
var searchBar=document.querySelector('#searchStaff');
var position=document.querySelectorAll('#list_staff tr td:nth-child(3)');
var listPos=[];
position.forEach((item,index)=>{
    var pos={
        pos:item.innerHTML,
        index:index
    };
    listPos.push(pos);
})
var listAllStaff=document.querySelectorAll('#list_staff tr');

var tableContent=document.querySelector('#list_staff');
localStorage.setItem('tableContent',tableContent.innerHTML);
var test='';
searchBar.addEventListener('input',()=>{
    listPos.forEach((item,index)=>{
        if(item.pos.includes(searchBar.value))
            test+='<tr>'+listAllStaff[index].innerHTML+'</tr>'; 
    })
    tableContent.innerHTML=test;
    test='';
    if(searchBar.value=='')
        tableContent.innerHTML=localStorage.getItem('tableContent');
})
