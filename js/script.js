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
    template.find('#mex-time').text(getActualHour());
    target.append(template);
    $('#txt-form').val('');
    $('.send-btn .record').removeClass('hide');
    $('.send-btn .enter').addClass('hide');
    showSpeakerMex();
  });
}

function showSpeakerMex() {
  setTimeout(function () {
    var template = $('#his-mex > div').clone();
    var target = $('.speaker-side');
    template.find('#mex-time').text(getActualHour());
    target.append(template);

  }, 1000);
  // var speakerMex = $('#message-text-speaker');
}

function showOptionMex() {
  var target = $('.fa-chevron-down');
  var option = $('.option');
  target.click(function() {
    $(option).toggleClass('hide', 'show');
  });
}

function getActualHour() {
  var date = new Date();
  return date.getHours() + ':' + date.getMinutes();
}












function init() {
  showButtonSend();
  showUserMex();
  showOptionMex();
};






$(document).ready(init);
