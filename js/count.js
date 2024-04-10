const year = document.querySelector('.year');
const dish = document.querySelector('.dish');
const staff = document.querySelector('.staff');
const people = document.querySelector('.people');
function change (name , number , timeDuration , index) {
    var interval = setInterval(function(){
        name.innerHTML = index;
        if(index === number){
            clearInterval(interval);
        }
        index++;
    } , timeDuration)
}

change(year , 18 ,200 ,0);
change(dish , 100 ,50 ,0);
change(staff , 50 ,100 ,0);
change(people , 15000 ,0.2 , 14000);