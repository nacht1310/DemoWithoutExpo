export const addCardAction = (data) => {
    return {
        type: 'addCard',
        payload: data
    }
}
export const deleteCardAction = (index) => {
    return {
        type: 'deleteCard',
        atIndex: index,
    }
}