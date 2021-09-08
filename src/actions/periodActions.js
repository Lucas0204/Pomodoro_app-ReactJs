function workAction() {
    return { type: 'work' }
}

function shortBreakAction() {
    return { type: 'short_break' }
}

function longBreakAction() {
    return { type: 'long_break' }
}

export { workAction, shortBreakAction, longBreakAction }
