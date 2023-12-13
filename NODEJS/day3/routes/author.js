const express = require('express')
const router = express.Router()
const {
    getAuthors,
    getAuthor,
    addAuthor,
    updateAuthor,
    deleteAuthor
} = require('../controllers/authorController')

// route untuk menampilkan data 
router.get('/', getAuthors)

// route untuk mengirim data    
router.post('/', addAuthor)

//router untuk menampilkan data berdasarkan id buku 
router.get('/:id', getAuthor)

// route untuk memperbarui / update data
router.put('/:id', updateAuthor)

// route untuk menghapus data
router.delete('/:id',deleteAuthor)

module.exports = router