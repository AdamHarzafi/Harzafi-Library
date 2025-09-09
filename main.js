// --- DATABASE DEI LIBRI ---
const books = [
    {
        id: 'il-codice-anima',
        title: 'Matematica.in3passi',
        author: 'Massimo Bergamini e Graziella Barozzi',
        price: '7,25',
        coverImage: 'https://i.ibb.co/Wv9bsP4L/61y-WFZr-AX7-L.jpg" ',
        description: 'Usato, come nuovo. Non ci sono altri pezzi.',
        isbn: '978-88-08-72093-1',
        publisher: 'Zanichelli',
        year: '2022-2025'
    },
    {
        id: "L'amore, l'attesa e altro ancora (Tomo B)",
        title: "L'amore, l'attesa e altro ancora (Tomo B)",
        author: 'Vincenzo Jacomuzzi, Matteo Leonardi, Barbara Franco, Maria Elisabetta Dulbecco',
        price: '0,00 Prezzo non disponibile (Trattabile)',
        coverImage: 'https://i.ibb.co/gZJzKdnQ/9788805079568.jpg"',
        description: 'trattato bene, come nuovo. Singolo',
        isbn: '9788805079568',
        publisher: 'SEI',
        year: '2022 (prima edizione)'
    },
    {
        id: "L'amore, l'attesa e altro ancora (I testi e la scrittura)",
        title: "L'amore, l'attesa e altro ancora (I testi e la scrittura)",
        author: 'Vincenzo Jacomuzzi, Matteo Leonardi, Barbara Franco, Maria Elisabetta Dulbecco',
        price: '0,00 Prezzo non disponibile (Trattabile)',
        coverImage: 'https://i.ibb.co/gZJzKdnQ/9788805079568.jpg',
        description: 'Usato, come nuovo. Non ci sono altri pezzi.',
        isbn: '9788805079582',
        publisher: 'SEI',
        year: '2022 (prima edizione)'
    },
    {
        id: 'È tutto dire. Corso di grammatica. Italianofacile. Percorsi per BES-DSA e BES-L2.',
        title: 'È tutto dire. Corso di grammatica. Italianofacile. Percorsi per BES-DSA e BES-L2.',
        author: 'Anna Maria Mandelli, Anna Degani, Pierluca Merlisenna',
        price: '3,50',
        coverImage: 'https://i.ibb.co/wbPKv33/9788805078707-0-350-0-75.jpg',
        description: 'Usato, come nuovo. Non ci sono altri pezzi.',
        isbn: '9788805078707',
        publisher: 'SEI',
        year: '2021'
    },
    {
        id: 'Graph. Autocad.',
        title: 'Graph. Autocad.',
        author: 'Gian Marco Dellavecchia',
        price: '6,51',
        coverImage: 'https://i.ibb.co/zV8H9pSd/9788805076710-0-500-0-75.jpg',
        description: 'Usato, come nuovo. Non ci sono altri pezzi.',
        isbn: '9788805076710',
        publisher: 'SEI',
        year: '2018'
    },
    {
        id: 'È tutto dire. Corso di grammatica',
        title: 'È tutto dire. Corso di grammatica',
        author: 'Anna Maria Mandelli, Anna Degani, Pierluca Merlisenna',
        price: '12,00',
        coverImage: 'https://i.ibb.co/B2kCnb20/TUTTO-DIRE.png',
        description: 'Usato, come nuovo. Non ci sono altri pezzi.',
        isbn: '9788805078691',
        publisher: 'SEI',
        year: '2021'
    }
];

// Funzione che si esegue al caricamento del documento
document.addEventListener('DOMContentLoaded', () => {
    
    // MODIFICA: Inizializza le animazioni di AOS su tutte le pagine
    AOS.init({
        duration: 800,
        easing: 'ease-in-out-cubic',
        once: true,
    });

    // Controlla su quale pagina ci troviamo per eseguire codice specifico
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
