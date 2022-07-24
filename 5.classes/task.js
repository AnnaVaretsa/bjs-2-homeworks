class PrintEditionItem {
    type = null;
    constructor (name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
    } 

    fix() {
        this.state *= 1.5; 
    }

    set state(newState) {
        if (newState <= 0) {
            this._state = 0;
        }
        else if (newState >= 100) {
            this._state = 100;
        }
        else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    type = "magazine";
    constructor (name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
    }
}

class Book extends PrintEditionItem {
    type = "book";
    constructor (author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.author = author;
    }
}

class NovelBook extends Book {
    type = "novel";
    constructor (author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
    }
}

class FantasticBook extends Book {
    type = "fantastic";
    constructor (author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
    }
}

class DetectiveBook extends Book {
    type = "detective";
    constructor (author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(object) {
        if (object.state >= 30) {
            this.books.push(object);
        } else {
        return;
        }
    }

    findBookBy(type, value) {
        let findBook = this.books.find(item => item[type] === value);
        if(findBook !== undefined) {
        return findBook;
        } else {
        return null;
        }
    }

    giveBookByName(bookName) {
        let indexBook = this.books.findIndex(item => item.name === bookName);
        if(indexBook !== -1) {
            let giveBook = this.books[indexBook];
            this.books.splice(indexBook, 1);
        return giveBook;
        } else {
        return null;
        }
    }
}

class Student {
    constructor (name) {
        this.name = name;
    }
    
    setSubject(subjectName) {
        this.subject = subjectName;
    }

    addMark(mark, subjectName) {
        let obj = {
            "mark": mark,
            "subject": subjectName
        }
        if (mark > 0 && mark < 6){
            if (this.marks === undefined) {
                var arr = [];
                arr.unshift(obj);
                this.marks = arr;
              }
              else {
                this.marks.splice(this.marks.length, 0, obj);
              }
        }
        else {
           console.log("Ошибка, оценка должна быть числом от 1 до 5"); 
        }
    }

    getAverageBySubject(value) {
        let mrks= [];
        let index = this.marks.findIndex(item => item.subject === value);
        if (index !== -1 ) {
            for (let i = 0; i < this.marks.length; i++) {
                mrks.push(this.marks[i].mark);
            }
           let avg = mrks.reduce((a, b) => a + b, 0) / mrks.length;
           return avg;  
        }
        else {
            console.log("Такого предмета не найдено!");
        }
    }
    
    getAverage() {
        let mrks= [];
        for (let i = 0; i < this.marks.length; i++) {
            mrks.push(this.marks[i].mark);
        }
        let avg = mrks.reduce((a, b) => a + b, 0) / mrks.length;
        return avg;
    }

    exclude(reason) {
        delete this.subject;
        delete this.marks;
        this.excluded = reason;
    }
}
