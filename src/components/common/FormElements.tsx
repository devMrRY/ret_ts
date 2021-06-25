import { TextField } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => ({
    textField: {
        '& .MuiOutlinedInput-root:hover':{

        }
    }
}));

const FormElements: React.FC<any> = ({ config, helperText, value }) => {
    const classes = useStyles();

    switch(config.field){
        case "textbox":
            return (
                <TextField
                    className={clsx(classes.textField)}
                    id={config.label}
                    name={config.name}
                    label={config.label}
                    variant="outlined"
                    type={config.type}
                    error={!!helperText}
                    helperText={helperText}
                    value={value}
                    { ...(config.props || {})}
                />
            )
        default:
            return null;
    }
}

export default FormElements;
