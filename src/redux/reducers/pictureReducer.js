import { ADD_PICTURE, REMOVE_PICTURE, LOAD_PICTURE } from "../constant";
const initial = [];
export const pictureReducer = (state = initial, action) => {
    const {type, payload} = action;
    switch(type) {
        case ADD_PICTURE:
            return [...state, payload];
        case REMOVE_PICTURE:
            return state.filter(picture => picture.id != payload.id);
        case LOAD_PICTURE:
            return payload;
        default:
            return state;
    }
}