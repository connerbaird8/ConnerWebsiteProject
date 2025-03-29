function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

document.addEventListener("DOMContentLoaded", function () {
    const nameElement = document.getElementById("name");
    const highlightElement = document.getElementById("highlight");
    const cursorElement = document.querySelector(".cursor");

    const fullText = "Hi, My Name is ";
    const nameText = "Conner";
    let index = 0;

    function typeEffect() {
        if (index < fullText.length) {
            nameElement.innerHTML = fullText.slice(0, index + 1) + '<span id="highlight"></span><span class="cursor">|</span>';
            index++;
            setTimeout(typeEffect, 100);
        } else {
            highlightElement.textContent = nameText;
        }
    }

    typeEffect();
});
