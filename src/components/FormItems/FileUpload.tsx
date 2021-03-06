import React from "react";
import { Typography, makeStyles, Box } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  helperText: {
    color: "red",
  },
}));

export interface IFile {
  label: string;
  name: string;
  multiple?: boolean;
  helperText: string | null;
  handleChange(a: Blob, b: string): void;
  ref?: any;
}

const FileComp: React.FC<IFile> = React.forwardRef<any, IFile>(
  ({ label, name, multiple, helperText, handleChange }, ref) => {
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
    };

    return (
      <>
        <Box>
          <input
            id={label}
            name={name}
            type="file"
            multiple={multiple}
            onChange={handleImage}
            ref={ref}
            accept=".png, .jpg, .jpeg, .webp, .bmp"
          />
        </Box>
        <Typography
          variant="caption"
          className={clsx({ [classes.helperText]: !!helperText })}
        >
          {helperText}
        </Typography>
      </>
    );
  }
);

export default FileComp;
