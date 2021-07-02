import { Typography } from "@material-ui/core";
import ModalComp from "./Modal";

interface IAlert {
    open: boolean,
    onCancel(): void,
    message: string,
    showActions: boolean,
    onConfirm(): void
}

function Alert({ open, onCancel, message, showActions, onConfirm }: IAlert){
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
