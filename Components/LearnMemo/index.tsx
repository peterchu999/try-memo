import * as React from 'react';
import withSection from '../../HOC/withSection';

const LearnMemo = () => {
  const [rerender, setRerender] = React.useState(true);
  const startTime = React.useRef(0);
  const endTime = React.useRef(0);
  const input = React.useRef('');

  const memoWordCounter = React.useMemo(() => {
    const start = performance.now();
    const inputArr = input.current.split(' ');
    const end = performance.now();
    console.log('compute time', end - start);
    return inputArr.length;
  }, [input.current]);

  return (
    <div>
      <input
        onChange={(event) => {
          input.current = event.target.value;
        }}
      />
      <p>{memoWordCounter}</p>
      <br />
      <p>time use to compute = {endTime.current - startTime.current}</p>
      <button
        onClick={() => {
          setRerender(!rerender);
        }}
      >
        start compute
      </button>
    </div>
  );
};

export default withSection(LearnMemo);
