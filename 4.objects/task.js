function Student (name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }

  Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
  }

  Student.prototype.addMark = function (mark) {
    if (this.marks === undefined) {
      var arr = [];
      arr.unshift(mark);
      this.marks = arr;
    } 
    else {
      this.marks.splice(this.marks.length, 0, mark);
    }
  }

  Student.prototype.addMarks = function (...theMarks ) {
    var arr = [];
    for (const arg of theMarks) {
      arr.push(arg);
    }
    this.marks = arr;
    }

  Student.prototype.getAverage = function () {
    let avg = this.marks.reduce((a, b) => a + b, 0) / this.marks.length;
    return avg;
  }

  Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }