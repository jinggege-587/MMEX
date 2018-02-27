function isEmptyObject(obj) {
    for (let key in obj) {
        if(obj.hasOwnProperty(key)){
            return false;
        }
    }
    return true;
}

export const getUser = state => {
    return isEmptyObject(state.user.user)
}


