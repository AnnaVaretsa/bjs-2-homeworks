function parseCount(value) {
    let parseValue = Number.parseInt(value); 
    if (isNaN(parseValue)) {
        throw new Error("Невалидное значение");
    }
    console.log(parseValue);
    return parseValue;
}

function validateCount(value) {
    try {
        if (!isNaN(value)) {
            let val = parseCount(value);
            return val; 
        }
    }
    catch (error) { 
        console.log(error); 
    }     
}

class Triangle {
    checkValidity(a, b, c)
    {
        if (a + b <= c || a + c <= b || b + c <= a)
            return false;
        else
            return true;
    } 

    constructor (a, b, c) {
        if (this.checkValidity(a, b, c) === true) {
            this.a = a;
            this.b = b;
            this.c = c;
        } 
        else throw new Error("Треугольник с такими сторонами не существует");
    }

    getPerimeter() {
        this.perimeter = (this.a + this.b + this.c) ;
        return this.perimeter;
    }

    getArea () {
        let halfPerimeter = this.perimeter / 2
        this.area = Math.sqrt(halfPerimeter * ((halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c))).toFixed(3);
        return parseFloat(this.area);
    }
}

function getTriangle(a, b, c) {
    let trngl = new Triangle (a, b, c);
    try {
        if (trngl.checkValidity() === true) {
            return trngl;
        }
    } catch (error) {
        trngl.getPerimeter();
        trngl.getArea(); 
        throw new Error("Ошибка! Треугольник не существует");  
    }
}