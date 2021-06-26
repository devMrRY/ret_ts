import FileUpload from "../FormItems/FileUpload";
import TextComp from "../FormItems/TextComp";

const FormElements: React.FC<any> = ({ field, ...rest }) => {
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
