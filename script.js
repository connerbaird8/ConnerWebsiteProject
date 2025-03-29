function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

document.addEventListener("DOMContentLoaded", function () {
    const nameElement = document.getElementById("name");
    const fullText = "Hi, My Name is ";
    const nameText = '<span id="highlight">Conner</span>'; // Ensure Conner is inside span
    let index = 0;

    function typeEffect() {
        if (index < fullText.length) {
            nameElement.innerHTML = fullText.slice(0, index + 1) + '<span class="cursor">|</span>';
            index++;
            setTimeout(typeEffect, 100);
        } else {
            nameElement.innerHTML = fullText + nameText + '<span class="cursor">|</span>';
        }
    }

    typeEffect();
});
