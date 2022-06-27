import React, {useState} from "react";

const Rating = ({addRating, changeRating, onList, rating, rated, onCheck, element}) => {
    const id = Math.random();
    const handleClick = (e) => {
        if (!rated) {
            addRating(e.target.value)
        } else {
            changeRating(e.target.value)
        }
    }
    const [hoverValue, setHoverValue] = useState(0);

    const labelStyle = (value) => ({
        style: {color: rating < value && hoverValue < value ? '#ddd' : '#FFD700'},
        onMouseEnter: () => setHoverValue(value)})

    return (
        <form className="ratingContainer">

            {!onList &&
            <fieldset className="rating" id={id} value={rating}>
                <input type="radio" id={id + "star5"} name="rating" value={5} onChange={handleClick}/>
                <label className = "full" title="5 stars" htmlFor={id + 'star5'} {...labelStyle(5)}> </label>
                <input type="radio" id={id + "star4"} name="rating" value={4} onChange={handleClick}/>
                <label className = "full" title="4 stars" htmlFor={id + 'star4'} {...labelStyle(4)}> </label>
                <input type="radio" id={id + "star3"} name="rating" value={3} onChange={handleClick}/>
                <label className = "full" title="3 stars" htmlFor={id + 'star3'} {...labelStyle(3)}> </label>
                <input type="radio" id={id + "star2"} name="rating" value={2} onChange={handleClick}/>
                <label className = "full" title="2 stars" htmlFor={id + 'star2'} {...labelStyle(2)}> </label>
                <input type="radio" id={id + "star1"} name="rating" value={1} onChange={handleClick}/>
                <label className = "full" title="1 star " htmlFor={id + 'star1'} {...labelStyle(1)}> </label>
            </fieldset>}

            {!rated &&
            <input type="checkbox" name="wishList" title={"Add to your wishlist"} className="AddToWL"
                   checked={onList} onChange={() => {onCheck(element, onList)}}/>}
        </form>
    )
}
export default Rating;