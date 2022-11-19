import { ADD_FAVORITEPICTURE, REMOVE_FAVORITEPICTURE } from "../constant";
const initial = [];
export const favoritePictureReducer = (state = initial, action) => {
    const {type, payload} = action;
    switch(type) {
        case ADD_FAVORITEPICTURE:
            return [...state, payload];
        case REMOVE_FAVORITEPICTURE:
            return state.filter(picture => picture.id != payload.id);
        default:
            return state;
    }
}