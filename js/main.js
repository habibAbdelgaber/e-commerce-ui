const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLink = document.getElementsByClassName("items")[0];

toggleButton.addEventListener("click", () => {
  navbarLink.classList.toggle("active");
});

function disappearFormAndOverlay(){
    document.querySelector('.model').style.display = 'none'
    document.querySelector('.overlay').style.display = 'none'
}

document.querySelector('.contact-us').addEventListener('click', function() {
    document.querySelector('.model').style.display = 'block'
    document.querySelector('.overlay').style.display = 'block'
})

document.querySelector('.close-form').addEventListener('click', function(){
    disappearFormAndOverlay()
})

window.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
        disappearFormAndOverlay()
    }
})
