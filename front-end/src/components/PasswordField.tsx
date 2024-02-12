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
}: InputFieldProp) => {
  const [show, setShow] = useState<boolean>(false);
  const handleShow = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShow(!show);
  };
  return (
    <Box display="flex" justifyContent="start" alignItems="center">
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
        justifyContent="center"
        alignItems="center"
        width="350px"
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
            />
          )}
        />
        {show ? (
          <IconButton
            icon={<VisibleIcon />}
            onClick={handleShow}
            color="blue"
            size={24}
          />
        ) : (
          <IconButton
            icon={<HidePasswordIcon />}
            onClick={handleShow}
            color="blue"
            size={24}
          />
        )}
      </Box>
    </Box>
  );
};
export default PasswordField;
