export interface Debt {
    id: string;
    debtType: string;
    debtName: string;
    balance: number;
    interestRate: number;
    minPayment: number;
    monthlyPayment: number;
}