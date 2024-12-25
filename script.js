let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
function speak(text){
    let text_speak= new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}
function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if (hours >= 0 && hours < 12) {
        speak("Good morning Sir");
    } else if (hours >= 12 && hours < 18) {
        speak("Good afternoon Sir");
    } else {
        speak("Good evening Sir");
    }
    
}
window.addEventListener('load',()=>{
    wishMe()
})
let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex;
    let transcript=event.results[currentIndex][0].transcript;
    content.innerText=transcript;
    takeCommand(transcript);
}
btn.addEventListener("click",()=>{
    recognition.start()
})
function takeCommand(message){
    if(message.includes("hello")||message.includes("hey")){
        speak("hello sir,what can i help you")
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistant sam created by sargam maam")
    }
    else if(message.includes("what is your name")){
        speak("my name is sam , i am created by sargam jain")
    }
    else if(message.includes("open YouTube")){
        speak("opening youtube")
        window.open("https://youtube.com/","_blank")
    }
    else if(message.includes("open Instagram")){
        speak("opening instagram")
        window.open("https://instagram.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google")
        window.open("https://google.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook")
        window.open("https://facebook.com/","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator")
        window.open("https://www.calculator.net")
    }
    else if(message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }

    else if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
            alert("Speech Recognition is not supported in this browser.");
    }
    else{
    let finalText = "this is what I found on the internet regarding " + message.replace("sam", "").replace("sham", "");
    speak(finalText)
    window.open(`https://www.google.com/search?q=${message.replace("sam", "")}`,"_blank")
    }
}

