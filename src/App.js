import React, { useState } from 'react';
import './index.scss';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({ count }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt='' />
      <h2>Вы отгадали {count} вопрос(а) из {questions.length}</h2>
      <a href='/'> <button >Попробовать снова</button> </a>
    </div>
  );
}

function Game({ question, clickAnswer, step }) {
  const percent = step / questions.length * 100
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percent}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => <li onClick={() => clickAnswer(index)} key={text}>{text}</li>)}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0)
  const question = questions[step]
  const clickAnswer = (index) => {
    setStep(step + 1)
    return index === question.correct ? setCount(count + 1) : '';
  }

  return (
    <div className="App">
      {step !== questions.length ? <Game question={question} clickAnswer={clickAnswer} step={step} /> : <Result count={count} />}
    </div>
  );
}

export default App;
