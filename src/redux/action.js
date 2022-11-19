import { ADD_PICTURE, ADD_FAVORITEPICTURE, REMOVE_FAVORITEPICTURE, REMOVE_PICTURE, LOAD_PICTURE } from "./constant"
import { pictures } from "./data"
export const addPicture = payload => {
    return {
        type: ADD_PICTURE,
        payload
    }
}
export const addFavoritePicture = payload => {
    return {
        type: ADD_FAVORITEPICTURE,
        payload
    }
}
export const removePicture = payload => {
    return {
        type: REMOVE_PICTURE,
        payload
    }
}
export const removeFavoritePicture = payload => {
    return {
        type: REMOVE_FAVORITEPICTURE,
        payload
    }
}
export const loadPicture = (payload) => {
    return {
        type: LOAD_PICTURE,
        payload: payload
    }
}