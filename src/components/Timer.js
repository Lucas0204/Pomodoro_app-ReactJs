import React from 'react'
import StartStopButton from './StartStopButton'

export default function Timer() {

    return (
        <main>
            <div className="timer">
                25:00
            </div>
            <StartStopButton />
        </main>
    )
}