// Flyweight pattern
// used in cases where we have a large number of objects that have the same properties
// useful way to conserve memory when we're creating a large number of similar objects.

// example of flyweight pattern is a game where we have a large number of bullets on the screen
// each bullet has the same properties , such as position , speed , and direction
// we can use flyweight pattern to conserve memory by creating a single bullet object and reusing it for each bullet on the screen , instead of creating a new object for each bullet


class Bullet {
    constructor(speed, direction) {
        this.speed = speed;
        this.direction = direction;
    }
}

class BulletFactory {
    constructor() {
        this.bullets = [];
    }

    create(speed, direction) {
        let existingBullet = this.getExistingBullet(speed, direction);
        if (existingBullet) {
            return existingBullet;
        }

        const newBullet = new Bullet(speed, direction);
        this.bullets.push(newBullet);
        return newBullet;
    }

    getExistingBullet(speed, direction) {
        return this.bullets.find(bullet => bullet.speed === speed && bullet.direction === direction); // find the first bullet that has the same speed and direction as the one we're trying to create
    }
}
// save a lot of memory by reusing the same bullet object for each bullet on the screen
function test() {
    const factory = new BulletFactory();

    const bullet1 = factory.create(10, 'left');
    const bullet2 = factory.create(10, 'left');
    const bullet3 = factory.create(10, 'right');
    const bullet4 = factory.create(10, 'right');
    const bullet5 = factory.create(20, 'left');
    const bullet6 = factory.create(20, 'left');
    const bullet7 = factory.create(20, 'right');
    const bullet8 = factory.create(20, 'right');

    console.log(bullet1 === bullet2); // true
    console.log(bullet3 === bullet4); // true
    console.log(bullet5 === bullet6); // true
    console.log(bullet7 === bullet8); // true

    console.log(factory.bullets); // false
}

// test();


class Book {
    constructor(title, author, genre, pageCount, publisherID, ISBN) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.pageCount = pageCount;
        this.publisherID = publisherID;
        this.ISBN = ISBN;
    }
}


class Library {
    constructor() {
        this.existingBooks = {};
        this.bookID = 1;
    }

    createBook(title, author, genre, pageCount, publisherID, ISBN) {
        // check to see if a book with the same ISBN already exists
        let existingBook = this.existingBooks[ISBN];
        if (existingBook) {
            return existingBook;
        } else {
            // if not , create a new instance of a book and store it
            const book = new Book(title, author, genre, pageCount, publisherID, ISBN);
            this.existingBooks[ISBN] = book;
            return book;
        }
    }
}


function test2() {
    const library = new Library();

    const book1 = library.createBook('book1', 'author1', 'genre1', 100, 1, 123456789);
    const book2 = library.createBook('book2', 'author2', 'genre2', 200, 2, 987654321);
    const book3 = library.createBook('book3', 'author3', 'genre3', 300, 3, 123456789);
    const book4 = library.createBook('book4', 'author4', 'genre4', 400, 4, 987654321);
    const book5 = library.createBook('book5', 'author5', 'genre5', 500, 5, 123456789);
    const book6 = library.createBook('book6', 'author6', 'genre6', 600, 6, 987654321);
    const book7 = library.createBook('book7', 'author7', 'genre7', 700, 7, 123456789);
    const book8 = library.createBook('book8', 'author8', 'genre8', 800, 8, 987654321);

    console.log(book1 === book3); // true
    console.log(book2 === book4); // true
    console.log(book5 === book7); // true
    console.log(book6 === book8); // true

    console.log(library.existingBooks); // false
}

test2();