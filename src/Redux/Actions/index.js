export const incNumber = (payload) => {
    return{
        type: "INCREMENT",
        payload: payload
    }
}
export const decNumber = (payload) => {
    return{
        type: "DECREMENT",
        payload: payload
    }
}

export const addToCart = (payload) => {
    return{
        type: "ADD_TO_CART",
        payload: payload
    }
}

export const updateCart = (payload) => {
    return{
        type: "UPDATE_CART",
        payload: payload
    }
}

export const deleteFromCart = (payload) => {
    return{
        type: "DELETE_FROM_CART",
        payload: payload
    }
}