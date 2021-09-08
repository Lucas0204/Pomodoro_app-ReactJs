/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StartStopButton from './StartStopButton'
import { workAction, shortBreakAction, longBreakAction } from '../actions/periodActions'
import stopAction from '../actions/stopAction'

export default function Timer() {

    const twentyFiveMinutesInSeconds = 10

    const [ durationInSeconds, setDurationInSeconds ] = useState(twentyFiveMinutesInSeconds)
    const [ intervalId, setIntervalId ] = useState()
    const [ timer, setTimer ] = useState('')

    const startOrStopTimer = useSelector(state => state.startOrStop)
    const periodOfTimer = useSelector(state => state.period)

    const dispatch = useDispatch()

    useEffect(() => {
        if (startOrStopTimer === 'start') {
            startTimer()
        } else {
            stopTimer()
        }
    }, [ startOrStopTimer ])

    useEffect(() => {
        if (durationInSeconds === 0) {
            dispatch(stopAction())
            changePeriod()
        }

        const minutes = Math.floor((durationInSeconds % 3600) / 60)
        const seconds = Math.floor(durationInSeconds % 60)

        const formatedMinutes = minutes < 10 ? `0${minutes}` : minutes
        const formatedSeconds = seconds < 10 ? `0${seconds}` : seconds

        setTimer(`${formatedMinutes}:${formatedSeconds}`)
    }, [ durationInSeconds ])

    function startTimer() {  
        setIntervalId(setInterval(() => {
            setDurationInSeconds(duration => duration - 1)
        }, 1000))
    }

    function stopTimer() {
        clearInterval(intervalId)
    }

    function changePeriod() {
        if (periodOfTimer === 'work') {
            dispatch(shortBreakAction())
            setDurationInSeconds(20)
        } else {
            dispatch(workAction())
            setDurationInSeconds(twentyFiveMinutesInSeconds)
        }
    }

    return (
        <main>
            <div className="timer-period">
                <div className={`period ${periodOfTimer === 'work' ? 'currently' : ''}`}>Work</div>
                <div className={`period ${periodOfTimer === 'short_break' ? 'currently' : ''}`}>Break</div>
            </div>
            <div className="timer">
                {timer}
            </div>
            <StartStopButton />
        </main>
    )
}
