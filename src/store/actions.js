export const increment = value => ({
        type: 'INCREMENT',
        value
})

export const decrement = value => ({
        type: 'DECREMENT',
        value
})

export const saveNumber = value =>({
        type: 'SAVE_NUMBER',
        value
})

export const deleteNumber = index =>({
        type: 'DELETE_NUMBER',
        index
})

export const reset = () => ({
        type: 'RESET',
        value: {
                count: 0,
                numbers: []
        }
})