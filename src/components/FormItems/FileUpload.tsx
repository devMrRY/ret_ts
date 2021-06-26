import { Typography, makeStyles, Theme, Box } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => ({
    helperText: {
        color: 'red'
    }
}));

const TextComp: React.FC<any> = ({label, name, multiple, helperText, type, handleChange}) => {
    const classes = useStyles();

    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();
        if (!e.currentTarget.files) {
			return;
		}
		const file = e.currentTarget.files[0];
		const reader = new FileReader();

		reader.onload = function (data: any) {
			let dataURL = data.target.result;
			dataURL = dataURL.replace(";base64", `;name=${file?.name};base64`);
            handleChange(file, dataURL);
		};

		reader.readAsDataURL(file);
    }

    return (
        <>
            <Box>
                <input
                    id={label}
                    name={name}
                    type={type}
                    multiple={multiple}
                    onChange={handleImage}
                />
            </Box>
            <Typography variant="caption" className={clsx({[classes.helperText]: !!helperText})}>{helperText}</Typography>
        </>
    )
}

export default TextComp;