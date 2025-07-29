'use client';

import { Button } from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';

export default function CalculateButton() {
    return (
        <Button
            variant="contained"
            size="large"
            startIcon={<CalculateIcon />}
            color="secondary"
        >
            Calculate Now
        </Button>
    );
}
