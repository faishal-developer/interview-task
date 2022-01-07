import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Main.css'
import Question from './Question';
import Result from './Result';

const Main = () => {
    let [quiz, setQuiz] = useState([])
    let [step, setStep] = useState(0)
    let [time, setTime] = useState(0)
    let [playagain ,setPlayagain]=useState(false)
    useEffect(() => {
        setPlayagain(false)
        fetch('https://api.startladder.co/api/frontend/tasks')
            .then(res => res.json())
            .then(data => {
                setQuiz(data)
            })
    }, [playagain])
    useEffect(() => {
        if (step > 0) {
            var interval = setInterval(() => {
                setTime(time + 1)
                clearInterval(interval)
            }, 1000);
        }
        if (step===7){
            clearInterval(interval)
        }

    }, [time,step]);
    const playAgain=()=>{
        setPlayagain(true);
        setStep(0);
        setTime(0);
    }
    const startQuiz = () => {
        if(quiz.length<1){
            alert('quiz not loaded')
            return
        }
        setStep(step + 1)
    }
    const handleChange = (e) => {
        let newQuiz = { ...quiz }
        const latest = newQuiz.task_array[step - 1]
        latest.ans = e.target.value
        setQuiz(newQuiz)
        if (e.key === 'Enter') {
            if (latest.ans === latest.answer) {
                latest.isTrue = 'true'
            } else {
                latest.isTrue = 'false'
            }
        }
        console.log(newQuiz);
    }

    const countStep=()=>{
        if(step<7){
            setTimeout(() => {
                setStep(step + 1)
            }, 3000)
        }
    }

    const dynamicJsx = () => {
        if (step === 0) {
            return <Button onClick={startQuiz} style={{ border: '1px solid #fff', color: '#fff', position: 'absolute', top: '45%', left: '40%' }}>Start Quiz</Button>
        } 
        else if(step<7){
            return <Question count={countStep} handleChange={handleChange} step={step} time={time} q={quiz.task_array[step - 1]} />
        }else{
            return <Result play={playAgain} q={quiz.task_array} time={time}/>
        }
    }
    return (
        <Box className='main-box'>
            <div className='quiz'>
                {dynamicJsx()}
            </div>
        </Box>
    );
};

export default Main;