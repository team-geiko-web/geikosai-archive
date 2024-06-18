$(function () {
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbyTIni6kUi3wnypaU3Jk6BiRZE4iwzmVuxMq1sGnqgOh9STGxP2COXVsfdwPH64i712pg/exec"
  }).done(function (data) {
    d = data;
    for (let key in data) {
      title = data[key]['text'];
      date = data[key]['date'];
      link_f = data[key]['link-f']
      link_path = data[key]['link-path']
      if (Boolean(link_f)) {
        $('.news-box').append("<div class='news-content'><div class='news-date-wrapper'><p class='news-date'>"+date+"</p></div><div class='news-text-wrapper'><p class='news-text'>"+title+"<a href="+link_path+"><img src='img/link.png' alt='' class='news-link-button'></a></p></div ></div>")
      } else {
        $('.news-box').append("<div class='news-content'><div class='news-date-wrapper'><p class='news-date'>"+date+"</p></div><div class='news-text-wrapper'><p class='news-text'>"+title+"</p></div ></div>")
      }
    }
  })
})
  