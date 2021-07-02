import {
  DialogTitle,
  Dialog,
  DialogActions,
  DialogContent,
  Button,
} from "@material-ui/core";
interface IModal {
  open: boolean,
  title?: string,
  disableBackdropClick?: boolean,
  handleClose?(): void,
  handleConfirm?(): void,
  showActions: boolean,
  renderActions?: React.ReactNode,
  children?: React.ReactNode,
  size?: false | "md" | "xs" | "sm" | "lg" | "xl"
}

function ModalComp({
  open,
  size = "md",
  title,
  children,
  disableBackdropClick,
  handleClose,
  handleConfirm,
  showActions,
  renderActions
}: IModal) {
  return (
    <Dialog
      disableBackdropClick={disableBackdropClick}
      disableEscapeKeyDown
      maxWidth={size}
      aria-labelledby="confirmation-dialog-title"
      open={open}
      onClose={handleClose}
    >
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>{children}</DialogContent>
      {showActions && <DialogActions>
          {renderActions ? renderActions : (
            <>
              <Button variant="outlined" onClick={handleClose} color="secondary">
                Cancel
              </Button>
              <Button variant="outlined" onClick={handleConfirm} color="primary" autoFocus>
                Ok
              </Button>
            </>
          )}
        </DialogActions>}
    </Dialog>
  );
}

export default ModalComp;
