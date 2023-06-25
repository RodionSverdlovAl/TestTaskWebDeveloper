function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    document.addEventListener("click", outsideClick);
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    document.removeEventListener("click", outsideClick);
}

function outsideClick(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        closeModal();
    }
}