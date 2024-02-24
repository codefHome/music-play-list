import { Controller } from "react-hook-form";
import Box from "./Box";
import Typography from "./Typography";
import TextField from "./TextField";
import { InputFieldProp } from "../interfaces/songTypes";

const InputField = ({
  label,
  id,
  control,
  placeholder,
  errors,
  errorMessage,
}: InputFieldProp) => {
  return (
    <Box className="flex flex-col gap-3 justify-center items-center">
      <Typography variant="heading2" marginBottom="-10px">
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
            borderRadius="10px"
            className="w-full border"
          />
        )}
      />
      {!!errors && (
        <Typography
          marginTop="-5px"
          color="red"
          textAlign="center"
          fontSize="12px"
        >
          {errorMessage}
        </Typography>
      )}
    </Box>
  );
};

export default InputField;
