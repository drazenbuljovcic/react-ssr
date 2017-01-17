const ACTIONS = {
    ADD_TEXT: 'ADD_TEXT'
}

export default actions = {
    addText(text) {
        return {
            type: ACTIONS.ADD_TEXT,
            payload: text
        }
    }
}