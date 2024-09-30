import { PowerVariable } from "./PowerVariable";
import type { MaybeComplex } from "./MaybeComplex";

export class MultiVariableTerm {
    coefficient: MaybeComplex;
    variables: PowerVariable[];
}