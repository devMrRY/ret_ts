import { DialogTitle, Dialog, DialogActions, DialogContent} from '@material-ui/core';

function ModalComp({ open, maxWidth="md", title, children, disableBackdropClick, handleClose }: any) {
  return (
    <Dialog
      disableBackdropClick={disableBackdropClick}
      disableEscapeKeyDown
      maxWidth={maxWidth}
      aria-labelledby="confirmation-dialog-title"
      open={open}
    >
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>
        {children}
      </DialogContent>
      {
        <DialogActions>
          
        </DialogActions>
      }
    </Dialog>
  );
}

export default ModalComp;
