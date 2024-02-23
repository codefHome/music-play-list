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
}: InputFieldProp) => {
  return (
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
        display="flex"
        border="1px solid black"
        borderRadius="5px"
        justifyContent="center"
        alignItems="center"
        className="w-[250px] lg:w-[350px]"
        height="45px"
      >
        <EmailIcon />
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
            />
          )}
        />
      </Box>
    </Box>
  );
};
export default EmailInput;
