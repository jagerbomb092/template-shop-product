(function (win, $) {
  let animateService = new AnimateCustom();

  function isElementInViewport(el, plus) {
    if (!plus) {
      plus = 0;
    }
    let rect = el.getBoundingClientRect();
    return rect.top - plus - 3 <= 0 && rect.bottom - plus - 2 >= 0;
  }
  $(document).ready(function () {
    // animateService.useMousePosition({
    //   target: window,
    //   onUpdate: function (x, y) {
    //     $('.js-page-mask').css({
    //       'mask-position': x + 'px ' + y + 'px',
    //     });
    //   },
    //   duration: 2,
    //   ease: animateService.defaultEasing.Power1.easeIn,
    //   defaultX: window.innerWidth / 2,
    //   defaultY: window.innerHeight / 2,
    //   cursorSize: 110,
    //   actions: [
    //     {
    //       target: '.js-section-title',
    //       onRange: function (currentElement) {
    //         $('.js-page-mask').addClass('active-trans');
    //         $(currentElement)
    //           .parents('.js-section-layer')
    //           .addClass('active-transparent');
    //       },
    //       outRange: function () {
    //         $('.js-page-mask').removeClass('active-trans');
    //         $('.js-section-layer').removeClass('active-transparent');
    //         // $('.js-mask-button').removeClass('is-link');
    //       },
    //     },
    //   ],
    // });

    animateService.useFullPage({
      duration: 1,
      ease: animateService.defaultEasing.Power3.easeOut,
      hideScrollBar: true,
      // onUpdate: function (y, currentIndex, total) {
      //   let allSections = $('.js-section');

      //   $(allSections[currentIndex])
      //     .find('.section__bg')
      //     .css({
      //       transform: 'translateY(' + -y + 'px)',
      //     });
      //   $(allSections[currentIndex])
      //     .find('.js-section-title')
      //     .css({
      //       transform: 'translateY(' + y + 'px)',
      //     });
      //   console.log(total);
      //   $('.js-mask-controller').css({
      //     transform: 'translateY(' + -total + 'px)',
      //   });
      //   if (y > 0) {
      //     $(allSections[currentIndex])
      //       .find('.js-section-des')
      //       .css({
      //         opacity:
      //           Math.abs(
      //             (y - $(allSections[currentIndex]).innerHeight()) /
      //               $(allSections[currentIndex]).innerHeight()
      //           ) *
      //           100 *
      //           0.01,
      //       });
      //     $(allSections[currentIndex - 1])
      //       .find('.section__bg')
      //       .css({
      //         transform:
      //           'translateY(' +
      //           ($(allSections[currentIndex - 1]).innerHeight() - y) +
      //           'px)',
      //       });
      //     $(allSections[currentIndex - 1])
      //       .find('.js-section-title')
      //       .css({
      //         transform:
      //           'translateY(' +
      //           ($(allSections[currentIndex - 1]).innerHeight() - y) +
      //           'px)',
      //       });
      //   } else {
      //     // console.log($(allSections[currentIndex - 1]).innerHeight() + y);
      //     $(allSections[currentIndex])
      //       .find('.js-section-des')
      //       .css({
      //         opacity:
      //           Math.abs(
      //             ($(allSections[currentIndex]).innerHeight() + y) /
      //               $(allSections[currentIndex]).innerHeight()
      //           ) *
      //           100 *
      //           0.01,
      //       });
      //     $(allSections[currentIndex + 1])
      //       .find('.section__bg')
      //       .css({
      //         transform:
      //           'translateY(' +
      //           (-y - $(allSections[currentIndex + 1]).innerHeight()) +
      //           'px)',
      //       });
      //     $(allSections[currentIndex + 1])
      //       .find('.js-section-title')
      //       .css({
      //         transform:
      //           'translateY(' +
      //           (-y - $(allSections[currentIndex + 1]).innerHeight()) +
      //           'px)',
      //       });
      //   }
      // },
    });
  });
  $(win).on('DOMContentLoaded load resize  scroll', function (e) {
    let sections = $('.js-section');

    for (let i = 0; i < sections.length; i++) {
      var section = sections[i];
      if (isElementInViewport(section, $('.js-header').outerHeight())) {
        if ($(section).hasClass('product')) {
          var percent =
            ($(section)[0].getBoundingClientRect().top -
              $('.js-header').outerHeight()) /
            $(section).height();
          if (percent < 0) {
            $('.js-product-img').css({
              transform: 'translateY(' + Math.abs(percent * 100) + '%)',
            });
          }
        }

        if (
          $(section).css('background-color') === 'rgba(0, 0, 0, 0)' ||
          $(section).css('background-color') === 'transparent'
        ) {
          $('.js-header').addClass('active-transparent');
        } else {
          $('.js-header').removeClass('active-transparent');
        }
        $(section).addClass('is-active');
      }
    }

    if (
      $('.footer')[0].getBoundingClientRect().top -
      $('.footer').innerHeight() * 2 <=
      0 &&
      $('.footer')[0].getBoundingClientRect().bottom -
      $('.footer').innerHeight() >=
      1
    ) {
      let postion =
        (($('.footer')[0].getBoundingClientRect().bottom -
            $(win).innerHeight() +
            ($('.footer').innerHeight() > $(win).innerHeight() ?
              $(win).innerHeight() - $('.footer').innerHeight() :
              0)) /
          $('.footer').innerHeight()) *
        100;

      $('.footer')
        .find('.footer__inner')
        .css({
          transform: 'translateY(-' + postion + '%)',
        });
    }
  });
})(window, window.jQuery);
