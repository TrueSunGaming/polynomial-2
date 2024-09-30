import { PowerVariable } from "./PowerVariable";
import type { MaybeComplex } from "./MaybeComplex";

 export class Monomial {
    coefficient: MaybeComplex;
    variables: PowerVariable[];
}