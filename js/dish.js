// localStorage.removeItem('dishArray');
var sideMenu = document.querySelector('aside');
var menuBtn = document.querySelector('#menu_bar');
var closeBtn = document.querySelector('#close_btn')
var themeToggeler = document.querySelector('.theme-toggler');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

themeToggeler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggeler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggeler.querySelector('span:nth-child(2)').classList.toggle('active');
    if (document.body.classList.contains('dark-theme-variables'))
        localStorage.setItem('darkMode', 'true');
    else localStorage.setItem('darkMode', 'false');
    document.body.style.transition = '0.3s';
})
//Add
var add = document.querySelector('.add_new');
var addmodal = document.querySelector('.add_modal');
var done = document.querySelector('.add_done');
add.addEventListener('click', () => {
    addmodal.classList.toggle('hidden');
    document.querySelector('#input_name').value = '';
    document.querySelector('#input_id').value = '';
    document.querySelector('#input_cost').value = '';
    document.querySelector('#input_ingre').value = '';
    document.querySelector('#file_avt').classList.remove('hidden');
    document.querySelector('#file_avt').value = '';
    container = document.querySelector('.add_avt');
    newImg = document.querySelector('.add_avt img');
    if (newImg)
        container.removeChild(newImg);
});
var addClose = document.querySelector('#add_close');
addClose.addEventListener('click', () => {
    addmodal.classList.toggle('hidden');

});
//Add Dish
function add_dish(input_id, newImg, input_name, input_cost, input_ingre) {

    var insert_staff = ` <tr>
                                <td>${input_id}</td>
                                <td><img
                                        src="${newImg}">
                                </td>
                                <td>${input_name}</td>
                                <td>${input_cost}</td>
                                <td>${input_ingre}</td>
                                <td>
                                    <button class="edit_dish"> 
                                        <i class="fa-solid fa-pen-to-square"></i>
                                    </button>
                                    <div class="modal hidden">
                                        <div class="modal_inner">
                                            <div class="modal_header">
                                                <p>Chỉnh sửa món ăn</p>
                                                <i class="fa-solid fa-xmark close_modal"></i>
                                            </div>
                                            <div class="modal_body">
                                                <img
                                                    src="${newImg}">
                                                <div class="info">
                                                    <h2 contenteditable=""><span class="material-symbols-outlined">
                                                            terminal
                                                        </span>Mã món ăn:${input_id}</h2>
                                                    <h2 contenteditable=""><span class="material-symbols-outlined">
                                                            restaurant_menu
                                                        </span>Tên món:${input_name}</h2>
                                                    <h2 contenteditable=""><i class="fa-solid fa-money-check-dollar"></i>Giá:${input_cost}</h2>
                                                    <h2 contenteditable=""><i class="fa-solid fa-pepper-hot"></i>Thành phần:${input_ingre}</h2>
                                                </div>
                                            </div>
                                            <div class="modal_footer">
                                                <button class="close">Hoàn thành</button>
                                            </div>
                                        </div>
                                    </div>
                                    <button class="delete_dish">
                                        <i class="fa-solid fa-trash"></i>
                                    </button>
                                    <div class="delete_modal hidden">
                                        <div class="delete_modal_inner">
                                            <div class="delete_modal_header">
                                                <p>Xóa món ăn</p>
                                                <i class="fa-solid fa-xmark" id="delete_exit"></i>
                                            </div>
                                            <div class="delete_modal_body">
                                                <p>Bạn có chắc muốn xóa món ăn này</p>
                                                <button style="background-color: #C8A97E;">Chấp nhận</button>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            `
    // var savedList = localStorage.getItem('dishArray');
    // if (savedList) {
    //     document.querySelector('.table').innerHTML = savedList;
    // }
    var group = document.querySelector('#list_dish');
    group.insertAdjacentHTML('beforeend', insert_staff);
    var edit = document.querySelectorAll('.edit_dish');
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
    localStorage.setItem('dishArray', document.querySelector('.table').innerHTML);
    updateDeleteButtons();
}

done.addEventListener('click', () => {
    addmodal.classList.toggle('hidden');
    var input_name = document.querySelector('#input_name').value;
    var input_id = document.querySelector('#input_id').value;
    var input_cost = document.querySelector('#input_cost').value;
    var input_ingre = document.querySelector('#input_ingre').value;
    add_dish(input_id, newImg.src, input_name, input_cost, input_ingre);
    dishArray = Array.from(document.querySelectorAll('.table_section table tbody tr'));
    console.log(dishArray)
    updateDeleteButtons();
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
//Dropdown
var allDropDown = document.querySelectorAll('.dropdown');
allDropDown.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('show');
    });
});
//Delete
var deleteAll = document.querySelectorAll('.delete_dish');
var delete_show = document.querySelector('.delete_modal');
var accept = document.querySelector('.delete_modal_body button');
var dishArray = Array.from(document.querySelectorAll('.table_section table tbody tr')); // Chuyển NodeList thành một mảng

let currentAcceptHandler = null; // Biến toàn cục để lưu trữ hàm xử lý hiện tại

