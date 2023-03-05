$num = $(".my-card").length;

// console.log($('.info-container').length);
$even = $num / 2;
$odd = ($num + 1) / 2;

if ($num % 2 == 0) {
  $(".my-card:nth-child(" + $even + ")").addClass("active");
  $(".my-card:nth-child(" + $even + ")")
    .prev()
    .addClass("prev");
  $(".my-card:nth-child(" + $even + ")")
    .next()
    .addClass("next");
} else {
  $(".my-card:nth-child(" + $odd + ")").addClass("active");
  $(".my-card:nth-child(" + $odd + ")")
    .prev()
    .addClass("prev");
  $(".my-card:nth-child(" + $odd + ")")
    .next()
    .addClass("next");
}

$(".my-card").click(function () {
  $slide = $(".active").width();
  console.log($(".active").position().left);

  if ($(this).hasClass("next")) {
    $(".card-carousel")
      .stop(false, true)
      .animate({ left: "-=" + $slide });
  } else if ($(this).hasClass("prev")) {
    $(".card-carousel")
      .stop(false, true)
      .animate({ left: "+=" + $slide });
  }

  $(this).removeClass("prev next");
  $(this).siblings().removeClass("prev active next");

  $(this).addClass("active");
  $(this).prev().addClass("prev");
  $(this).next().addClass("next");
  for(let i = 1; i<= $('.info-container').length; i++){
    $('.item'+ i).css('display', 'none')
  }
  if ($(this).hasClass("sun")){
    $(".item1").css('display', 'block')
  } else if ($(this).hasClass("mercury")){
    $(".item2").css('display', 'block')
  } else if ($(this).hasClass("venus")){
    $(".item3").css('display', 'block')
  } else if ($(this).hasClass("earth")){
    $(".item4").css('display', 'block')
  } else if ($(this).hasClass("moon")){
    $(".item5").css('display', 'block')
  } else if ($(this).hasClass("mars")){
    $(".item6").css('display', 'block')
  } else if ($(this).hasClass("jupiter")){
    $(".item7").css('display', 'block')
  } else if ($(this).hasClass("uranus")){
    $(".item8").css('display', 'block')
  } else if ($(this).hasClass("neptune")){
    $(".item9").css('display', 'block')
  } else if ($(this).hasClass("pluto")){
    $(".item10").css('display', 'block')
  }
});

// Keyboard nav
$("html body").keydown(function (e) {
  if (e.keyCode == 37) {
    // left
    $(".active").prev().trigger("click");
  } else if (e.keyCode == 39) {
    // right
    $(".active").next().trigger("click");
  }
});
