import { Button } from '@mui/material';
import { Box } from '@mui/system';
import  { useEffect, useState } from 'react'
import Alerts from './Alert';

const Question = (props) => {
    const [solution,setSolution] = useState(false)
    const { q, time, step, handleChange, count } = props;
    const min = parseInt(time / 60)
    const sec = time - min * 60
    
    const handleClick=()=>{
        setSolution(true)
    }
    useEffect(()=>{
        setSolution(false)
    },[step])
    return (
        <Box className='question'>
            <Box sx={{ height: '20vh', px: 3, background: '#fff', display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ margin: '0 10px' }}>
                    <p style={{ color: '#B4ADAD' }}>Topic</p>
                    <p style={{ fontWeight: 'bold' }}>{q.category}</p>
                </div>
                <Box className='timing'>
                    <div>
                        <p style={{ margin: '0px' }}>{min}</p>
                        <p style={{ margin: '0px' }}>min</p>
                    </div>
                    <p style={{ margin: '0px', padding: '0 5px' }}>:</p>
                    <div>
                        <p style={{ margin: '0px' }}>{sec}</p>
                        <p style={{ margin: '0px' }}>sec</p>
                    </div>
                </Box>
            </Box>
            <Box sx={{ height: '20vh', px: 3, background: '#E6FFF8' }}>
                <p style={{ margin: 0, padding: '10px 10px 5px', color: '#B4ADAD' }}>QUESTION {step} of 6</p>
                <p style={{ margin: '0 10px 10px', fontWeight: 'bold' }}>{q.question}</p>
            </Box>
            <Box sx={{ px: 3 }} className='answer'>
                <p style={{ color: 'white' }}>ANSWER</p>
                {
                    q.isTrue ? (
                        <Alerts count={count} isTrue={q.isTrue}></Alerts>
                    ) : (
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <input onKeyPress={(e) => handleChange(e)} className='input-ans' placeholder='Type Answer and press Enter' type={'text'} autoFocus />
                            </div>
                            <div>
                                {
                                    solution ? (
                                        <span>Time Duration on Site</span>
                                    ):(
                                    <>
                                        <span style = {{ color: 'white', fontWeight: 'bold' }}>Stuck ? </span>
                                        <Button onClick={handleClick} style={{ border: '1px solid #fff', color: '#fff' }}> See Solution</Button>
                                    </>
                                    )
                                }
                            </div>
                        </Box>
                    )
                }
            </Box>
        </Box>
    )
}
export default Question;