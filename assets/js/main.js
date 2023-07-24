

var swiper = new Swiper('.blabla', {
  slidesPerView: 2.5,
  centeredSlides: false,
  spaceBetween: 15,
  autoplay:true,
  autoplaySpeed:150,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    init: function () {
     
      $('.swiper-slide-active .article-content').addClass('active');
    },
    transitionStart: function() {
      $('.article-content').removeClass('active');
    },
    transitionEnd: function(swiper) {
      $('.swiper-slide-active .article-content').addClass('active');
    }
  },
  breakpoints: {
    500: {
      slidesPerView: 1,
      centeredSlides: true
    },
    700: {
      slidesPerView: 1,
      centeredSlides: true
    }
  }
});     
  

  function searchFunction(data){
    console.log('search')
    var headerRight =  document.getElementById('input');
    var searchIcon =  document.getElementById('searchIcon');
    if(data == 'viewInput'){
     
      headerRight.classList.add("inputBox-for-search");
      headerRight.classList.remove("displayInputBox");
      searchIcon.style.display = 'none'
     
    } else if(data == 'closeInput'){
        var headerRight =  document.getElementById('input');
        headerRight.classList.remove("inputBox-for-search");
        headerRight.classList.add("displayInputBox");
        searchIcon.style.display = 'inline-block'
    }
   
  }

  function toggleNavBar(){

    var headerForMobile =  document.getElementById('header-for-mobile-view');

    console.log(headerForMobile.style.display,'headerRight.style.display')

    headerForMobile.classList.toggle("header-for-mobile-navigation");
}






