var SpeechRecognition =window.webkitSpeechRecognition;

var Recognition = new SpeechRecognition();
function Clicked(){
    document.getElementById("TEXTOUTPUT").innerHTML="";
    Recognition.start();

}
Recognition.onresult=function(event){
    console.log(event);
    content =event.results[0][0].transcript;
    document.getElementById("TEXTOUTPUT").innerHTML= content;
    console.log(content);
    speak();
    

}
function speak(){
    synth= window.speechSynthesis;
    speakdata = document.getElementById("TEXTOUTPUT").innerHTML;
    utterThisNOW = new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterThisNOW);
    Webcam.attach(camera);

}
camera=document.getElementById("Webcamcontainer");
Webcam.set({
    width:360,
    height:290,
    image_format:"jpeg",
    jpeg_quality:100

});
