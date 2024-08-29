import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { TextField, TextFieldProps } from "@mui/material";

type Props<T extends FieldValues> = {
    name: Path<T>;
} & Pick<TextFieldProps, 'label'>;  //this is prop of the mateerial UI componenent
 
export function RHFTextField<T extends FieldValues>({ name , ...props} : Props<T>) {
    const { control } = useFormContext<T>();
     return (
        <Controller 
         control={control}
         name={name}
         render={({ field, fieldState: {error} })=> (
          <TextField {...field} {...props} error={!!error} helperText={error?.message} />
        )}
         />
     );
}