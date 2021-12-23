fetch('books.json')
.then(res => res.text())
.then(data => {
    const json = JSON.parse(data);
    console.log(json);
    
    // Iterating rows
    json.forEach((row) => {

        const booksContainer = document.querySelector('.books-container');
        let card = `
                    <figure class="card">
                        <img src="${row.image}" alt="Book cover">
                        <figcaption class="card__info">
                            <h2 class="crad__title">${row.title}</h2>
                            <p class="card__subtitle">${row.author}</p>
                            <button class="card__link">More info</button>
                        </figcaption>

                        <div class="card-modal">
                            <button class="card-modal__close">
                                <svg width="18px" height="18px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                    <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
                                </svg>
                            </button>
                            <div class="card-modal__header" style="background-image: url('${row.image}')">
                                <div class="card-modal__box">
                                    <a href="${row.link}" target="_blank" class="card-modal__link">Learn more</a>
                                </div>
                            </div>
                            <div class="card-modal__content">
                                <h2><span>title: </span>${row.title}</h2>
                                <p><span>author: </span>${row.author}</p>
                                <p><span>first published: </span>${row.year}</p>
                                <p><span>language: </span>Serbian</p>
                                <p><span>genres: </span>${row.genres}</p>
                                <p><span>summary: </span>${row.summary}</p>
                            </div>
                        </div>
                    </figure>
                    `;
        booksContainer.insertAdjacentHTML("beforeend", card);
    });
});

