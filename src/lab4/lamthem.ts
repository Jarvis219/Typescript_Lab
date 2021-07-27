interface IVATCalculator {
    calculate(amount: number): number;
}

class VATCalculator implements IVATCalculator {
    public calculate(amount: number): number {
        return amount * 1.25;
    }
}
const vat: VATCalculator = new VATCalculator();