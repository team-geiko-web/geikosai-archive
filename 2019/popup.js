$(function () {
  $('.zenya').click(function(){
     $('#modalZenya').fadeIn();
  });
  $('#closeModal , #modalBg').click(function(){
    $('#modalZenya').fadeOut();
  });
  
  $('.sanken').click(function(){
     $('#modalSanken').fadeIn();
  });
  $('#closeModal , #modalBg').click(function(){
    $('#modalSanken').fadeOut();
  });
  
  $('.goken').click(function(){
     $('#modalGoken').fadeIn();
  });
  $('#closeModal , #modalBg').click(function(){
    $('#modalGoken').fadeOut();
  });
  
  $('.panf').click(function(){
     $('#modalPanf').fadeIn();
  });
  $('#closeModal , #modalBg').click(function(){
    $('#modalPanf').fadeOut();
  });
  
  $('.niken').click(function(){
    $('#modalNiken').fadeIn();
  });
  $('#closeModal , #modalBg').click(function(){
    $('#modalNiken').fadeOut();
  });
  
  $('.cba').click(function(){
    $('#modalCba').fadeIn();
  });
  $('#closeModal , #modalBg').click(function(){
    $('#modalCba').fadeOut();
  });
  
  $('.himatsuri').click(function(){
    $('#modalHimatsuri').fadeIn();
  });
  $('#closeModal , #modalBg').click(function(){
    $('#modalHimatsuri').fadeOut();
  });
  
  // -----------------------
  $('.timetable_kikaku').click(function(){
    $('#modalTimetable_kikaku').fadeIn();
  });
  $('#closeModal , #modalBg').click(function(){
    $('#modalTimetable_kikaku').fadeOut();
  });
  
  $('.tent').click(function(){
    $('#modalTent').fadeIn();
  });
  $('#closeModal , #modalBg').click(function(){
    $('#modalTent').fadeOut();
  });
  
  $('.kyositsu').click(function(){
    $('#modalKyositsu').fadeIn();
  });
  $('#closeModal , #modalBg').click(function(){
    $('#modalKyositsu').fadeOut();
  });
  
  
  $('.timetable_fry').click(function(){
    $('#modalTimetable_fry').fadeIn();
  });
  $('#closeModal , #modalBg').click(function(){
    $('#modalTimetable_fry').fadeOut();
  });
  
  
  $(function () {
      $('#nav-toggle').on('click', function() {
        $('body').toggleClass('open');
      });
   })     
    $(function () {
      $('#gloval-nav').on('click', function() {
        $('body').toggleClass('open');
      });
  })
  
  
  
  
  
  
  
  
});