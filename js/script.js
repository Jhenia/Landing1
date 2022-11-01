 //Header burger     
      let header__burger = document.querySelector('.burger');
        let header_menu = document.querySelector('.header__menu');
        let back = document.querySelector('body');


        header__burger.onclick = function(){
            header__burger.classList.toggle('active');
            header_menu.classList.toggle('active');
            back.classList.toggle('locked');
        }
//Header burger   ;
let add_class = document.querySelector('.reviews__items');
var isResizeble = false;
if(!isResizeble){
  window.addEventListener('scroll', function () {
    if (window.scrollY = 800) { 
      add_class.classList.toggle("scroll");
      $(".scroll").scrollLeft(278);
      isResizeble = true;
    } else {
      add_class.classList.remove("scroll");
    }
  });
}

// scrollToLink
document.addEventListener("click", e => {
  let anchorlink = e.target.closest('a[href^="#"]');
  
  if (anchorlink) {
     e.preventDefault();
     let hashval = anchorlink.getAttribute('href')
     let target = document.querySelector(hashval)
     const yOffset = 0;
     const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
     window.scrollTo({ top: y, behavior: 'smooth' });

     history.pushState(null, null, hashval)
     e.preventDefault();
  }
})
//remove bg
function removeCls() {
  $('.burger').removeClass('active');
  $('.nav').removeClass('active');
  $('body').removeClass('locked');
}


         
     
