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
    document.body.style.transition='0.3s';
})
//Add
const add = document.querySelector('.add_new');
const addmodal = document.querySelector('.add_modal');
const done=document.querySelector('.add_done');
add.addEventListener('click', () => {
    addmodal.classList.toggle('hidden');
});
const addClose = document.querySelector('#add_close');
addClose.addEventListener('click', () => {
    addmodal.classList.toggle('hidden');
});
done.addEventListener('click',()=>{
    addmodal.classList.toggle('hidden');
});
//Dropdown
const allDropDown = document.querySelectorAll('.dropdown');
allDropDown.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('show');
    });
});
//Delete
const deleteAll=document.querySelectorAll('.delete_staff');
const delete_show=document.querySelector('.delete_modal');
const delete_btn=document.querySelector('#delete_exit');
const accept=document.querySelector('.delete_modal_body button');
deleteAll.forEach(item=>{
item.addEventListener('click',()=>{
    delete_show.classList.toggle('hidden');
});
});
delete_btn.addEventListener('click',()=>{
    delete_show.classList.toggle('hidden');
});
accept.addEventListener('click',()=>{
    delete_show.classList.toggle('hidden');
});
//Modal
const edit=document.querySelectorAll('.edit_staff');
const allmodal=document.querySelectorAll('.close_modal');
const modal=document.querySelectorAll('.modal');
const modal_footer=document.querySelectorAll('.modal_footer .close');
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

const isDarkModeEnabled = localStorage.getItem('darkMode') === 'true';
console.log(isDarkModeEnabled);
if (isDarkModeEnabled) {
  document.body.classList.toggle('dark-theme-variables');
    themeToggeler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggeler.querySelector('span:nth-child(2)').classList.toggle('active');
}
else
    localStorage.setItem('darkMode', 'false');

