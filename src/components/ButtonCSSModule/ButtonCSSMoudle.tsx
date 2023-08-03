import {Button, StyledEngineProvider} from '@mui/material';
import styles from './ButtonCSSModule.module.css';
import {MuiButtonProps} from '../../types/MuiButtonProps';
import classnames from 'classnames';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';

const ButtonCSSModule = ({variant = 'contained',disabled = false}: MuiButtonProps) => {
    return (
        <StyledEngineProvider injectFirst>
            <Button disabled={disabled} variant={variant} onClick={() => alert('click')}
                    className={classnames(styles.specialButton, styles.contained)} style={{marginRight: 10}}>Button</Button>
            <Button disabled={true} variant={variant} onClick={() => alert('click')}
                    className={classnames(styles.specialButton, styles.contained)} style={{marginRight: 10}}>Button</Button>
            <Button disabled={disabled} variant={variant} onClick={() => alert('click')}
                    className={classnames(styles.specialButton, styles.contained)} style={{marginRight: 10}} startIcon={<SendIcon />}>Button</Button>
            <Button disabled={disabled} variant={variant} onClick={() => alert('click')}
                    className={classnames(styles.specialButton, styles.contained)} style={{marginRight: 10}} endIcon={<DeleteIcon />}>Button</Button>
            <Button disabled={disabled} variant={variant} onClick={() => alert('click')}
                    className={classnames(styles.specialButton, styles.contained)} style={{marginRight: 10}} startIcon={<SendIcon />} endIcon={<DeleteIcon />}>Button</Button>
        </StyledEngineProvider>
    );
};

export default ButtonCSSModule;