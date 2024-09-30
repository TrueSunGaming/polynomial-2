import { MaybeComplex } from "./MaybeComplex";
import { PolarCoordinate } from "./PolarCoordinate";

export class Complex {
    real: number;
    imaginary: number;

    constructor(real = 0, imaginary = 0) {
        this.real = real;
        this.imaginary = imaginary;
    }

    static fromNumber(val: MaybeComplex): Complex {
        return val instanceof Complex ? val.copy : new Complex(val, 0);
    }

    static fromPolar(coord: PolarCoordinate) {
        return new Complex(coord.magnitude * Math.cos(coord.angle), coord.magnitude * Math.sin(coord.angle));
    }

    static fromEuler(coefficient: MaybeComplex, exponent: MaybeComplex): Complex {
        const co: Complex = Complex.fromNumber(coefficient);
        const exp: Complex = Complex.fromNumber(exponent);
        return Complex.fromPolar({
            magnitude: Math.E ** exp.real,
            angle: exp.imaginary
        }).mul(co);
    }

    get polar(): PolarCoordinate {
        return {
            magnitude: this.abs,
            angle: this.angle
        };
    }

    get copy(): Complex {
        return new Complex(this.real, this.imaginary);
    }

    get abs(): number {
        return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
    }

    get angle(): number {
        return Math.atan2(this.imaginary, this.real);
    }

    get opposite(): Complex {
        return new Complex(-this.real, -this.imaginary);
    }

    get conjugate(): Complex {
        return new Complex(this.real, -this.imaginary);
    }

    add(other: Complex): Complex {
        return new Complex(this.real + other.real, this.imaginary + other.imaginary);
    }

    sub(other: Complex): Complex {
        return new Complex(this.real - other.real, this.imaginary - other.imaginary);
    }

    scale(factor: number): Complex {
        return new Complex(this.real * factor, this.imaginary * factor);
    }

    mul(other: Complex): Complex {
        const first: number = this.real * other.real;
        const last: number = this.imaginary * other.imaginary;
        const middle: number = this.real * other.imaginary + this.imaginary * other.real;
        return new Complex(first - last, middle);
    }

    powReal(power: number): Complex {
        return Complex.fromPolar({
            magnitude: this.abs ** power,
            angle: this.angle * power
        });
    }

    pow(power: Complex): Complex {
        return Complex.fromPolar({
            magnitude: this.abs ** power.real * Math.E ** (-power.imaginary * this.angle),
            angle: power.imaginary * Math.log(this.abs) + power.real * this.angle
        });
    }
}