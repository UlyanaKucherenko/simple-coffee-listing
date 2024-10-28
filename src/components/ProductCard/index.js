import "./index.css";
import starGold from "../../images/Star_fill.svg";
import starGray from "../../images/Star.svg";

function ProductCard({
  id,
  available,
  imageUrl,
  name,
  popular,
  price,
  rating,
  votes,
}) {
  return (
    <li className="product">
      <div className="imageWrap">
        {popular && <div className="popular">popular</div>}
        <img src={imageUrl} alt="" className="image" />
      </div>

      <div className="info">
        <div className="infoRow">
          <div className="name">{name} </div>
          <div className="price"> {price}</div>
        </div>
        <div className="infoRow">
          {rating ? (
            <div className="ratingVotes">
              <img src={starGold} alt="" className="star" />
              <p className="rating">{rating}</p>
              <p className="votes">({votes} votes)</p>
            </div>
          ) : (
            <div className="ratingVotes">
              <img src={starGray} alt="" className="star" />
              <div className="noRatings">No ratings</div>
            </div>
          )}
          <div className="available"> {available ? "" : "Sold out"}</div>
        </div>
      </div>
    </li>
  );
}

export default ProductCard;
