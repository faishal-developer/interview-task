import { Button } from '@mui/material';
import React from 'react';

const Result = (props) => {
    const {q,time,play} = props
    const right = q.filter((p,i)=>p.isTrue === 'true')
    const accuracy = parseInt(right.length*100/q.length);
    const accuracyStr = accuracy.toFixed(2)
    const avgtime = time/q.length
    const avgtimestr = avgtime.toFixed(2) 
    return (
        <div style={{ position: 'absolute', top: '30%', left: '30%',color:'white',fontWeight:'bold'}}>
            <div style={{display:'flex'}}>
                <div style={{padding:'20px'}}>
                    <p>{accuracyStr}%</p>
                    <p>Accuracy</p>
                </div>
                <div style={{padding:'20px'}}>
                    <p>{avgtimestr}s</p>
                    <p>Avg Time</p>
                </div>
            </div>
            <Button onClick={play} style={{border:'1px solid white',color:'white',margin:'0 20px'}}>Play Again</Button>
        </div>
    );
};

export default Result;