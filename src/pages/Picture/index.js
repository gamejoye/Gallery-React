import './index.css'
function Picture({ picture, children }) {
    const handleOnMouseEntry = e => {
        const favoriteButton = e.currentTarget.children[1];
        if(favoriteButton === null) return;
        favoriteButton.style.visibility = 'visible';
    }
    const handleOnMouseLeave = e => {
        const favoriteButton = e.currentTarget.children[1];
        if(favoriteButton === null) return;
        favoriteButton.style.visibility = 'hidden';
    }
    return (
        <div key={picture.id} className="picture"
            onMouseEnter={e => handleOnMouseEntry(e)}
            onMouseLeave={e => handleOnMouseLeave(e)}
        >
            <div className='picture-container' >
                <img src={picture.url} />
            </div>
            {children}
        </div>
    )
}
export default Picture;