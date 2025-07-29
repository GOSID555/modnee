'use client';

import { Box, Typography, Paper, TextField, Stack, MenuItem, IconButton, Button, Divider } from '@mui/material';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const defaultDebt = {
    type: 'Credit Card',
    name: '',
    balance: '',
    rate: '',
    minPayment: '',
    monthlyPayment: '',
};

const iconsMap: Record<string, React.ReactNode> = {
    'Credit Card': <CreditCardIcon sx={{ color: 'purple' }} />,
    'Car Loan': <DirectionsCarIcon sx={{ color: 'purple' }} />,
};

export default function DebtDetailsForm() {
    const [debts, setDebts] = useState([defaultDebt]);

    const addDebt = () => {
        setDebts([...debts, defaultDebt]);
    };

    const removeDebt = (index: number) => {
        const updated = debts.filter((_, i) => i !== index);
        setDebts(updated);
    };

    const handleChange = (index: number, field: string, value: string) => {
        const updated = debts.map((debt, i) =>
            i === index ? { ...debt, [field]: value } : debt
        );
        setDebts(updated);
    };

    return (
        <Box>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6">Debt Details</Typography>
                <Button
                    variant="contained"
                    size="small"
                    startIcon={<AddIcon />}
                    onClick={addDebt}
                    sx={{ backgroundColor: '#f1e7ff', color: '#7e3af2', '&:hover': { backgroundColor: '#e9dfff' } }}
                >
                    Add Debt
                </Button>
            </Box>

            <Stack spacing={3}>
                {debts.map((debt, index) => (
                    <Paper key={index} variant="outlined" sx={{ p: 2, borderRadius: 2, position: 'relative' }}>
                        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                {iconsMap[debt.type]}
                                <Typography fontWeight="bold">{debt.type}</Typography>
                            </Stack>
                            <IconButton size="small" onClick={() => removeDebt(index)}>
                                <DeleteIcon />
                            </IconButton>
                        </Stack>

                        <Divider sx={{ mb: 2 }} />

                        <Stack spacing={2}>
                            <Stack direction="row" spacing={2}>
                                <TextField
                                    select
                                    label="Debt Type"
                                    value={debt.type}
                                    onChange={(e) => handleChange(index, 'type', e.target.value)}
                                    fullWidth
                                >
                                    <MenuItem value="Credit Card">Credit Card</MenuItem>
                                    <MenuItem value="Car Loan">Car Loan</MenuItem>
                                </TextField>

                                <TextField
                                    label="Debt Name"
                                    value={debt.name}
                                    onChange={(e) => handleChange(index, 'name', e.target.value)}
                                    fullWidth
                                />
                            </Stack>

                            <Stack direction="row" spacing={2}>
                                <TextField
                                    label="Current Balance"
                                    value={debt.balance}
                                    onChange={(e) => handleChange(index, 'balance', e.target.value)}
                                    fullWidth
                                    InputProps={{ startAdornment: <span>$&nbsp;</span> }}
                                />

                                <TextField
                                    label="Interest Rate (%)"
                                    value={debt.rate}
                                    onChange={(e) => handleChange(index, 'rate', e.target.value)}
                                    fullWidth
                                    InputProps={{ startAdornment: <span>%&nbsp;</span> }}
                                />
                            </Stack>

                            <Stack direction="row" spacing={2}>
                                <TextField
                                    label="Minimum Payment"
                                    value={debt.minPayment}
                                    onChange={(e) => handleChange(index, 'minPayment', e.target.value)}
                                    fullWidth
                                    InputProps={{ startAdornment: <span>$&nbsp;</span> }}
                                />

                                <TextField
                                    label="Your Monthly Payment"
                                    value={debt.monthlyPayment}
                                    onChange={(e) => handleChange(index, 'monthlyPayment', e.target.value)}
                                    fullWidth
                                    InputProps={{ startAdornment: <span>$&nbsp;</span> }}
                                />
                            </Stack>
                        </Stack>
                    </Paper>
                ))}
            </Stack>
        </Box>
    );
}