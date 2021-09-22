function timerPeriod(state = 'work_1', action) {

    switch (action.type) {
        case 'work_1':
            return 'work_1'

        case 'work_2':
            return 'work_2'

        case 'work_3':
            return 'work_3'

        case 'work_4':
            return 'work_4'

        case 'short_break':
            return 'short_break'

        case 'long_break':
            return 'long_break'
            
        default:
            return state
    }
}

export { timerPeriod }