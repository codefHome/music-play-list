
import  { ReactNode } from 'react';
import styled from '@emotion/styled';
import { space, color, layout, SpaceProps, ColorProps, LayoutProps } from 'styled-system';
import Button from './Button';

import Box from './Box';

interface ModalProps extends SpaceProps, ColorProps, LayoutProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div<ModalProps>`
  background: white;
  padding: 16px;
  border-radius: 8px;
  ${space}
  ${color}
  ${layout}
`;

const Modal = ({ isOpen, onClose, children }:ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay>
       
      <ModalContent isOpen={isOpen} onClose={onClose} >
        <Box display='flex' justifyContent='end' width='100%' mt='-2px' height={22} mb={3} >
        <Button variant='secondary'  onClick={onClose}>X</Button>
        </Box>
    
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
