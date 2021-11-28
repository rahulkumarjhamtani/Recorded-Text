var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

var Textbox = $('#textbox');

var Content = '';

recognition.continuous = true;

recognition.onresult = function(event) {

  var current = event.resultIndex;

  var transcript = event.results[current][0].transcript;
 
    Content += transcript;
    Textbox.val(Content);
  
};

recognition.onstart = function() { 
    console.log("Started");
}

recognition.onspeechend = function() {
    console.log("Stopped");
}

recognition.onerror = function(event) {
  if(event.error == 'no-speech') {
    console.log("Try Again");
  }
}

$('#start-btn').on('click', function(e) {
  if (Content.length) {
    Content += ' ';
  }
  recognition.start();
});


Textbox.on('input', function() {
    Content = $(this).val();
})