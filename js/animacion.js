document.getElementById("search").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
        if (section.innerText.toLowerCase().includes(query)) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });
});



