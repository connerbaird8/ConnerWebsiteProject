function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

document.addEventListener("DOMContentLoaded", function () {
    const highlightElement = document.getElementById("highlight");
    const nameText = "Conner";
    let index = 0;

    function typeEffect() {
        if (index < nameText.length) {
            highlightElement.textContent += nameText[index];
            index++;
            setTimeout(typeEffect, 150); // Adjust speed as needed
        }
    }

    typeEffect();
});
