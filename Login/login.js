const loginSignupLink=
document.querySelectorAll(".register a");
const form=document.querySelector("body");
loginSignupLink.forEach(link=>{
    link.addEventListener("click",(e)=>{
       form.classList[link.id==="signup-link" ? "add" : "remove"]("show-signup");
    })
})

const email = document.querySelector('.input_email');
const password = document.querySelector('.input_password');
const checkBox = document.querySelector('.input_check');

const login = document.querySelector('.login');
login.addEventListener("click", ()=>{
    let valueEmail = email.value;
    let valuePassword = password.value;
    if(valueEmail ==="admin@gmail.com" && valuePassword==="admin"){
        login.href ="./Admin/Admin.html";
    }else {
        alert("sai tài khoảng hoặc mật khẩu ");
    }
});
