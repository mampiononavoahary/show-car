// CustomToolbar.tsx
import React from 'react';
import { TopToolbar } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import { CustomCreateButton, CustomExportButton } from './CustomerBtn';

const useStyles = makeStyles({
    createButton: {
        // Custom styles for the Create button
        color: 'blue',
        // other styles
    },
    exportButton: {
        // Custom styles for the Export button
        color: 'green',
        // other styles
    },
});

const CustomToolbar: React.FC = () => {
    const classes = useStyles();
    return (
        <TopToolbar>
            <CustomCreateButton className={classes.createButton} />
            <CustomExportButton className={classes.exportButton} />
        </TopToolbar>
    );
};

export default CustomToolbar;
