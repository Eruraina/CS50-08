fetch('quotes.json')
    .then(res => res.text())
    .then(data => {
        const json = JSON.parse(data);
        console.log(json);

        // Iterating rows
        json.forEach((row) => {

            const quotesContainer = document.querySelector('.quotes-container');

            let quote = `
                        <div class="quote">
                            <p class="quote__text">"${row.quote}"</p>
                            <p class="quote__speaker">${row.speaker}</p>
                            <p class="quote__source">${row.show}</p>
                        </div>
            `;

            quotesContainer.insertAdjacentHTML("beforeend", quote);
        });
    });