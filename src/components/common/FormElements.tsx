import { TextField } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => ({
    textField: {
        '& .MuiOutlinedInput-root:hover':{

        }
    }
}));

const FormElements: React.FC<any> = ({ field, label, name, helperText, variant, value, ...rest }) => {
    const classes = useStyles();
    switch(field){
        case "textbox":
            return (
                <TextField
                    fullWidth
                    className={clsx(classes.textField)}
                    id={label}
                    label={label}
                    name={name}
                    variant={variant}
                    error={!!helperText}
                    helperText={helperText}
                    value={value}
                    type={rest.type}
                />
            )
        case "file":
            return (
                <input
                    type="file"
                    value={value}
                    { ...rest}
                />
            )
        default:
            return null;
    }
}

export default FormElements;
