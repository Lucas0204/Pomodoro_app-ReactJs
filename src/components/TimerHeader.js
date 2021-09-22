import React from  'react'
import { useSelector, useDispatch } from 'react-redux'
import stopAction from '../actions/stopAction'
import { workAction, shortBreakAction, longBreakAction } from '../actions/periodActions'

export default function TimerHeader() {

    const periodOfTimer = useSelector(state => state.period)

    const dispatch = useDispatch()

    function setPeriodAsWork() {
        const isWorkPeriod = periodOfTimer.split('_')[0] === 'work' ? true : false 

        if (!isWorkPeriod) {
            dispatch(workAction())
            dispatch(stopAction())
        }
    }

    function setPeriodAsShortBreak() {
        if (periodOfTimer !== 'short_break') {
            dispatch(shortBreakAction())
            dispatch(stopAction())
        }
    }

    function setPeriodAsLongBreak() {
        if (periodOfTimer !== 'long_break') {
            dispatch(longBreakAction())
            dispatch(stopAction())
        }
    }

    return (
        <div className="timer-period">
            <button onClick={ setPeriodAsWork } className={`period ${periodOfTimer.split('_')[0] === 'work' ? 'currently' : ''}`}>Work</button>
            <button onClick={ setPeriodAsShortBreak } className={`period ${periodOfTimer === 'short_break' ? 'currently' : ''}`}>Short</button>
            <button onClick={ setPeriodAsLongBreak } className={`period ${periodOfTimer === 'long_break' ? 'currently' : ''}`}>Long</button>
        </div>
    )
}
