import React from 'react'
import { GlobalStyles } from './styles/styles'
import Timer from './components/Timer'

import { startOrStopTimer } from './reducers/startOrStopTimer'
import { timerPeriod } from './reducers/timerPeriod'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'


export default function App() {

    const reducers = combineReducers({ 
        startOrStop: startOrStopTimer,
        period: timerPeriod
    })

    const store = createStore(reducers)

    return (
        <Provider store={store}>
            <GlobalStyles>
                <header>
                    <h1>Pomodoro Timer</h1>
                </header>
                <Timer />
            </GlobalStyles>
        </Provider>
    )
}
