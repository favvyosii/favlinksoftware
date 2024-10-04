import React from 'react';

const CustomHr = ({ color = 'white', thickness = '1px', style = {}, ...props }) => {
  return (
    <hr
      style={{
        border: 'none',
        borderTop: `${thickness} solid ${color}`,
        ...style,
      }}
      {...props}
    />
  );
};

export default CustomHr;
