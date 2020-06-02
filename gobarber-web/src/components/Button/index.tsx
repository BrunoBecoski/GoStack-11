import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProsps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProsps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
