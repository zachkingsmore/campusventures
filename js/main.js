

function openModal(modalId) {
    const targetModal = document.getElementById(modalId);
    if (targetModal) {
        targetModal.classList.add("active");
        document.body.classList.add("modal-open");
    }
}

function closeModal() {
  const activeModal = document.querySelector(".modal-overlay.active");
  if (activeModal) {
    activeModal.classList.remove("active");
    document.body.classList.remove("modal-open");
  }
}

document.querySelectorAll("[data-close-modal]").forEach(function(closeBtn) {
  closeBtn.addEventListener("click", function(event) {
    event.preventDefault();
    closeModal();
  });
});

document.querySelectorAll("[data-open-modal]").forEach(function(trigger) {
   trigger.addEventListener("click", function(event) {
        event.preventDefault();
        const modalId = trigger.getAttribute("data-open-modal");
        openModal(modalId);
    });
});

document.addEventListener("keydown", function(e) {
   if (e.key === "Escape") {
        closeModal();
    }
});