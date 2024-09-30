import { Complex } from "./Complex";
import { MaybeComplex } from "./MaybeComplex";

export class PowerVariable {
    variable: string;
    power: MaybeComplex;

    substitute(value: MaybeComplex): Complex {
        return Complex.fromNumber(value)[this.power instanceof Complex ? "pow" : "powReal"](this.power as any);
    }
}