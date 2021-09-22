let count = 1

function workAction() {
    if (count === 4) {
        count = 1
        return { type: `work_${count}` }
    }
    
    count += 1
    return { type: `work_${count}` }
}

function shortBreakAction() {
    return { type: 'short_break' }
}

function longBreakAction() {
    return { type: 'long_break' }
}

export { workAction, shortBreakAction, longBreakAction }
