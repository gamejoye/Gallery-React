import './index.css'
function FavoriteButton({ handleOnClick, picture, iconUrl, children }) {
    return (
        <button onClick={() => handleOnClick(picture)} className='favorite-button'>
            <img src={iconUrl} />
            {children}
        </button>
    )
}
export default FavoriteButton;