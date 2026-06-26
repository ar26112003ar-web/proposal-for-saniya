const intro = document.getElementById("intro");
const proposal = document.getElementById("proposal");
const finalPage = document.getElementById("final");

const countdown = document.getElementById("countdown");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const message = document.getElementById("message");

let number = 3;

const timer = setInterval(() => {

number--;

if(number>0){

countdown.innerHTML=number;

}else{

clearInterval(timer);

intro.classList.add("hidden");

setTimeout(()=>{

proposal.classList.remove("hidden");

},600);

}

},1000);

const texts = [
"Are you sure? 🥺",
"Please don't say no... 💖",
"My heart is waiting for your YES ❤️",
"You are too special for me ✨",
"Please think once more 🌹",
"I'll never stop trying 💕",
"You make my world beautiful 💝",
"Almost there... 🥹",
"One last chance 😍",
"I knew you'd choose YES ❤️"
];

let tries = 0;

function moveButton(){

    tries++;

    noBtn.innerHTML = texts[Math.min(tries - 1, texts.length - 1)];

    const x = Math.random() * (window.innerWidth - 170);
    const y = Math.random() * (window.innerHeight - 90);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    if (tries >= texts.length){

    noBtn.innerHTML = "YES 💖";
    noBtn.style.background = "#ff2d55";
    noBtn.style.color = "white";
    noBtn.onclick = acceptLove;
noBtn.removeEventListener("click", moveButton);
    return;
}
}

noBtn.addEventListener("click",moveButton);



yesBtn.addEventListener("click",acceptLove);



function acceptLove(){

proposal.classList.add("hidden");

setTimeout(()=>{

finalPage.classList.remove("hidden");

},500);

startHearts();

}



function startHearts(){

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=["❤️","💖","💕","💗","🌹","✨"][Math.floor(Math.random()*6)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*30)+"px";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

},250);

}
