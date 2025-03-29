function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    // Store the mode in local storage so it persists
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Apply the stored theme on page load
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const highlightElement = document.getElementById("highlight");
    const nameText = "Conner.";
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
