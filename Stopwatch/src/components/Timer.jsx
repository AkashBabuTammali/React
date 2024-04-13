import React, { useEffect, useRef, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { COUNTDOWN, COUNTDOWNATZERO, CREATELAP, DECREMENT, INCREMENT, REMOVELAP, RESET, RESETLAPS } from '../actions/actions'
import Button from './Button'
import Label from './Label'

function Timer() {
    const time = useSelector((state)=>state.tmr.time)
    const seconds = useSelector((state)=>state.tmr.seconds)
    const laps = useSelector((state)=>state.lpr.laps)
    const dispatch = useDispatch()
    const [timer,setTimer] = useState(0)
    const secRef = useRef(seconds)

    useEffect(()=>{
        secRef.current = seconds
    },[seconds])

    const timeFormatter = (time)=>{
		let { h, m, s } = time;

		if (h.toString().length < 2) h = `0${h}`;

		if (m.toString().length < 2) m = `0${m}`;

		if (s.toString().length < 2) s = `0${s}`;

		return { h, m, s };
	}
    const { h, m, s } = timeFormatter(time);
    

    const secondsToTime = (secs)=>{
        let h = Math.floor(secs/(60*60))
        let divisor_for_minutes = secs % (60*60)
        let m = Math.floor(divisor_for_minutes/60)
        let s = divisor_for_minutes%60
        return {
            h: h,
            m: m,
            s: s
        }
    }

    const incTimer = ()=>{
        dispatch({
            type: INCREMENT,
            secToTime: secondsToTime
        })
    }

    const decTimer = ()=>{
        if(seconds >= 60)
            dispatch({
                type: DECREMENT,
                secToTime: secondsToTime
            })
    }

    const startTimer = ()=>{
        if(timer===0 && seconds>0)
            setTimer(setInterval(countDown, 1000))
    }

    const countDown = ()=>{
        dispatch({
            type: COUNTDOWN,
            secToTime: secondsToTime
        })
        if(secRef.current === 0){
            clearInterval(timer)
            dispatch({
                type: COUNTDOWNATZERO
            })
        }
    }
    const stopTimer = ()=>{
        if(timer!==0 && seconds!==0){
            clearInterval(timer)
            setTimer(0)
        }
    }
    const lapTimer = ()=>{
        if(timer!==0 && seconds!==0)
        dispatch({
            type: CREATELAP,
            time: time
        })
    }
    const resetTimer = ()=>{
        dispatch({
            type: RESET
        })
        dispatch({
            type: RESETLAPS
        })
        if(timer!==0){
            clearInterval(timer)
            setTimer(0)
        }
    }
    let lapsArr = []
    if (laps.length !== 0){
        lapsArr = laps.map((lap, id) => {
            let { h, m, s } = timeFormatter(lap);
            return (
                <Label
                    clicked={() => dispatch({
                        type: REMOVELAP,
                        id: id 
                    })}
                    key={id}
                    lapTime={`${h}:${m}:${s}`}
                />
            );
        });
    }  
    return (
        <>
            <div className="container mt-4 flex flex-col">
                <div className="mx-auto py-4">
                    <span className="text-6xl">
                        {h}:{m}:{s}
                    </span>
                </div>
                <div className="mx-auto py-6 mt-4 flex flex-row space-x-5">
                    <Button clicked={incTimer}>+</Button>
                    <Button clicked={startTimer}>Start</Button>
                    <Button clicked={stopTimer}>Stop</Button>
                    <Button clicked={lapTimer}>Lap</Button>
                    <Button clicked={resetTimer}>Reset</Button>
                    <Button clicked={decTimer}>-</Button>
                </div>
            </div>
            <div className="container py-6">{lapsArr}</div>
        </>
    )
}

export default Timer