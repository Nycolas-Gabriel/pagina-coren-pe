document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll("li[data-url]");
    listItems.forEach(item => {
        item.addEventListener("click", () => {
            window.open(item.getAttribute("data-url"), "_blank");
        });
    });
});
