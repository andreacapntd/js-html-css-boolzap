function showButtonSend() {
  $('#txt-form').keydown(function(){
    $('.send-btn .enter').removeClass('enter');
    $('.send-btn .record').addClass('hide');
  });
}




















function init() {
  showButtonSend();
};






$(document).ready(init);
