import { useDispatch, useSelector } from "react-redux";
import Picture from "../../pages/Picture";
import FavoriteButton from "../../pages/FavoriteButton";
import { removeFavoritePicture, addPicture } from "../../redux/action";
import { selectAllFavoritePicture } from "../../redux/selectors";
function FavoritePictures(props) {
    const allFavoritesPictures = useSelector(selectAllFavoritePicture);
    const dispatch = useDispatch();
    const handleRemoveFavorite = (picture) => {
        dispatch(removeFavoritePicture(picture));
        dispatch(addPicture(picture));
    }
    return (
        <div className="pictures-container">
            {allFavoritesPictures.map((picture) =>
                <Picture picture={picture} key={picture.id}>
                    <FavoriteButton
                        handleOnClick={handleRemoveFavorite}
                        picture={picture}
                        iconUrl=''
                    >移除喜欢
                    </FavoriteButton>
                </Picture>
            )}
        </div>
    )
}
export default FavoritePictures;