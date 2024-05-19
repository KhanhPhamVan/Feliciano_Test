const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu_bar");
const closeBtn = document.querySelector("#close_btn")
const themeToggeler = document.querySelector(".theme-toggler");

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
    if(document.body.classList.contains('dark-theme-variables'))
        localStorage.setItem('darkMode', 'true');
    else localStorage.setItem('darkMode', 'false');
    document.body.style.transition='0.3s';
})
//Modal
const btnOpen = document.querySelectorAll(".detail");
const modal = document.querySelectorAll(".modal");
const btnClose = document.querySelectorAll(".close");
function toggleModal() {
    modal.classList.toggle('hidden');
}
btnOpen.forEach((item, index) => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        modal[index].classList.toggle('hidden');
    })
});
btnClose.forEach((item, index) => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        modal[index].classList.toggle('hidden');
    })
})
//Add
const add = document.querySelector('.add_staff');
const addmodal = document.querySelector('.add_modal');
const done=document.querySelector('.add_modal_footer');
add.addEventListener('click', () => {
    addmodal.classList.toggle('hidden');
});
const addClose = document.querySelector('#add_close');
addClose.addEventListener('click', () => {
    addmodal.classList.toggle('hidden');
});
done.addEventListener('click', () => {
    addmodal.classList.toggle('hidden');
});
//Dropdown
const allDropDown = document.querySelectorAll('.dropdown');
allDropDown.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('show');
    })
})

const isDarkModeEnabled = localStorage.getItem('darkMode') === 'true';
console.log(isDarkModeEnabled);
if (isDarkModeEnabled) {
  document.body.classList.toggle('dark-theme-variables');
    themeToggeler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggeler.querySelector('span:nth-child(2)').classList.toggle('active');
} 
else
    localStorage.setItem('darkMode', 'false');
