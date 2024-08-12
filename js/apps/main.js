(function (win, $) {
  let firstTime = true;
  let animate = new AnimateCustom();

  // console.log(animate);
  function isElementInViewport(el, plus) {
    if (!plus) {
      plus = 0;
    }
    // Special bonus for those using jQuery

    let rect = el.getBoundingClientRect();
    return rect.top - plus - 3 <= 0 && rect.bottom - plus - 2 >= 0;
  }

  $(document).ready(function () {
    new Slider({
      root: ".services",
      slideToShow: 3,
      slidesToScroll: 1,
      infinite: false,
      activeFunction: true,
      slideSpacing: 24,
      duration: 2,
      breakpoint: {
        1200: {
          slideToShow: 2,
          slidesToScroll: 2,
        },
        767: {
          slideToShow: 1,
        },
      },
    });

    new Slider({
      root: ".projects",
      slideToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      activeFunction: true,
      duration: 2,
    });
    // let test = animate
    //   .timeLine({
    //     pause: true,
    //   })
    //   .to(
    //     '.square',

    //     {
    //       opacity: 1,
    //       transform: ` scale(1)`,
    //       duration: 2,
    //       ease: animate.defaultEasing.Circ.easeInOut,
    //     }
    //   )
    //   .fromTo(
    //     '.square2',
    //     {
    //       opacity: 0,
    //       transform: ` scale(0)`,
    //     },
    //     {
    //       opacity: 1,
    //       transform: ` scale(1)`,
    //       duration: 2,
    //     }
    //   )
    //   .to(
    //     '.square2',

    //     {
    //       opacity: 4,
    //       transform: ` scale(2)`,
    //       duration: 2,
    //     }
    //   )
    //   .fromTo(
    //     '.square3',
    //     { opacity: 0.3, transform: `translateY(30px) scale(2)` },
    //     {
    //       opacity: 1,
    //       transform: `translateY(-10px) scale(1)`,
    //       duration: 2,
    //       ease: animate.defaultEasing.Power2.easeInOut,
    //     }
    //   );

    // let lineCount = 0;
    // let textHeight = ($(".js-hightlight-info").innerHeight() + $(".js-hightlight-info").innerWidth()) / 2;
    // let textFontSize = $(".js-hightlight-info").css("font-size");
    // let lineHeight = Math.ceil(parseInt(textFontSize.replace("px", "")));
    // let splitText = $(".js-hightlight-info").text().split(" ");
    // splitText = splitText.map((item, index) => {
    //   let currenItem = " <span>" + item + "</span>";
    //   if (index == 0) {
    //     currenItem = "<span>" + item + "</span>";
    //   }
    //   return currenItem;
    // });
    // $(".js-hightlight-info").html(splitText);

    // const numberOfLine = textHeight / lineHeight;

    let smoothScroll = animate.useSmoothScroll({
      // target: '.wrap',
      duration: 1,
      ease: animate.defaultEasing.Power2.easeOut,
      // ease: animate.defaultEasing.Sine.easeInOut,
      // ease: BezierEasing(0.65, 0, 0.35, 1),
      onScrolling: (current) => {
        if (isElementInViewport($(".js-spot-section")[0])) {
          var percent = current / $(".js-spot-section").innerHeight();

          if (percent <= 1) {
            $(".js-spot-chair").css({
              opacity: percent,
            });
            $(".js-spot-lamp").css({
              opacity: percent,
            });
            $(".js-spot-plant").css({
              opacity: percent,
            });
            $(".js-spot-main").css({
              opacity: 1 - (percent - 0.12),
            });
          }
          $(".js-spot-main").css({
            transform: "translateY(" + percent * 100 + "%)",
          });
          $(".js-spot-chair").css({
            transform: "translateX(-" + current / 4 + "px)",
          });
          $(".js-spot-lamp").css({
            transform: "translateX(-" + current / 4 + "px)",
          });
          $(".js-spot-plant").css({
            transform: "translateX(" + current / 4 + "px)",
          });
        }
        if (isElementInViewport($(".js-count-section")[0], $(".js-header").outerHeight())) {
          if (firstTime) {
            $(".js-count-current").addClass("is-show");
            firstTime = false;
            let maxCount = [100, 30, 10];
            for (let i = 0; i < maxCount.length; i++) {
              const max = maxCount[i];
              let intervalId = null;
              let count = 0;
              let varName = function () {
                if (count <= max) {
                  $(".js-count-current:eq(" + i + ")").text("+" + count);
                  if (count >= max - 30) {
                    count++;
                  } else {
                    count += 30;
                  }

                  /* your code goes here */
                } else {
                  clearInterval(intervalId);
                  $(".js-count-desc:eq(" + i + ")").addClass("is-show");
                }
              };

              intervalId = setInterval(varName, 70);
            }
          }
        }

        if (isElementInViewport($(".js-count-section")[0], $(".js-header").outerHeight())) {
          if (firstTime) {
            $(".js-count-current").addClass("is-show");
            firstTime = false;
            let maxCount = [100, 30, 10];
            for (let i = 0; i < maxCount.length; i++) {
              const max = maxCount[i];
              let intervalId = null;
              let count = 0;
              let varName = function () {
                if (count <= max) {
                  $(".js-count-current:eq(" + i + ")").text("+" + count);
                  if (count >= max - 30) {
                    count++;
                  } else {
                    count += 30;
                  }

                  /* your code goes here */
                } else {
                  clearInterval(intervalId);
                  $(".js-count-desc:eq(" + i + ")").addClass("is-show");
                }
              };

              intervalId = setInterval(varName, 70);
            }
          }
        }

        let sections = $(".js-section");

        for (let i = 0; i < sections.length; i++) {
          var section = sections[i];
          if (isElementInViewport(section, $(".js-header").outerHeight())) {
            if ($(section).hasClass("product")) {
              var percent = ($(section)[0].getBoundingClientRect().top - $(".js-header").outerHeight()) / $(section).height();
              if (percent < 0) {
                $(".js-product-img").css({
                  transform: "translateY(" + Math.abs(percent * 100) + "%)",
                });
              }
            }
            if ($(section).css("background-color") === "rgba(0, 0, 0, 0)") {
              $(".js-header").removeClass("active-black");
            } else {
              $(".js-header").addClass("active-black");
            }
            $(section).addClass("is-active");
          }
        }

        if ($(".footer")[0].getBoundingClientRect().top - $(".footer").innerHeight() * 2 <= 0 && $(".footer")[0].getBoundingClientRect().bottom - $(".footer").innerHeight() >= 1) {
          let bottom = current - $(".footer").offset().top + ($(win).innerHeight() < $(".footer").innerHeight() ? $(".footer").innerHeight() : $(win).innerHeight());

          let progress = bottom / $(".footer").innerHeight();

          // let postion =
          //   (($('.footer')[0].getBoundingClientRect().bottom -
          //     $(win).innerHeight() +
          //     ($('.footer').innerHeight() > $(win).innerHeight()
          //       ? $(win).innerHeight() - $('.footer').innerHeight()
          //       : 0)) /
          //     $('.footer').innerHeight()) *
          //   100;
          // console.log('🚀 ~ postion:', postion);
          $(".footer")
            .find(".footer__inner")
            .css({
              transform: "translateY(-" + (1 - progress) * 100 + "%)",
            });
          $(".subscribe")
            .find(".subscribe__table")
            .css({
              transform: "translateX(-" + (1 - progress) * 100 + "%)",
              opacity: 1 - ($(".footer")[0].getBoundingClientRect().bottom - $(win).innerHeight()) / $(".footer").innerHeight(),
            });
        }
      },
      hideScrollBar: true,
    });
    // $('#test').on('click', function () {
    //   console.log('test');
    //   test.play();
    // });
    // $('#test2').on('click', function () {
    //   console.log('test');
    //   test.reverse();
    // });
    $(".js-header-btn").on("click", function (e) {
      // test.execute();
      // smoothScroll.scrollTo(100, false);
      smoothScroll.lock();
      $(".js-header").toggleClass("is-active");
    });
  });
})(window, window.jQuery);
