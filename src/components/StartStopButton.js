import React from 'react'
import startAction from '../actions/startAction'
import stopAction from '../actions/stopAction'
import { useSelector, useDispatch } from 'react-redux'

export default function StartStopButton() {

    const dispatch = useDispatch()
    const startOrStopTimer = useSelector(state => state.startOrStop)

    function verifyAction() {
        if (startOrStopTimer === 'start') {
            dispatch(stopAction())
        } else {
            dispatch(startAction())
        }
    }

    return (
        <button onClick={ verifyAction }>{startOrStopTimer.toUpperCase()}</button>
    )
}