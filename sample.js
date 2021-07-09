
jQuery(function($) {
    $(window).on('scroll', function() {
    let links = document.querySelectorAll("a.nav-item.nav-link:not(.login-btn)")
    if ($(this).scrollTop() >= 200) {
      $('.navbar').addClass('fixed-top');
      links.forEach(elem => {
          elem.setAttribute("style", "color: white !important")
        })
    } else if ($(this).scrollTop() == 0) {
        $('.navbar').removeClass('fixed-top');
        links.forEach(elem => {
            elem.setAttribute("style", "color: black !important")
        })
  
    }
  });
  
  function adjustNav() {
    var winWidth = $(window).width(),
      dropdown = $('.dropdown'),
      dropdownMenu = $('.dropdown-menu');
    
    if (winWidth >= 768) {
      dropdown.on('mouseenter', function() {
        $(this).addClass('show')
          .children(dropdownMenu).addClass('show');
      });
      
      dropdown.on('mouseleave', function() {
        $(this).removeClass('show')
          .children(dropdownMenu).removeClass('show');
      });
    } else {
      dropdown.off('mouseenter mouseleave');
    }
  }
  
  $(window).on('resize', adjustNav);
  
  adjustNav();
});

const trendingCourse = ["DCC", "Forex Masterclass", "Videography", "Trade and Earn"]
let n = 0

window.addEventListener("load", () => {
    document.querySelector(".daba-clone-notification-bar").classList.add("flash")
    setInterval(() => {
        document.querySelector(".daba-clone-notification-bar").innerHTML = `<h3>Hot Trending Course: ${trendingCourse[n]}</h3> <a href="#">Enroll Now</a>`
        n += 1
        n = n%4
    }, 9000);
})



