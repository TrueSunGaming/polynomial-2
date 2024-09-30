import { PowerVariable } from "./PowerVariable";
import type { MaybeComplex } from "./MaybeComplex";

export class SingleVariableTerm {
    coefficient: MaybeComplex;
    variables: PowerVariable[];
}