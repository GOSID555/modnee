'use client';



import CalculateButton from './CalculateButton';
import { Box, Container, Typography } from '@mui/material';
import IncomeExpenseForm from './Income_ExpenseForm';
import DebtDetailsForm from './DebtDetails';
import { UserFinancialData } from '@/models/finance';
import { useState } from 'react';
import { Debt } from '@/models/debt';

export default function AllForm() {
   

    return (
        <Container sx={{ display: 'flex', flexDirection: 'column' }}>
            <Container sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box sx={{ flex: 1 }}>
                    <IncomeExpenseForm></IncomeExpenseForm>
                </Box>
                <Box sx={{ width: 30 }}></Box>
                <Box sx={{ flex: 1 }}>
                    <DebtDetailsForm></DebtDetailsForm>
                </Box>

            </Container>
            <Box sx={{ height: 30 }} />
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CalculateButton></CalculateButton>
            </Box>
            
        </Container>
    );
}