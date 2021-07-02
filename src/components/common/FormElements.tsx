import FileUpload from "../FormItems/FileUpload";
import TextComp from "../FormItems/TextComp";
interface IForm {
    field: string,
    label: string,
    name: string,
    type: "file" | "text",
    handleChange: any,
    helperText: string | null,
    disabled: boolean,
    variant?: "standard" | "outlined" | "filled"
}

const FormElements: React.FC<IForm> = ({ field, ...rest }) => {
    switch(field){
        case "textbox":
            return (
                <TextComp {...rest} />
            )
        case "file":
            return (
                <FileUpload {...rest} />
            )
        default:
            return null;
    }
}

export default FormElements;
