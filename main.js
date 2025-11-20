document.quieryslector("#show-login")
    .addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
})
document.quieryslector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
})