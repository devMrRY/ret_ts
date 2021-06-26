import { TextField } from "@material-ui/core";

const TextComp: React.FC<any> = ({label, name, variant, helperText, value, type, handleChange}) => {
    return (
        <TextField
            fullWidth
            id={label}
            label={label}
            name={name}
            variant={variant}
            error={!!helperText}
            helperText={helperText}
            value={value}
            type={type}
            onChange={handleChange}
        />
    )
}

export default TextComp;