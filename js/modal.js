document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector(".modal");
    const centeredModal = document.querySelector(".centered-modal");
    const openModalBtn = document.querySelector("#openModal");
    const openCenteredModalBtn = document.querySelector("#openCenteredModal");
    const closeButtons = document.querySelectorAll(".close");

    function openModal(modalElement) {
        modalElement.style.display = "flex";
        setTimeout(() => {
            modalElement.classList.add("show"); // Add class for animation
        }, 10);
    }

    function closeModal(modalElement) {
        modalElement.classList.remove("show");
        setTimeout(() => {
            modalElement.style.display = "none";
        }, 300); // Wait for animation to finish
    }

    openModalBtn.addEventListener("click", () => openModal(modal));
    openCenteredModalBtn.addEventListener("click", () => openModal(centeredModal));

    closeButtons.forEach((btn) => {
        btn.addEventListener("click", function () {
            closeModal(this.closest(".modal, .centered-modal"));
        });
    });

    // Close modal on overlay click
    window.addEventListener("click", function (event) {
        if (event.target === modal) closeModal(modal);
        if (event.target === centeredModal) closeModal(centeredModal);
    });
});
