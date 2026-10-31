const express = require("express")
const app = express();
const PORT = 3000;

app.use(express.json())

let books = [
    { id: 1, title: 'Atomic Habits', author: 'James Clear' },
    { id: 2, title: 'Deep Work', author: 'Cal Newport' },
    { id: 3, title: 'The Power Habits', author: 'darwind' },
    { id: 4, title: '48 laws of power', author: 'rober greene' }
];

// GET DATA
app.get('/', (req, res) => {
    res.json(books)
})

// POST DATA
app.post('/books', (req, res) => {
    console.log("body messange : ", req.body)
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };
    books.push(newBook)
    res.status(201).json(newBook)

})

// PUT DATA (UPDATE)

app.put('/books/:id', (req, res) => {
    const book = books.find((b) => b.id == req.params.id)
    if (!book) return res.status(404).send("book is not found")
    book.title = req.body.title
    return res.json(book)
})

// DELETE
app.delete('/books/:id', (req, res) => {
    const id = Number(req.params.id)
    books = books.filter((b) => b.id !== id)
    res.send("Book  is deleted")
})

app.listen(PORT, () => {
    console.log(`The New Server Is Runing at http://localhost:${PORT}`);
})

