// var SpeechRecognition = window.webkitSpeechRecognition;
//     var recognition = new SpeechRecognition();
//     var content = '';
//     var textbox = document.getElementById("textbox");
//     var btn = document.getElementById("btn");

//     recognition.continuous = true;

//     recognition.onstart = function() {
//         console.log("Started");
//     }    
//     recognition.onspeechend = function() {
//         console.log("Stopped");
//     }    
//     recognition.onerror = function() {
//         console.log("Try Again");
//     }   

//     recognition.onresult = function(e) {
//         var current = e.resultIndex;
//         var transcript = e.results[current][0].transcript;

//         content += transcript;

//         textbox.val(content);
//     }
//     btn.onclick = function(e) {
//         if(content.length)
//         {
//             content+='';
//         }
//         recognition.start();
//     }


// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyCvu-xK3pX6sS4pSDVvkq88u15DqX4NjRI",
    authDomain: "recordedtext.firebaseapp.com",
    projectId: "recordedtext",
    storageBucket: "recordedtext.appspot.com",
    messagingSenderId: "151375728909",
    appId: "1:151375728909:web:30873af3430c16607d6044"
  };

  firebase.initializeApp(firebaseConfig);


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

function data()
{
    var text = document.getElementById('textbox').value;
}

$('#insert-btn').on('click', function() {
    data();
    firebase.database().ref('Text/').set({
      RecordedText:text
    });
  });