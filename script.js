document.addEventListener("DOMContentLoaded", function () {
    let ol = document.getElementById("infi-list");

    // Function to add list items
    function addListItems(count) {
        for (let i = 0; i < count; i++) {
            let li = document.createElement("li");
            li.textContent = `Item ${ol.children.length + 1}`;
            ol.appendChild(li);
        }
    }

    // Event listener for infinite scrolling
    ol.addEventListener("scroll", function () {
        if (ol.scrollTop + ol.clientHeight >= ol.scrollHeight) {
            addListItems(2);
        }
    });
});
