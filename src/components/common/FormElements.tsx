import FileUpload from "../FormItems/FileUpload";
import TextComp from "../FormItems/TextComp";
interface IForm {
    field: string,
    label: string,
    name: string,
    type: "file" | "text",
    handleChange: Function,
    helperText: string | null,
    disabled: boolean
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
