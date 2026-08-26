function nextScreen(screenNumber) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(`screen-${screenNumber}`).classList.add('active');
}

// Makes the "NO" button run away when hovered or tapped
function moveButton() {
    const noBtn = document.getElementById('no-btn');
    const x = Math.random() * 150 - 75;
    const y = Math.random() * 100 - 50;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// Opens different surprises when clicking gift boxes
function openGift(type) {
    const contentDiv = document.getElementById('gift-content');
    
    if (type === 'award') {
    contentDiv.innerHTML = `
        <h3>HAPPY RAKSHABANDHAN</h3>
        <p class="award-text">
            Dear Yana,<br><br>
            Happy Raksha Bandhan to the most amazing sister! ❤️ You are not just my sister, but also my best friend, my partner in all the fun, and the person who makes every moment more special. We may fight, tease each other, and annoy each other sometimes, but at the end of the day, I'm always grateful to have you in my life. I hope you always stay happy, keep smiling, and achieve everything you dream of. No matter what happens, I'll always be there for you. Happy Raksha Bandhan, Yana! Love you! 🎀
        </p>
    `;

    } else if (type === 'memories') {
        contentDiv.innerHTML = `<h3>📸 Memories 📸</h3><p>[Insert your cute childhood photos here]</p>`;
    } else if (type === 'letter') {
        contentDiv.innerHTML = `<h3>💌 A Note For You 💌</h3><p>Thank you for always having my back. Love you!</p>`;
    }
    
    nextScreen(3);
}