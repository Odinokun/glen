module.exports = function() {

  //begin open-close menu
  $('.header__burger').on('click', function () {
    $('#header-menu').toggleClass('active');
    $('#header__burger').toggleClass('fixed');
  });
  //end open-close menu

};