function updateDeleteButtons() {
    deleteAll = document.querySelectorAll('.delete_dish');
    deleteAll.forEach((item, index) => {
        // Gỡ bỏ sự kiện cũ trước khi thêm sự kiện mới
        item.removeEventListener('click', deleteHandler);
        item.addEventListener('click', () => deleteHandler(index));
    });
}
function delete_1(index) {
    delete_show.classList.add('hidden');
    // Xóa phần tử khỏi DOM
    dishArray[index].remove();
    // Cập nhật lại mảng dishArray để loại bỏ phần tử đã xóa
    dishArray = Array.from(document.querySelectorAll('.table_section table tbody tr'));
    // if(!localStorage.getItem('dishArray'))
    localStorage.setItem('dishArray', document.querySelector('.table').innerHTML);
    updateDeleteButtons(); // Cập nhật lại các nút xóa
    console.log('Deleted item at index:', index);
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

var edit = document.querySelectorAll('.edit_dish');
var allmodal = document.querySelectorAll('.close_modal');
var modal = document.querySelectorAll('.modal');
var modal_footer = document.querySelectorAll('.modal_footer .close');
edit.forEach((item, index) => {
    item.addEventListener('click', () => {
        modal[index].classList.toggle('hidden');
    });
});
allmodal.forEach((item, index) => {
    item.addEventListener('click', () => {
        modal[index].classList.toggle('hidden');
    });
});
modal_footer.forEach((item, index) => {
    item.addEventListener('click', () => {
        modal[index].classList.toggle('hidden');
    });
});
//

var isDarkModeEnabled = localStorage.getItem('darkMode') === 'true';
console.log(isDarkModeEnabled);
if (isDarkModeEnabled) {
    document.body.classList.toggle('dark-theme-variables');
    themeToggeler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggeler.querySelector('span:nth-child(2)').classList.toggle('active');
}
else
    localStorage.setItem('darkMode', 'false');


var searchBar = document.querySelector('#searchDish');
var position = document.querySelectorAll('#list_dish tr td:nth-child(3)');
var listPos = [];
position.forEach((item, index) => {
    var pos = {
        pos: item.innerHTML,
        index: index
    };
    listPos.push(pos);
})
var listAllStaff = document.querySelectorAll('#list_dish tr');

var tableContent = document.querySelector('#list_dish');
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



//Load
window.onload = function () {
    var savedList = localStorage.getItem('dishArray');
    if (savedList) {
        document.querySelector('.table').innerHTML = savedList;

        deleteAll = document.querySelectorAll('.delete_dish');
        delete_show = document.querySelector('.delete_modal');

        accept = document.querySelector('.delete_modal_body button');
        dishArray = Array.from(document.querySelectorAll('.table_section table tbody tr'));
        updateDeleteButtons();
        delete_btn = document.querySelector('#delete_exit');
        delete_btn.addEventListener('click', () => {
            delete_show.classList.add('hidden');
        });

        edit = document.querySelectorAll('.edit_dish');
        allmodal = document.querySelectorAll('.close_modal');
        modal = document.querySelectorAll('.modal');
        modal_footer = document.querySelectorAll('.modal_footer .close');
        edit.forEach((item, index) => {
            item.addEventListener('click', () => {
                modal[index].classList.toggle('hidden');
            });
        });
        allmodal.forEach((item, index) => {
            item.addEventListener('click', () => {
                modal[index].classList.toggle('hidden');
            });
        });
        modal_footer.forEach((item, index) => {
            item.addEventListener('click', () => {
                modal[index].classList.toggle('hidden');
            });
        });

        add = document.querySelector('.add_new');
        addmodal = document.querySelector('.add_modal');
        done = document.querySelector('.add_done');
        add.addEventListener('click', () => {
            addmodal.classList.toggle('hidden');
            document.querySelector('#input_name').value = '';
            document.querySelector('#input_id').value = '';
            document.querySelector('#input_cost').value = '';
            document.querySelector('#input_ingre').value = '';
            document.querySelector('#file_avt').classList.remove('hidden');
            document.querySelector('#file_avt').value = '';
            container = document.querySelector('.add_avt');
            newImg = document.querySelector('.add_avt img');
            if (newImg)
                container.removeChild(newImg);
        });
        addClose = document.querySelector('#add_close');
        fileImage = document.querySelector('#file_avt');
        container = document.querySelector('.add_avt');
        newImg;
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
        addClose.addEventListener('click', () => {
            addmodal.classList.toggle('hidden');
        });
        done.addEventListener('click', () => {
            addmodal.classList.toggle('hidden');
            var input_name = document.querySelector('#input_name').value;
            var input_id = document.querySelector('#input_id').value;
            var input_cost = document.querySelector('#input_cost').value;
            var input_ingre = document.querySelector('#input_ingre').value;
            add_dish(input_id, newImg.src, input_name, input_cost, input_ingre);
            
            updateDeleteButtons();
        });
        //Dropdown

        var searchBar = document.querySelector('#searchDish');
        var position = document.querySelectorAll('#list_dish tr td:nth-child(3)');
        var listPos = [];
        position.forEach((item, index) => {
            var pos = {
                pos: item.innerHTML,
                index: index
            };
            listPos.push(pos);
        })
        var listAllStaff = document.querySelectorAll('#list_dish tr');

        var tableContent = document.querySelector('#list_dish');
        localStorage.setItem('tableContent', tableContent.innerHTML);
        test = '';
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
    }
}
