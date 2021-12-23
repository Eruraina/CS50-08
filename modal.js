const booksContainer = document.querySelector('.books-container');

booksContainer.addEventListener('click', e => {
    // console.log(e);

    const modalToggle = e.target.closest('.card__link');

    if (!modalToggle) {
        return;
    }
    // console.log(modalToggle);
 
    const modal = modalToggle.parentNode.nextElementSibling;
    const closeBtn = modal.querySelector('.card-modal__close');
    const modalLink = modal.querySelector('.card-modal__link');
    // console.log(modal);

    modal.style.display = "block";

    closeBtn.addEventListener('click', e => {
        e.preventDefault();
        modal.style.display = "none";
    });
});
