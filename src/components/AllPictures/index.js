import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FavoriteButton from "../../pages/FavoriteButton";
import Picture from "../../pages/Picture";
import { loadPicture, addFavoritePicture, removePicture } from "../../redux/action";
import { selectAllPicture } from "../../redux/selectors";
import { loadPictureFromDB } from "../../utils/api/axios";
import './index.css'
function AllPictures(props) {
    const allPictures = useSelector(selectAllPicture);
    const dispatch = useDispatch();
    const firstLoadFicture = () => {
        loadPictureFromDB(dispatch, loadPicture);
    }
    const handleAddFavorite = (picture) => {
        dispatch(addFavoritePicture(picture));
        dispatch(removePicture(picture));
    }
    useEffect(firstLoadFicture, []);
    return (
        <div className="pictures-container">
            {allPictures.map((picture) =>
                <Picture picture={picture} key={picture.id}>
                    <FavoriteButton
                        handleOnClick={handleAddFavorite}
                        picture={picture}
                        iconUrl=''
                    >添加到我喜欢
                    </FavoriteButton>
                </Picture>
            )}
        </div>
    )
}
export default AllPictures;