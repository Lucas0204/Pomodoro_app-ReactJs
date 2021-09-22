/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { workAction, shortBreakAction, longBreakAction } from '../actions/periodActions'
import stopAction from '../actions/stopAction'

import StartStopButton from './StartStopButton'
import TimerHeader from './TimerHeader'


export default function Timer() {
    const workClock = 25
    const shortBreakClock = 5
    const longBreakClock = 15

    const [ durationInSeconds, setDurationInSeconds ] = useState(workClock)
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
            emitAlert()
            dispatch(stopAction())
            changePeriod()
        }

        const minutes = Math.floor((durationInSeconds % 3600) / 60)
        const seconds = Math.floor(durationInSeconds % 60)

        const formatedMinutes = minutes < 10 ? `0${minutes}` : minutes
        const formatedSeconds = seconds < 10 ? `0${seconds}` : seconds

        setTimer(`${formatedMinutes}:${formatedSeconds}`)
    }, [ durationInSeconds ])

    useEffect(() => {
        if (periodOfTimer.split('_')[0] === 'work') {
            setDurationInSeconds(workClock)
        } else if (periodOfTimer === 'short_break')
            setDurationInSeconds(shortBreakClock)
        else {
            setDurationInSeconds(longBreakClock)
        }
    }, [ periodOfTimer ])

    function startTimer() {  
        setIntervalId(setInterval(() => {
            setDurationInSeconds(duration => duration - 1)
        }, 1000))
    }

    function stopTimer() {
        clearInterval(intervalId)
    }

    function changePeriod() {
        if (periodOfTimer === 'work_1' || periodOfTimer === 'work_2' || periodOfTimer === 'work_3') {
            dispatch(shortBreakAction())
        } else if (periodOfTimer === 'work_4') {
            dispatch(longBreakAction())
        }
        else {
            dispatch(workAction())
        }
    }

    function emitAlert() {
        const audio = new Audio('/alarm-sound.wav')
        audio.play()
    }

    return (
        <main>
            <TimerHeader />
            <div className="timer">
                {timer}
            </div>
            <StartStopButton />
        </main>
    )
}
