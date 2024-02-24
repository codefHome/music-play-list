import { Controller } from "react-hook-form";
import { EmailIcon } from "../assets/EmailIcon";
import { InputFieldProp } from "../interfaces/songTypes";
import Box from "./Box";
import Typography from "./Typography";
import TextField from "./TextField";

export const EmailInput = ({
  label,
  id,
  control,
  placeholder,
  errors,
  errorMessage,
}: InputFieldProp) => {
  return (
    <Box className="flex flex-col">
      <Box className="flex flex-col lg:flex-row gap-2 justify-start items-center">
        <Typography
          color="black"
          fontSize="18px"
          mr={1}
          width="85px"
          textAlign="right"
        >
          {label}:&nbsp;
        </Typography>
        <Box
          border="1px solid black"
          className="flex h-[45px]  items-center rounded-[5px]  w-[250px] lg:w-[350px] "
        >
          <Box className="flex justify-start items-start ">
            <EmailIcon />
          </Box>

          <Controller
            name={id}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                id={id}
                placeholder={placeholder}
                backgroundColor="transparent"
                border="none"
                ml={1}
                fontSize="18px"
                lineHeight="1.5"
                width="100%"
              />
            )}
          />
        </Box>
      </Box>
      {!!errors && (
        <Typography
          marginTop="-5px"
          color="red"
          textAlign="center"
          fontSize="12px"
          className="w-fit self-center pt-1"
        >
          {errorMessage}
        </Typography>
      )}
    </Box>
  );
};
export default EmailInput;
