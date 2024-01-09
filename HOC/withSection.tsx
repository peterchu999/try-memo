import * as React from 'react';
import './style.css';

const withSection = (WrapComponent) => (props) => {
  return (
    <div className="wrapper">
      <WrapComponent {...props} />
    </div>
  );
};

export default withSection;
