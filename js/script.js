function showButtonSend() {
  $('#txt-form').keydown(function(){
    $('.send-btn .enter').removeClass('hide');
    $('.send-btn .record').addClass('hide');
  });
}

function showUserMex() {
  $('#message-box .send-btn  img').click(function (){
    var template = $('#my-mex > div').clone();
    var target = $('.user-side');
    var userMex = $('#txt-form').val();
    template.find('#message-text').text(userMex);
    target.append(template);
    $('#txt-form').val('');
    $('.send-btn .record').removeClass('hide');
    $('.send-btn .enter').addClass('hide');
    setTimeout(showSpeakerMex(),1000);
  });
}

function showSpeakerMex() {
  var template = $('#his-mex > div').clone();
  var target = $('.speaker-side');
  target.append(template);
  // var speakerMex = $('#message-text-speaker');
}

function showOptionMex() {
  var target = $('.fa-chevron-down');
  var option = $('.option');
  target.click(function() {
    $(option).toggleClass('hide', 'show');
  });
}














function init() {
  showButtonSend();
  showUserMex();
  showOptionMex();
};






$(document).ready(init);
