import {QuestionType,Quiz} from '../Types/quiz_types';
const ShuffleArray=(array:any[])=>
[...array].sort(()=>Math.random()-0.5)
export const getQuizdetails=async(totalQuestion:number,level:string):Promise<QuestionType[]>=>{
    const res= await fetch(`https://opentdb.com/api.php?amount=${totalQuestion}&difficulty=${level}&type=multiple`);
     let {results}= await res.json();
    const quiz:QuestionType[]=results.map((questionObj:Quiz)=>{
        return{
            Question:questionObj.question,
            answer:questionObj.correct_answer,
            correct_answer:questionObj.correct_answer,
            option:ShuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer)),
        }
    })
    return quiz;
}
