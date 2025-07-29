'use client';

import { Box, TextField, Typography, Stack } from '@mui/material';
import { useState } from 'react';

export default function IncomeExpenseForm() {
    const [monthlyIncome, setMonthlyIncome] = useState('');
    const [housing, setHousing] = useState('');
    const [utilities, setUtilities] = useState('');
    const [food, setFood] = useState('');
    const [transportation, setTransportation] = useState('');
    const [otherExpenses, setOtherExpenses] = useState('');

    // คำนวณเงินคงเหลือ
    const remaining =
        Number(monthlyIncome) -
        (Number(housing) +
            Number(utilities) +
            Number(food) +
            Number(transportation) +
            Number(otherExpenses));

    return (
        <Box>
            <Typography variant="h6" gutterBottom>
                Income & Expenses
            </Typography>

            <Stack spacing={2}>
                <TextField
                    label="Monthly Income"
                    placeholder="$ 5000"
                    variant="outlined"
                    fullWidth
                    value={monthlyIncome}
                    onChange={(e) => setMonthlyIncome(e.target.value)}
                />
                <TextField
                    label="Housing Expenses"
                    placeholder="🏠 1500"
                    variant="outlined"
                    fullWidth
                    value={housing}
                    onChange={(e) => setHousing(e.target.value)}
                />
                <TextField
                    label="Utilities"
                    placeholder="⚡ 300"
                    variant="outlined"
                    fullWidth
                    value={utilities}
                    onChange={(e) => setUtilities(e.target.value)}
                />
                <TextField
                    label="Food & Groceries"
                    placeholder="🍴 600"
                    variant="outlined"
                    fullWidth
                    value={food}
                    onChange={(e) => setFood(e.target.value)}
                />
                <TextField
                    label="Transportation"
                    placeholder="🚗 400"
                    variant="outlined"
                    fullWidth
                    value={transportation}
                    onChange={(e) => setTransportation(e.target.value)}
                />
                <TextField
                    label="Other Expenses"
                    placeholder="🏷️ 500"
                    variant="outlined"
                    fullWidth
                    value={otherExpenses}
                    onChange={(e) => setOtherExpenses(e.target.value)}
                />
            </Stack>

            {/* แสดงผลลัพธ์ */}
            <Box mt={3}>
                <Typography variant="subtitle1">
                    Remaining After Expenses: <strong>${isNaN(remaining) ? '0' : remaining.toFixed(2)}</strong>
                </Typography>
            </Box>
        </Box>
    );
}