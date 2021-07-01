import { TextField } from "@material-ui/core";

interface IText {
    label: string,
    name: string,
    multiple?: boolean,
    helperText?: string | null,
    type: string,
    handleChange: any,
    variant?: "standard" | "filled" | "outlined",
    value?: string,
    disabled?: boolean
}

const TextComp: React.FC<IText> = ({label, name, variant, helperText, value, type, handleChange, disabled}) => {
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
            disabled={disabled}
        />
    )
}

export default TextComp;