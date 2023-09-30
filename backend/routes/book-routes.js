const express = require("express");
const router = express.Router();
const Book = require("../model/Book");

router.get("/", async (req, res) => {
  try {
    const books = await Book.find();

    if (books.length === 0) {
      return res.status(404).json({ error: "No books found" });
    }

    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
