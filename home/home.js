let reg = document.getElementById("Register");
let login = document.getElementById("Login");

reg.addEventListener('click', function () {
    window.location.href = "../register/register.html";
});

login.addEventListener("click", function () {
    window.location.href = "../login/login-page.html";
});
reg = document.getElementById("Register")
login = document.getElementById("Login")

function openUrl() {
    winow.open('../login/login-page.html', ' _ blank');

    reg.onclick = () => function () { openUrl() }
    login.onclick = () => "../login/login-page.html"
}

const menu = document.querySelector('.hamburger-icon');
const cross = document.querySelector('.modal-cross');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal')

menu.addEventListener('click' , ()=> {
    modal.classList.add('active');
    overlay.classList.add('active-cross-overlay')
})

cross.addEventListener('click' , ()=>{
    overlay.classList.remove('active-cross-overlay');
    modal.classList.remove('active');
})

overlay.addEventListener('click' , ()=>{
    overlay.classList.remove('active-cross-overlay');
    modal.classList.remove('active');
})

const contact_us = document.querySelector('.contact-us');
const contact_modal = document.querySelector('.contact-us-modal');
const contact_cross = document.querySelector('.contact-cross');
const contact_us_phone = document.querySelector('.contact-us-phone');
const logo = document.querySelector('.logo');
const woman = document.querySelector('.woman');
const hero_head = document.querySelector('[hero-heading]');
const hero_para = document.querySelector('[hero-para]');
const login_btn = document.querySelector('#Login');
const register_btn = document.querySelector('#Register');
const leader_head = document.querySelector('.leaderboard-heading');
const leaderboard = document.querySelector('.rectangle');
// const review_head = document.querySelector('[review-head]');
// const review1 = document.querySelector('[review1]');
// const review2 = document.querySelector('[review2]');
// const review3 = document.querySelector('[review3]');

contact_us.addEventListener('click' , ()=>{
    contact_modal.classList.add('contact-us-active');
    overlay.classList.add('active-cross-overlay');
});

contact_cross.addEventListener('click' , ()=>{
    contact_modal.classList.remove('contact-us-active');
    overlay.classList.remove('active-cross-overlay');
});

overlay.addEventListener('click' , ()=>{
    contact_modal.classList.remove('contact-us-active');
    overlay.classList.remove('active-cross-overlay');
});

contact_us_phone.addEventListener('click' , ()=>{
    contact_modal.classList.add('contact-us-active');
    overlay.classList.add('active-cross-overlay');
    modal.classList.remove('active');
});

logo.addEventListener('load' , ()=>{
    logo.style.transform = 'translateY(0%)';
    logo.style.transition = 'all 0.5s linear';
    logo.style.opacity = "1";
});

woman.addEventListener('load' , ()=>{
    woman.style.transform = 'translateY(0%)';
    woman.style.transition = 'all 0.5s linear';
    woman.style.opacity = "1";
});

window.addEventListener('load' , ()=>{
    hero_head.style.transform = 'translateX(0%)';
    hero_head.style.transition = 'all 0.7s linear';
    hero_head.style.opacity = "1";
});

window.addEventListener('load' , ()=>{
    hero_para.style.transform = 'translateX(0%)';
    hero_para.style.transition = 'all 0.5s linear';
    hero_para.style.opacity = "1";
});

window.addEventListener('load' , ()=>{
    login_btn.style.transform = 'translateX(0%)';
    login_btn.style.opacity = "1";
});

window.addEventListener('load' , ()=>{
    register_btn.style.transform = 'translateX(0%)';
    register_btn.style.opacity = "1";
});

window.addEventListener('load' , ()=>{
    leader_head.style.transform = 'translateY(0%)';
    leader_head.style.transition = 'all 0.5s linear';
    leader_head.style.opacity = "1";
});

window.addEventListener('load' , ()=>{
    leaderboard.style.transform = 'translateY(0%)';
    leaderboard.style.transition = 'all 0.5s linear';
    leaderboard.style.opacity = "1";
});

// window.addEventListener('load', function () {

//     const reviewElements = [review_head, review1, review2, review3];

//     reviewElements.forEach((element) => {
//         const rect = element.getBoundingClientRect();
//         if (rect.top < window.innerHeight) {
//             element.style.transform = 'translateY(0)';
//             element.style.transition = 'all 0.5s linear';
//             element.style.opacity = '1';
//         }
//     });
// });