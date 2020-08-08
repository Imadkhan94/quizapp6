import React, { useState } from 'react';
import {questionPropstype} from '../Types/quiz_types';
const QuestionCard:React.FC<questionPropstype>=({question,options,callback})=>{
    // console.log(question,options)
    let [userselection, setselection]=useState("");
    const handleselection=(ev:any)=>{
        //  console.log(ev.target.value)
         setselection(ev.target.value)
    }
    return(
        <div className="question-container">
        <div className="question">
            {question}
        </div>
        <form onSubmit={(e:React.FormEvent<EventTarget>)=>callback(e,userselection)}
        className="question-form">
            {  
                options.map((opt:string,ind:number)=>{
                    return(
                        <div key={ind}>
                        <label className="option">
                            <input type="radio" name="opt" required value={opt} checked={userselection===opt} onChange={handleselection}/>
                            {opt}
                        </label>
                        </div>
                    )
                })
            }
            <input type="submit" className="submit"/>
        </form>
        </div>
    )
}
export default QuestionCard;