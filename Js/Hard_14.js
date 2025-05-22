"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const filterInput = document.getElementById("filterInput");
    const items = document.querySelectorAll("#itemList li");

    filterInput.addEventListener("input", function () {
        const searchTerm = filterInput.value.toLowerCase().trim();

        let matches = 0;

        items.forEach(function (item) {
            const text = item.textContent.toLowerCase();
            const isVisible = text.includes(searchTerm);
            item.style.display = isVisible ? "" : "none";
            if (isVisible) matches++;
        });

        console.log(`Filtered list with: "${searchTerm}" (${matches} match${matches !== 1 ? "es" : ""})`);
    });
});