const submitTask = (information) => {
    return {
        type: 'SUBMIT',
        value: information,
    }  
}

const deleteTask = () => {
    return {
        type: 'DELETE',
    }
}

const editTask = (information) => {
    return {
        type: 'EDIT',
        value: information,
    }
}