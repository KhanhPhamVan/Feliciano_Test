const sideMenu=document.querySelector('aside');
const menuBtn=document.querySelector('#menu_bar');
const closeBtn=document.querySelector('#close_btn')
const themeToggeler=document.querySelector('.theme-toggler');

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
})
//Dropdown
const allDropDown = document.querySelectorAll('.dropdown');
allDropDown.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('show');
    })
})
//

const isDarkModeEnabled = localStorage.getItem('darkMode') === 'true';
console.log(isDarkModeEnabled);
if (isDarkModeEnabled) {
  document.body.classList.toggle('dark-theme-variables');
    themeToggeler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggeler.querySelector('span:nth-child(2)').classList.toggle('active');
}
else 
    localStorage.setItem('darkMode', 'false');