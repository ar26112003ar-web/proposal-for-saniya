const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

const messages = [
"Are you sure? 🥺",
"Please think again ❤️",
"You clicked the wrong button 😅",
"Nice try 😂",
"No isn't an option 🤭",
"My heart will break 💔",
"Only YES works 😎",
"Don't run from love 💖",
"Try catching me 😜",
"I knew you'd try that 😂",
"Love always wins ❤️",
"You can't say No 😁",
"Give your heart a chance 💞",
"Click YES instead 😍",
"Still trying? 😂"
];

function moveButton() {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 80);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    message.innerText =
        messages[Math.floor(Math.random() * messages.length)];
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

yesBtn.addEventListener("click", () => {
    document.body.innerHTML = `
    <div style="
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        height:100vh;
        background:linear-gradient(135deg,#ff758c,#ff7eb3,#ffd86f);
        color:white;
        font-family:Arial;
        text-align:center;
        padding:20px;
    ">
        <h1 style="font-size:55px;">❤️ Yay! ❤️</h1>
        <h2>Thank You Saniya ✨</h2>
        <p style="font-size:24px;margin-top:20px;">
        You just made Hamdu the happiest person alive! 💖
        </p>
        <div style="font-size:60px;margin-top:30px;">
        ❤️✨🌹💖🥰💞
        </div>
    </div>
    `;
});
