import React, { useEffect, useState } from 'react'
import startAction from '../actions/startAction'
import stopAction from '../actions/stopAction'
import { useSelector, useDispatch } from 'react-redux'

export default function StartStopButton() {

    const [ buttonAction, setButtonAction ] = useState('START')
    
    const startOrStopTimer = useSelector(state => state.startOrStop)
    
    const dispatch = useDispatch()

    function verifyAction() {
        if (startOrStopTimer === 'start') {
            // setButtonAction('STOP')
            dispatch(stopAction())
        } else {
            dispatch(startAction())
            // setButtonAction('START')
        }
    }

    useEffect(() => {
        if (startOrStopTimer === 'start') {
            setButtonAction('STOP')
        } else {
            setButtonAction('START')
        }
    }, [ startOrStopTimer ])

    return (
        <button onClick={ verifyAction }>{buttonAction}</button>
    )
}
