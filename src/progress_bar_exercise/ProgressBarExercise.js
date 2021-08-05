import React from "react";
import Exercise from "../exercise/Exercise";
import ProgressBar from './ProgressBar';
import SendButton from './SendButton';
import FinishButton from './FinishButton';

const ProgressBarExercise = () => {
  return (
    <div className="progress-bar-exercise">
      <Exercise
        solution={<Solution />}
        specsUrl="https://github.com/SpiffInc/spiff_react_exercises/issues/1"
        title="Progress Bar Exercise"
      />
    </div>
  );
};

export default ProgressBarExercise;

// ----------------------------------------------------------------------------------

const Solution = () => {
  const [value, updateValue] = React.useState(0);
  const [status, setStatus] = React.useState(false);
  const [done, setDone] = React.useState(false);

  async function fakeRequest() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(true), 20000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
    setDone(true);
    console.log('request done'); // "true"
  }
  

  if(status) {
    if(value === 0){
      fakeRequest();
    }
    //status progress
    setTimeout(function(){
      let newValue = value + 10;
      if (done) {
        updateValue(100);
        setStatus(false);
        return;
      }
      if (value === 90 && !done){
        updateValue(value);
      } else if (value === 100) {
        setStatus(false);
      } else {
        updateValue(newValue);
      }
    }, 1650);
  }

  return (
    <div>
      {status && <ProgressBar status={status} value={value}/>}
      <SendButton status={status} setStatus={setStatus} />
      <FinishButton status={!status} setStatus={setStatus}/>
    </div>
  );
};
