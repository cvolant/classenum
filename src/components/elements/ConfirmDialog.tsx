import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

type IConfirmDialogProps = {
  description?: string;
  open?: boolean;
  handleCancel: () => void;
  handleConfirm: () => void;
  title: string;
};

export const ConfirmDialog: React.FC<IConfirmDialogProps> = ({
  description, open, handleCancel, handleConfirm, title,
}) => (
  <Dialog
    open={open || false}
    onClose={handleCancel}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
    {description && (
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {description}
        </DialogContentText>
      </DialogContent>
    )}
    <DialogActions>
      <Button onClick={handleCancel}>
        Annuler
      </Button>
      <Button onClick={handleConfirm} color="primary" autoFocus>
        Valider
      </Button>
    </DialogActions>
  </Dialog>
);

export default ConfirmDialog;
