import { useState, ChangeEvent } from "react";
import styled from "@emotion/styled";
import {
  space,
  color,
  typography,
  SpaceProps,
  ColorProps,
  TypographyProps,
} from "styled-system";

interface Option {
  label: string;
  value: string;
}

interface ComboBoxProps extends SpaceProps, ColorProps, TypographyProps {
  options: Option[];
  onChange: (selectedValue: string) => void;
}

const ComboBoxWrapper = styled.div`
  position: relative;
  display: inline-block;
  padding: 8px;
  width: 100%;
`;

const Select = styled.select<SpaceProps & ColorProps & TypographyProps>`
  width: 93%;
  padding: 8px;
  color: black;
  white-space: wrap;
  word-break: break-all;
  ${space}
  ${color}
  ${typography}
`;

const ArrowIcon = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const ComboBox = ({ options, onChange }: ComboBoxProps) => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <ComboBoxWrapper>
      <Select onChange={handleChange} value={selectedValue}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      <ArrowIcon>&#9660;</ArrowIcon>
    </ComboBoxWrapper>
  );
};

export default ComboBox;
