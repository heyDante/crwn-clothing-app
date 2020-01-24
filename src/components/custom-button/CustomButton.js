import React from 'react';

// import './CustomButton.scss';

import { CustomButtonContainer } from './CustomButton.styled';

const CustomButton = ({ children, ...otherProps}) => {
  console.log(otherProps)
  return (
    <CustomButtonContainer {...otherProps}>
      {children}
    </CustomButtonContainer>
  );
}

export default CustomButton;