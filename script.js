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



const texts=[

"Are you sure? 🥺",

"Think once again ❤️",

"My heart is getting nervous 💓",

"You clicked the wrong button 😂",

"I know you don't mean No 😌",

"Please give me one chance 🌹",

"Don't break my heart 💔",

"You look even cuter trying 😍",

"Still saying No? 😅",

"I'll keep asking ❤️",

"You can't escape love 😜",

"My heart already chose you 💖",

"Almost there... 😊",

"One last chance 🥹",

"Your smile deserves a Yes ❤️"

];

let tries=0;

function moveButton(){

tries++;

message.innerHTML=texts[Math.min(tries-1,texts.length-1)];

const x=Math.random()*(window.innerWidth-150);

const y=Math.random()*(window.innerHeight-80);

noBtn.style.position="fixed";
noBtn.style.left=x+"px";
noBtn.style.top=y+"px";
    if(tries>=9){

noBtn.innerHTML="YES ❤️";

noBtn.style.background="#ff2d55";
noBtn.style.color="white";

noBtn.onclick=acceptLove;

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
