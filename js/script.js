function showButtonSend() {
  $('#txt-form').keydown(function(){
    $('.send-btn .enter').removeClass('enter');
    $('.send-btn .record').addClass('hide');
  });
}

function showUserMex() {
  $('#message-box .send-btn  img').click(function (){
    var userMex = $('#txt-form').val();
    $('#my-mex > p').append(userMex);
    $('.user-mex').removeClass('hide');
  });
}


















function init() {
  showButtonSend();
  showUserMex();
};






$(document).ready(init);
