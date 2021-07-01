import { Typography } from "@material-ui/core";
import ModalComp from "./Modal";

function Alert({ open, onCancel, message, showActions, onConfirm }: any){
    return (
        <ModalComp
            open={open}
            handleClose={onCancel}
            handleConfirm={onConfirm}
            size={"md"}
            showActions={showActions}
        >
            <Typography variant="h6">{message}</Typography>
        </ModalComp>
    )
}

export default Alert;
