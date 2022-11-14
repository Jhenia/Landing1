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
// modal

$('.button').click(function () {
  var buttonId = $(this).attr('id');
  $('body').addClass('locked');
  $('#modal-container').removeAttr('class').addClass(buttonId);
  $('#modal-container').removeClass('hide');
  $('.modal-background').addClass('opened');
  $('body').removeClass('locked');

})
$('.showblock_background').click(function () {
  $('body').removeClass('locked');
  $('.showblock_background').removeClass('Show_bg');
  $('.showblock').removeClass('Show');
});
$('.modal-background').click(function () {
  $('#modal-container').addClass('out');
  $('body').removeClass('modal-active');
  $('.modal-background').removeClass('opened');
  $('body').removeClass('locked');
});
$('.modal-background').on('click', (e) => {
  setTimeout(() => {
      $('#modal-container').addClass('hide');
  }, 500);
});
$('.modal__close').click(function () {
  $('#modal-container').addClass('out');
  $('body').removeClass('modal-active');
  $('.modal-background').removeClass('opened');
  $('body').removeClass('locked');
});
$('.modal__close').on('click', (e) => {
  setTimeout(() => {
      $('#modal-container').addClass('hide');
  }, 500);
});

$('.button2').click(function () {
  var buttonId = $(this).attr('id');
  $('body').addClass('locked');
  $('#modal-container2').removeAttr('class').addClass(buttonId);
  $('#modal-container2').removeClass('hide');
  $('.modal-background2').addClass('opened');

})

$('.modal-background2').click(function () {
  $('#modal-container2').addClass('out');
  $('body').removeClass('modal-active');
  $('.modal-background2').removeClass('opened');
  $('body').removeClass('locked');
});
$('.modal-background2').on('click', (e) => {
  setTimeout(() => {
      $('#modal-container2').addClass('hide');
  }, 500);
});
$('.modal__close').click(function () {
  $('.showblock').removeClass('Show');
  $('#modal-container2').addClass('out');
  $('body').removeClass('modal-active');
  $('.modal-background2').removeClass('opened');
  $('body').removeClass('locked');
});
$('.modal__close').on('click', (e) => {
  $('.showblock').removeClass('Show');
  $('.showblock_background').removeClass('Show_bg');
  setTimeout(() => {
      $('#modal-container2').addClass('hide');
  }, 500);
});

$('form').submit(function(e) {
  let show = document.querySelector(".showblock");
  let showbg = document.querySelector(".showblock_background");
  var empty = $(this).parent().find("input").filter(function() {
    return this.value === "";
  });
  if (!empty.length) {
    show.classList.toggle("Show");
    $('#modal-container').addClass('hide');
    $('#modal-container2').addClass('hide');
    $('.modal-background2').removeClass('opened');
    showbg.classList.toggle("Show_bg");
    $('.modal-background').removeClass('opened');
 
    
   
    $('body').addClass('locked');
    //Если все графы заполнены, то показываем popup

   
    //очищаем все данные текстовых полей, кроме кнопок
    $('form input').not(':button, :submit').val('');
  }
  e.preventDefault();
});

         
     
