const navChangeList = document.querySelectorAll('.nav__change__item');
const listMenu = document.querySelectorAll('.menu__item');
// console.log(navChangeList);
// console.log(listMenu);

navChangeList.forEach( (element ,index ) => {
    element.addEventListener('click', () => {
        document.querySelector('.button__change.active').classList.remove('active');
        navChangeList[index].querySelector('.button__change').classList.add('active');
        document.querySelector('.menu__item.active').classList.remove('active');
        listMenu[index].classList.add('active');
    }); 
});