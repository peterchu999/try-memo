import * as React from 'react';
import withSection from '../../HOC/withSection';

const LearnRef = (props) => {
  const clickRef = React.useRef(0);
  const [rerender, setRerender] = React.useState(true);
  return (
    <div>
      <p>{props.name || 'hello'}</p>
      <p>{clickRef.current}</p>
      <button
        onClick={() => {
          clickRef.current += 1;
        }}
      >
        clickRef
      </button>
      <button
        onClick={() => {
          setRerender(!rerender);
        }}
      >
        rerender
      </button>
    </div>
  );
};

export default withSection(LearnRef);
