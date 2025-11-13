
let library = [
    { id: "b1", title: "The Pragmatic Programmer", author: "Andrew Hunt", genre: "Programming", available: true },
    { id: "b2", title: "Clean Code", author: "Robert C. Martin", genre: "Programming", available: false },
    { id: "b3", title: "The Mythical Man-Month", author: "Frederick P. Brooks Jr.", genre: "Software Engineering", available: true },
    { id: "b4", title: "Design Patterns", author: "Erich Gamma", genre: "Software Engineering", available: true },
    { id: "b5", title: "Introduction to Algorithms", author: "Thomas H. Cormen", genre: "Algorithms", available: false },
    { id: "b6", title: "Effective Java", author: "Joshua Bloch", genre: "Programming", available: true },
    { id: "b7", title: "Clean Architecture", author: "Robert C. Martin", genre: "Software Engineering", available: false },
    { id: "b8", title: "The Clean Coder", author: "Robert C. Martin", genre: "Programming", available: true },
    { id: "b9", title: "To Kill a MockingBird", author: "Harper Lee", genre: "Fiction/Classic Literature", available: true},
    { id: "b10", title: "Pride and Prejudice", author: " Jane Austen", genre: "Romance/Classic Fiction", available: "true"}
  
  ];

  function countTotalBooks(collection) {
    return collection.length;
  }
 
  function filterByGenre(collection, genre) {
    if (!genre) return collection.slice();
    return collection.filter(book => book.genre.toLowerCase() === genre.toLowerCase());
  }

  function mostFrequentAuthor(collection) {
    if (collection.length === 0) return null;
  
    const freq = {};
    let maxCount = 0;
    let mostFrequent = null;
  
    for (const book of collection) {
      const author = book.author;
      freq[author] = (freq[author] || 0) + 1;
      if (freq[author] > maxCount) {
        maxCount = freq[author];
        mostFrequent = author;
      }
    }
  
    return mostFrequent;
  }

  function groupByAvailability(collection) {
    const groups = {
      available: [],
      borrowed: []
    };
  
    for (const book of collection) {
      if (book.available) groups.available.push(book);
      else groups.borrowed.push(book);
    }
  
    return groups;
  }
  
 