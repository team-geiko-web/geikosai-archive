var navHeight = $(".header").outerHeight();
$('a[href^="#"]').on("click", function () {
  var href = $(this).attr("href");
  var target = $(href == "#" || href ==  "" ? "html" : href);
  var position = target.offset().top - navHeight - 50;
  $('header').removeClass('is-open');
  $('.hum-menu-open').removeClass('is-open');
  $("html, body").animate({ scrollTop: position, }, 300, "swing");
  return false;
});
$("#js-page-top").on("click", function () {
  $("body,html").animate({ scrollTop: 0, }, 300);
  return false;
});
$(function() {
  $('#toggle').on('click', function() {
    $('header').toggleClass('is-open');
    $('.hum-menu-open').toggleClass('is-open');
  });
});
const bodyHeight = document.body.clientHeight
const windowHeight = window.innerHeight
const bottomPoint = bodyHeight - windowHeight - 200
function colorfulBalloon(n, max, min,pad) {
  max_height = $('footer').offset().top
  var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  svg.style.position = 'absolute';
  svg.style.viewbox = "0 0 100 100";
  svg.style.zIndex = '-1';
  l_top = 0
  r_top = 0
  i = 0

  while (bottomPoint > l_top && i < n) {
    i++;
    var svgClone = svg.cloneNode();
    var circleClone = circle.cloneNode();
    var size = (Math.round(Math.random() * (max - min) + min)*15)/Math.PI;
    trans = Math.random() * 0.5 + 0.1;
    if (i % 3 == 0) {
      var smallcircleClone = circle.cloneNode();
      small_circle_size = Math.random() * size / 3 + size / 10;
      smallcircleClone.setAttribute('cx', '50%');
      smallcircleClone.setAttribute('cy', '50%');
      smallcircleClone.setAttribute('r', small_circle_size);
      smallcircleClone.style.fill = 'rgb(255,255,255)';
      circleClone.style.fill = "rgba(180,180,180," + trans + ")";
    } else if (i % 3 == 1) {
      circleClone.style.fill = "none";
      trans += 0.2
      circleClone.setAttribute('stroke', "rgba(180,180,180," + trans + ")");
      circleClone.setAttribute('stroke-width', '5')
      circleClone.setAttribute('stroke-dasharray', '15px 15px');
      circleClone.setAttribute('stroke-linecap','round');
    } else {
      circleClone.style.fill = "none";
      trans += 0.2
      circleClone.setAttribute('stroke', "rgba(180,180,180," + trans + ")");
      circleClone.setAttribute('stroke-width', '5');
    }
    circleClone.setAttribute('r', size);
    svgClone.style.left = "calc(" + -1 * size * Math.random() + "px + " + Math.random() * 10+ "%)";
    svgClone.style.top = l_top + 'px';
    circleClone.setAttribute('cx', '50%');
    circleClone.setAttribute('cy', '50%');
    l_top += size * 2 + pad;

    svgClone.style.width = size * 2 + 10;
    svgClone.style.height = size * 2 + 10;
    svgClone.appendChild(circleClone);
    if (i % 3 == 0) {
      svgClone.appendChild(smallcircleClone);
    }
    document.getElementById('main-bg').appendChild(svgClone);
  };
  while (bottomPoint > r_top && i < n) {
    i++;
    var svgClone = svg.cloneNode();
    var circleClone = circle.cloneNode();
    var size = (Math.round(Math.random() * (max - min) + min)*15)/Math.PI;
    trans = Math.random() * 0.5 + 0.1;
    if (i % 3 == 0) {
      var smallcircleClone = circle.cloneNode();
      small_circle_size = Math.random() * size / 3 + size / 10;
      smallcircleClone.setAttribute('cx', '50%');
      smallcircleClone.setAttribute('cy', '50%');
      smallcircleClone.setAttribute('r', small_circle_size);
      smallcircleClone.style.fill = 'rgb(255,255,255)';
      circleClone.style.fill = "rgba(180,180,180," + trans + ")";
    } else if (i % 3 == 1) {
      circleClone.style.fill = "none";
      trans += 0.2
      circleClone.setAttribute('stroke', "rgba(180,180,180," + trans + ")");
      circleClone.setAttribute('stroke-width', '5')
      circleClone.setAttribute('stroke-dasharray', '15px 15px');
      circleClone.setAttribute('stroke-linecap','round');
    } else {
      circleClone.style.fill = "none";
      trans += 0.2
      circleClone.setAttribute('stroke', "rgba(180,180,180," + trans + ")");
      circleClone.setAttribute('stroke-width', '5');
    }
    circleClone.setAttribute('r', size);

    svgClone.style.right = "calc(" + -1 * size * Math.random() + "px + " + Math.random() * 10 + "%)";
    svgClone.style.top = r_top + 'px';
    circleClone.setAttribute('cx', '50%');
    circleClone.setAttribute('cy', '50%');
    r_top += size * 2 + pad;
    svgClone.style.width = size * 2 + 10;
    svgClone.style.height = size * 2 + 10;
    svgClone.appendChild(circleClone);
    if (i % 3 == 0) {
      svgClone.appendChild(smallcircleClone);
    }
    document.getElementById('main-bg').appendChild(svgClone);
  };
}
window_widh=window.innerWidth;
if (window_widh>860){
  colorfulBalloon(400, 25, 10,25);
}else{  
  colorfulBalloon(400, 20, 5,150);
}