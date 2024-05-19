const listButtonOrder  = document.querySelectorAll('.order');
const modal1 = document.querySelector('.modal');
var closeModal = document.querySelector('.modal__content .icon ');
var isModal = false ;

// Dùng forEach để lặp qua mỗi button trong listButtonOrder và gắn sự kiện click
listButtonOrder.forEach(( buttonItem , index) => {
    buttonItem.addEventListener('click', () => {
        modal1.classList.add('active');
        isModal = true ;
    });
});


function hideModal() { 
    modal1.classList.remove('active');
    isModal = false ;   
}

