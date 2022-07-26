class PrintEditionItem {
    constructor (name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    } 

    fix() {
        this.state *= 1.5; 
    }

    set state(newState) {
        this._state = newState <= 0 ? 0 : newState >= 100 ? 100 : newState;
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    type = "novel";
    constructor (author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(object) {
        object.state > 30 && this.books.push(object);
    }

    findBookBy(type, value) {
        return this.books.find((item) => item[type] === value) || null;
    }

    giveBookByName(bookName) {
        let indexBook = this.books.findIndex(item => item.name === bookName);
        return indexBook < 0 ? null : this.books.splice(indexBook, 1)[0];
    }
}

class Student {
    constructor (name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.ratingSet = [];
        this.excluded = false;
    }

    addMark(rating, subjectName) {
        let findObj = this.ratingSet.find((item) => item.subject === subjectName);
        rating = parseInt(rating, 10);
    
        if (isNaN(rating) || rating < 1 || rating > 5) {
          console.error('Ошибка, оценка должна быть числом от 1 до 5');
          return false;
        }
    
        if (!this.ratingSet.length || !findObj) {
          this.ratingSet.push({ marks: [rating], subject: subjectName });
        } else if (findObj) {
          findObj.marks.push(rating);
        }
        return true;
      }

    addMarks(ratings, subjectName) {
        let findObj = this.ratingSet.find((item) => item.subject === subjectName);
        let isValid =
          Array.isArray(ratings) &&
          !ratings.some((item) => isNaN(parseInt(item)) || item < 1 || item > 5);
    
        if (!isValid) {
          console.error('Ошибка, оценки в массиве должны быть числом от 1 до 5');
          return false;
        }
    
        if (!this.ratingSet.length || !findObj) {
          this.ratingSet.push({ marks: [...ratings], subject: subjectName });
        } else if (findObj) {
          findObj.marks.push(...ratings);
        }
        return true;
      }

      getAverageBySubject(subjectName) {
        let findObj = this.ratingSet.find((item) => item.subject === subjectName);
        if (!findObj) {
          console.error(`Несуществующий предмет ${subjectName}`);
          return false;
        }
        return findObj.marks.reduce((acc, item) => (acc += item)) / findObj.marks.length;
      }
    
      getAverage() {
        if (!this.ratingSet.length) {
          console.error('Вы еще не изучаете ни один предмет');
          return false;
        }
        return (
          this.ratingSet.reduce((acc, item) => {
            return (acc += this.getAverageBySubject(item.subject));
          }, 0) / this.ratingSet.length
        );
      }
    
      exclude(reason) {
        if (excluded) {
          console.error(`Студент уже отчислен. Причина ${this.excluded}`);
        }
        this.excluded = reason;
        this.ratingSet = [];
        return true;
      }
}
