import { useState } from 'react';
import Display from './Components/Display-components/Display';
import './App.css';
import Keypad from './Components/Keypad-components/Keypad';
import DevDisplay from './Components/Dev-Display';

function App() {
  
  const minorCalc = (minorSum) => {
    console.log('minorsum', minorSum)
    const iconArr = ['+','-', 'x', '÷', 'MU', '%'];
    const [PLUS, MINS, TIMS, DIVI, MRKU, PCNT] = iconArr

    const [defaultNum, opperator, newNum] = minorSum;
    let x = +newNum;

    if(minorSum.includes(PLUS)){
      const newDefault = defaultNum + x;
      const newSum = [newDefault, PLUS, '0']

      handleDisplayNum(newDefault);

      setMinorSum(() => {
        return newSum;
      })
    }
    if(minorSum.includes(MINS)){
      const newDefault = defaultNum - x;
      const newSum = [newDefault, PLUS, '0']

      handleDisplayNum(newDefault);

      setMinorSum(() => {
        return newSum;
      })
    }
    if(minorSum.includes(TIMS)){
      const newDefault = defaultNum * x;
      const newSum = [newDefault, PLUS, '0']

      handleDisplayNum(newDefault);

      setMinorSum(() => {
        return newSum;
      })
    }
    if(minorSum.includes(DIVI)){
      const newDefault = defaultNum / x;
      const newSum = [newDefault, PLUS, '0']

      handleDisplayNum(newDefault);

      setMinorSum(() => {
        return newSum;
      })
    }
    if(minorSum.includes(MRKU)){
      x = newNum / 100 + 1;
      const newDefault = defaultNum * x;
      const newSum = [newDefault, PLUS, '0']

      handleDisplayNum(newDefault);

      setMinorSum(() => {
        return newSum;
      })
    }
    if(minorSum.includes(PCNT)){
      x = defaultNum / 100;
      const newDefault = newNum * x;
      const newSum = [newDefault, PLUS, '0']

      handleDisplayNum(newDefault);

      setMinorSum(() => {
        return newSum;
      })
    }
}

  const iconArr = ['+','-', 'x', '÷', 'MU','%', '='];

  const [icons, newIcons] = 
  useState(
  <section className="display-icons">
      {iconArr.map(icon => {
          return <p key={icon}>{icon}</p>
      })}
  </section>
  );

  const notationArr = ['N', 'GT', 'M', 'E'];

  const [notations, newNotations] = 
  useState(
      <section className="notation-icons">
          {notationArr.map(notation => {
              return <p key={notation}>{notation}</p>
          })}
      </section>
  );


  let [displayNum, setDisplayNum] = useState(0);
  const [minorSum, setMinorSum] = useState([0, '+','0']);
  const [majorSum, setMajorSum] = useState([[],[]]);
  const [defaultNum, opperator, newNum] = minorSum;

  const handleInput = (event) => {
    if(!isNaN(Number(event.target.id))){
      const numberInput = event.target.id;
      handleNumberInput(numberInput);
    }
    if(iconArr.includes(event.target.id)){
      const opperatorInput = event.target.id;
      handleOpperatorInput(opperatorInput);
    }
    if(event.target.id === '='){
      minorCalc(minorSum);
    }
  }
  const handleEqualsInput = (minorSum) => {
    const minorSumCopy = [...minorSum];
    setMajorSum((currentMajorSum) => {
      const newMajorSum = [...currentMajorSum];
      newMajorSum[0].push(minorSumCopy)
      return newMajorSum;
    })
    minorCalc(minorSum);
  }
  const handleOpperatorInput = (opperator) => {
    minorCalc(minorSum);
    handleNewOpperator(opperator);
  }
  const handleNumberInput = (number) => {
    handleNewNum(number)
  }
  const handleNewNum = (input) => {
      setMinorSum((currentSum) => {
      let newSum = [...currentSum];
      if(currentSum[2] === '0'){
        newSum[2] = input;
        handleDisplayNum(newSum[2]);
        return newSum;
      } else {
        newSum[2] += input;
        handleDisplayNum(newSum[2]);
        return newSum;
      }
    })
  }
  const handleNewOpperator = (opperator) => {
    setMinorSum((currentSum) => {
      const newSum = [...currentSum];
      newSum[1] = opperator;
      return newSum;
    })
  }

  const handleDisplayNum = (input) => {
    setDisplayNum((currentDisplayNum) => {
      return currentDisplayNum = input;
    })
  }
  

  return (
    <div className="App">
      <Display displayNum={displayNum} icons={icons} notations={notations}/>
      <Keypad handleInput={handleInput}/>
      <DevDisplay DevDisplay={minorSum}/>
    </div>
  );
}

export default App;
