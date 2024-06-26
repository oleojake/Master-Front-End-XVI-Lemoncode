console.log("************** DELIVERABLE 04 **************");
console.log("** 4. Read Books **");
function isBookRead(books, titleToSearch) {
    var book = books.find(function (book) { return book.title === titleToSearch; });
    return book
        ? book.isRead
        : false;
}
// Ejemplo:
var books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];
console.log("Devastaci\u00F3n: ".concat(isBookRead(books, "Devastación"))); // true
console.log("Canci\u00F3n de hielo y fuego: ".concat(isBookRead(books, "Canción de hielo y fuego"))); // false
console.log("Los Pilares de la Tierra: ".concat(isBookRead(books, "Los Pilares de la Tierra"))); // false
