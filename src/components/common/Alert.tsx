import ModalComp from "./Modal";

function Alert({ open, onCancel, message, onConfirm }: any){
    return (
        <ModalComp
            open={open}
            handleClose={onCancel}
            size={"medium"}
        >
            <p>{message}</p>
        </ModalComp>
    )
}

export default Alert;
