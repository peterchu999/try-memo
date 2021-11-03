import * as React from 'react';
import withSection from '../../HOC/withSection';

const LearnMemo = () => {
  const [rerender, setRerender] = React.useState(true);
  const startTime = React.useRef(0);
  const endTime = React.useRef(0);

  return (
    <div>
      <p>time use to compute = {endTime.current - startTime.current}</p>
    </div>
  );
};

export default withSection(LearnMemo);
