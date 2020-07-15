//funzione per mostrare il bottone di invio
function showButtonSend() {
  $('#txt-form').keydown(function(){
    $('.send-btn .enter').removeClass('hide');
    $('.send-btn .record').addClass('hide');
  });
}

//funzione per invio mex utente
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

//funzione per invio messaggio interlocutore
function showSpeakerMex() {
  setTimeout(function () {
    var template = $('#his-mex > div').clone();
    var target = $('.speaker-side');
    template.find('#mex-time').text(getActualHour());
    target.append(template);

  }, 1000);
  // var speakerMex = $('#message-text-speaker');
}

//funzione per mostrare le opzioni del messaggio
function showOptionMex() {
  $(document).on('click', '.fa-chevron-down', function() {
    $(this).find('.option').toggleClass('hide');
  });
};



//funzione per orario messaggio
function getActualHour() {
  var date = new Date();
  return date.getHours() + ':' + date.getMinutes();
}

//funzione per ricerca contatti
function showSearchContacts() {
  var target = $('#search-bar');
  target.keyup(searchKeyup);
}
function searchKeyup() {
  var input = $(this);
  var txt = input.val();
  var contacts = $('.contact');
  contacts.each(function() {
    var contact = $(this);
    var name = contact.find('.name').text();
    if (name.toLowerCase().includes(txt.toLowerCase())) {
      contact.show();
    } else {
      contact.hide();
    }
  })
}












function init() {
  showButtonSend();
  showUserMex();
  showOptionMex();
  showSearchContacts()
};






$(document).ready(init);
