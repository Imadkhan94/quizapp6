import React from 'react';
export type Quiz={       // export, in this case we use type other place. otherwise we use just type instead of export.
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
} 

    export type QuestionType={
        Question:string
        answer:string
        option:string[]
        correct_answer: string
    }
     export type questionPropstype={
        question:string
        options:string[]
        callback:(e:React.FormEvent<EventTarget>,ans:string)=>void
    }