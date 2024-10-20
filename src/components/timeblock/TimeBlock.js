import React from 'react';
import classes from './TimeBlock.module.css';

const TimeBlock = ({ value }) => {
  
  const dots = Array.from({ length: value }, () => '●');

  if (value === 0) {
    return <div className={classes.block}>—</div>;
  }

  return (
    <div className={classes.block}>
      {dots.map((dot, i) => (
        <div key={i} className={classes.dot}>
          {dot}
        </div>
      ))}
    </div>
  );
}

export default TimeBlock;
