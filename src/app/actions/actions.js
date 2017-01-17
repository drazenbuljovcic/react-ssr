const ACTIONS = {
    CHANGE_TEXT: 'CHANGE_TEXT'
}

export default {
    addText(text) {
        return {
            type: ACTIONS.CHANGE_TEXT,
            payload: text
        }
    }
}