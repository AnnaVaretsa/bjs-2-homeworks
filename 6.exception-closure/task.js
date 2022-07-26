function parseCount(value) {
    let parseValue = Number.parseInt(value); 
    if (isNaN(parseValue)) {
        throw new Error("Невалидное значение");
    }
    return parseValue;
}

function validateCount(value) {
    try {
        return val = parseCount(value); 
    } catch (error) { 
        return error; 
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
        if (!this.checkValidity(a, b, c)) {
            throw new Error("Треугольник с такими сторонами не существует");
        } 
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea () {
        let halfPerimeter = this.getPerimeter() / 2
        this.area = Math.sqrt(halfPerimeter * ((halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c))).toFixed(3);
        return parseFloat(this.area);
    }
}

function getTriangle(a, b, c) {
    let trngl = null;
    try {
        a = parseCount(a);
        b = parseCount(b);
        c = parseCount(c);
    return (trngl = new Triangle(a, b, c));
    } catch (error) {
        return {
            getPerimeter() {
                return 'Ошибка! Треугольник не существует';
            },
            getArea() {
                return 'Ошибка! Треугольник не существует';   
            }
        };
    }   
}