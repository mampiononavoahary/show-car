// CustomButtons.tsx
import React from 'react';
import { Button, ButtonProps } from 'react-admin';

export const CustomCreateButton: React.FC<ButtonProps> = (props) => (
    <Button label="New Create Label" {...props}>
        {/* You can include a custom icon here if needed */}
    </Button>
);

export const CustomExportButton: React.FC<ButtonProps> = (props) => (
    <Button label="New Export Label" {...props}>
        {/* You can include a custom icon here if needed */}
    </Button>
);
