import { Controller } from "react-hook-form";

import { InputFieldProp } from "../interfaces/songTypes";
import Box from "./Box";
import Typography from "./Typography";
import TextField from "./TextField";
import { PasswordIcon } from "../assets/PasswordIcon";
import { MouseEvent, useState } from "react";
import VisibleIcon from "../assets/VisibleIcon";
import HidePasswordIcon from "../assets/HidePasswordIcon";
import IconButton from "./IconButton";

export const PasswordField = ({
  label,
  id,
  control,
  placeholder,
  errors,
  errorMessage,
}: InputFieldProp) => {
  const [show, setShow] = useState<boolean>(false);
  const handleShow = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShow(!show);
  };
  return (
    <Box className="flex flex-col">
      <Box className="flex flex-col lg:flex-row gap-2 justify-start items-center">
        <Typography
          textAlign="right"
          color="black"
          fontSize="18px"
          mr={1}
          width="85px"
        >
          {label}:&nbsp;
        </Typography>
        <Box
          display="flex"
          border="1px solid black"
          borderRadius="5px"
          alignItems="center"
          className="w-[250px] lg:w-[350px]"
          height="45px"
          paddingLeft="3px"
        >
          <PasswordIcon />
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
                type={show ? "text" : "password"}
                fontSize="18px"
                lineHeight="1.5"
                className="w-full"
              />
            )}
          />
          {show ? (
            <IconButton
              icon={<VisibleIcon />}
              onClick={handleShow}
              color="blue"
              size={20}
            />
          ) : (
            <IconButton
              icon={<HidePasswordIcon />}
              onClick={handleShow}
              color="blue"
              size={20}
            />
          )}
        </Box>
      </Box>
      {!!errors && (
        <Typography
          marginTop="-5px"
          color="red"
          textAlign="center"
          fontSize="12px"
          className="w-fit self-center ml-4 pt-1"
        >
          {errorMessage}
        </Typography>
      )}
    </Box>
  );
};
export default PasswordField;
