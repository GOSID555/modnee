import { UserFinancialData } from "@/models/finance";
import { Debt } from "@/models/debt";

export function getTotalExpenses(finance: UserFinancialData): number {
    return (
        finance.housing +
        finance.food +
        finance.transportation +
        finance.otherExpenses
    );
}

export function getRemainingIncome(finance: UserFinancialData): number {
    return finance.monthlyIncome - getTotalExpenses(finance);
}

export function getTotalMonthlyDebt(debts: Debt[]): number {
    return debts.reduce((sum, d) => sum + d.monthlyPayment, 0);
}

// 🔥 ฟังก์ชันหลักที่จะ return ค่าสรุป
export function calculateSummary(
    finance: UserFinancialData,
    debts: Debt[]
) {
    const totalExpenses = getTotalExpenses(finance);
    const remainingIncome = getRemainingIncome(finance);
    const totalDebtPayment = getTotalMonthlyDebt(debts);
    const finalBalance = remainingIncome - totalDebtPayment;

    return {
        monthlyIncome: finance.monthlyIncome,
        totalExpenses,
        remainingIncome,
        totalDebtPayment,
        finalBalance, // อาจเป็นลบหรือบวกก็ได้
    };
}