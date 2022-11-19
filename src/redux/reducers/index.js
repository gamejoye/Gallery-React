import { combineReducers } from "redux";
import { favoritePictureReducer } from "./favoritePictureReducer";
import { pictureReducer } from "./pictureReducer";
const reducers = {
    allPictures: pictureReducer,
    favoritePictures: favoritePictureReducer,
}
export const allReducers = combineReducers(reducers);