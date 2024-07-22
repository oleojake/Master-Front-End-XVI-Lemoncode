console.log("************** DELIVERABLE 04 **************");
console.log("** 4. Read Books **");

interface Book {
	title: string;
	isRead: boolean;
}

const isBookRead = (books: Book[], titleToSearch: string): boolean => {
	const book = books.find((book: Book): boolean => book.title === titleToSearch);
	return book
		? book.isRead
		: false
}

// Ejemplo:
var books: Book[] = [
	{ title: "Harry Potter y la piedra filosofal", isRead: true },
	{ title: "Canción de hielo y fuego", isRead: false },
	{ title: "Devastación", isRead: true },
];

console.log(`Devastación: ${isBookRead(books, "Devastación")}`); // true
console.log(`Canción de hielo y fuego: ${isBookRead(books, "Canción de hielo y fuego")}`); // false
console.log(`Los Pilares de la Tierra: ${isBookRead(books, "Los Pilares de la Tierra")}`); // false