import React, { useEffect, useState } from 'react';
import './App.css';
import {getQuizdetails} from './services/quiz_service';
import {QuestionType} from './Types/quiz_types';
import QuestionCard from './components/questioncard';
function App() {
  const [quiz1 ,setquiz1]=useState<QuestionType[]>([])
  let [currentstep ,setcurrent]=useState(0)
  let [score,setscore]=useState(0)
  let [showresult, setshowresult]=useState(false)
  useEffect(()=>{
    async function fetchData(){
     const question:QuestionType[]=await getQuizdetails(5,'easy');
     console.log(question)
     setquiz1(question)
    }
     fetchData();
  },[]);
  const handlesubmit=(e:React.FormEvent<EventTarget>,userans:string)=>{
    e.preventDefault(); 
    const currentquestion:QuestionType=quiz1[currentstep];
    console.log("correct_answer:" + currentquestion.correct_answer + "--user_selection:"+userans )
    if (userans===currentquestion.correct_answer){
      setscore(++score)
    }
    if(currentstep!==quiz1.length-1)
       setcurrent(++currentstep);
        else {alert("QUIZ completed")
              alert("your score is :"+ score)
             setcurrent(0);
            setscore(0)
          setshowresult(true)}
  }
  if(!quiz1.length)
  return <h3> Loading....</h3>
  if(showresult){
    return(
      <div className="question-container"> 
        <h3>Results</h3>
        <p className="result"> score  <b>{score}</b> of <b>{quiz1.length}</b></p>
      </div>
    )
  }
  return (
    <div className="quizapp">
      <h1>QuizApp</h1>
      <QuestionCard 
      // options={quiz1[0].option}
      // question={quiz1[0].Question}/>
      options={quiz1[currentstep].option}
      question={quiz1[currentstep].Question}
      callback={handlesubmit}/>
    </div>
  );
}

export default App;

