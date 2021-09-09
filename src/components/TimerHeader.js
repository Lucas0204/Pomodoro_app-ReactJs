import React from  'react'
import { useSelector, useDispatch } from 'react-redux'
import stopAction from '../actions/stopAction'
import { workAction, shortBreakAction } from '../actions/periodActions'

export default function TimerHeader() {

    const periodOfTimer = useSelector(state => state.period)

    const dispatch = useDispatch()

    function setPeriodAsWork() {
        if (periodOfTimer !== 'work') {
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

    return (
        <div className="timer-period">
            <button onClick={ setPeriodAsWork } className={`period ${periodOfTimer === 'work' ? 'currently' : ''}`}>Work</button>
            <button onClick={ setPeriodAsShortBreak } className={`period ${periodOfTimer === 'short_break' ? 'currently' : ''}`}>Break</button>
        </div>
    )
}
