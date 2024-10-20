import React from 'react';
import useCurrentTime from '../../currentTimeHook';
import TimeBlock from '../timeblock/TimeBlock';
import classes from './Clock.module.css';

function ModernClock() {
  const time = useCurrentTime();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div className={classes.container}>
      <div className={classes.clock}>
        <TimeBlock value={Math.floor(hours / 10)} />
        <TimeBlock value={hours % 10} />
      <div className={classes.colon}> : </div>
        <TimeBlock value={Math.floor(minutes / 10)} />
        <TimeBlock value={minutes % 10} />
      <div className={classes.colon}> : </div>
        <TimeBlock value={Math.floor(seconds / 10)} />
        <TimeBlock value={seconds % 10} />
    </div>
    </div>
  );
}

export default ModernClock;
