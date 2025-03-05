// navbar scroll event
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
  });


// menu button click event
var menu = document.querySelector('.menu');
    var menuBtn = document.querySelector('.menu-btn');
    var closeBtn = document.querySelector('.close-btn');

    menuBtn.addEventListener("click", () => {
      menu.classList.add('active');
    });

    closeBtn.addEventListener("click", () => {
      menu.classList.remove('active');
    });
const firstimage = document.getElementById('firstimage');
const secondimage = document.getElementById('secondimage');
function toggleimages(){
  if (firstimage.style.opacity===1){
    firstimage.style.opacity='0';
    secondimage.style.opacity='1';
  }else{
    firstimage.style.opacity='1';
    secondimage.style.opacity='2';
  }
}



