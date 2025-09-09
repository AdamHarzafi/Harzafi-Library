// --- DATABASE DEI LIBRI ---
// MODIFICA: Ho sostituito "pages" con "isbn" e inserito i nuovi valori.
const books = [
    {
        id: 'il-codice-anima',
        title: 'Matematica.in3passi',
        author: 'Massimo Bergamini e Graziella Barozzi',
        price: '7,25',
        coverImage: 'https://i.ibb.co/Wv9bsP4L/61y-WFZr-AX7-L.jpg" ',
        description: 'Usato, come nuovo. Non ci sono altri pezzi.',
        isbn: '978-88-08-72093-1', // Modificato
        publisher: 'Zanichelli',
        year: '2022-2025'
    },
    {
        id: 'cecita',
        title: 'Cecità',
        author: 'José Saramago',
        price: '15,00',
        coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800',
        description: 'Un\'epidemia di cecità bianca si diffonde in una città senza nome, mettendo a nudo la fragilità della civiltà e la vera natura dell\'essere umano. Un romanzo allegorico potente e indimenticabile, vincitore del Premio Nobel per la Letteratura.',
        isbn: '978-88-078-8988-00', // Modificato
        publisher: 'Feltrinelli',
        year: '1995'
    },
    {
        id: 'larte-della-gioia',
        title: 'L\'Arte della Gioia',
        author: 'Goliarda Sapienza',
        price: '22,00',
        coverImage: 'https://images.unsplash.com/photo-1543002588-b9b6366941af?q=80&w=800',
        description: 'La storia epica e scandalosa di Modesta, una donna siciliana nata all\'inizio del XX secolo, che attraversa la storia d\'Italia con una sete insaziabile di libertà e conoscenza. Un romanzo postumo diventato un caso letterario mondiale.',
        isbn: '978-88-062-1872-00', // Modificato
        publisher: 'Einaudi',
        year: '1998'
    },
    {
        id: 'factfulness',
        title: 'Factfulness',
        author: 'Hans Rosling',
        price: '20,00',
        coverImage: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?q=80&w=800',
        description: 'Dieci istinti che ci portano a interpretare il mondo in modo sbagliato e perché le cose vanno meglio di come pensiamo. Hans Rosling, con dati e aneddoti illuminanti, ci offre gli strumenti per comprendere il mondo in modo più obiettivo e ottimista.',
        isbn: '978-88-171-0857-00', // Modificato
        publisher: 'Rizzoli',
        year: '2018'
    },
    {
        id: 'la-fisica-che-ci-piace',
        title: 'La fisica che ci piace',
        author: 'Vincenzo Schettini',
        price: '17,90',
        coverImage: 'https://images.unsplash.com/photo-1524578271613-d550eace3c92?q=80&w=800',
        description: 'Un viaggio sorprendente e divertente nel mondo della fisica, spiegato in modo semplice e accessibile a tutti. Dal Big Bang ai buchi neri, Vincenzo Schettini rende la scienza una materia affascinante e alla portata di chiunque.',
        isbn: '978-88-918-3422-00', // Modificato
        publisher: 'Mondadori Electa',
        year: '2022'
    },
    {
        id: 'bambine-ribelli',
        title: 'Storie della buonanotte per bambine ribelli',
        author: 'Favilli & Cavallo',
        price: '19,00',
        coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800',
        description: 'Cento biografie di donne straordinarie che hanno cambiato il mondo, da scienziate a artiste, da attiviste a regine. Un libro splendidamente illustrato che ispira le bambine (e i bambini) a sognare in grande e a non arrendersi mai.',
        isbn: '978-88-046-7798-00', // Modificato
        publisher: 'Mondadori',
        year: '2016'
    }
];

// Funzione che si esegue al caricamento del documento
document.addEventListener('DOMContentLoaded', () => {
    
    // Inizializza le animazioni di AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out-cubic',
        once: true,
    });

    // Controlla su quale pagina ci troviamo
    const pageId = document.body.id;

    if (pageId === 'page-home') {
        renderBookGrid();
    } else if (pageId === 'page-libro') {
        renderBookDetails();
    }
});


// Funzione per mostrare i libri nella griglia della home page
function renderBookGrid() {
    const grid = document.getElementById('book-grid');
    if (!grid) return;

    grid.innerHTML = books.map((book, index) => `
        <a href="libro.html?id=${book.id}" class="book-card" data-aos="fade-up" data-aos-delay="${(index % 3) * 100}">
            <div class="book-cover-wrapper">
                <img class="book-cover" src="${book.coverImage}" alt="Copertina di ${book.title}">
            </div>
            <div class="book-info">
                <h4 class="book-title">${book.title}</h4>
                <p class="book-author">${book.author}</p>
                <p class="book-price">€ ${book.price}</p>
            </div>
        </a>
    `).join('');
}


// Funzione per mostrare i dettagli di un singolo libro
function renderBookDetails() {
    const contentArea = document.getElementById('book-detail-content');
    if (!contentArea) return;

    const params = new URLSearchParams(window.location.search);
    const bookId = params.get('id');
    const book = books.find(b => b.id === bookId);

    if (!book) {
        contentArea.innerHTML = `
            <div class="book-not-found">
                <h2>Libro non trovato</h2>
                <p>Il libro che stai cercando non è presente nella nostra collezione o il link potrebbe essere errato.</p>
            </div>
        `;
        return;
    }

    document.title = `${book.title} - Harzafi Library`;

    contentArea.innerHTML = `
        <div class="book-detail-grid">
            <div class="book-detail-cover" data-aos="zoom-in">
                <img src="${book.coverImage}" alt="Copertina di ${book.title}">
            </div>
            <div class="book-detail-info" data-aos="fade-left">
                <h2 class="title">${book.title}</h2>
                <p class="author">${book.author}</p>
                <p class="price">€ ${book.price}</p>

                <div class="book-meta">
                    <div class="meta-item">
                        <span>Editore</span>
                        <strong>${book.publisher}</strong>
                    </div>
                    <div class="meta-item">
                        <span>Anno</span>
                        <strong>${book.year}</strong>
                    </div>
                    <div class="meta-item">
                        <span>ISBN</span>
                        <strong>${book.isbn}</strong>
                    </div>
                </div>
            </div>
        </div>
        <div class="description" data-aos="fade-up" data-aos-delay="200">
            <h3>Descrizione</h3>
            <p>${book.description}</p>
        </div>
    `;
}