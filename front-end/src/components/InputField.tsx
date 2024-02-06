

import {  Controller } from 'react-hook-form';
import Box from './Box';
import Typography from './Typography';
import TextField from './TextField';
interface InputFieldProp {
  label: string;
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  placeholder: string;
}
const InputField = ({
  label,
  id,
  control,
  placeholder,
}: InputFieldProp) => {
  

  return (
    <Box  variant='primary'>
      <Typography variant="heading2" marginBottom='-10px'>
        {label}:
      </Typography>
      <Controller
        name={id}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id={id}
            placeholder={placeholder}
            borderRadius='10px'
          />
         
        )}
      />
      
    </Box>
  );
};

export default InputField;
