import CartButton from "./CartButton"
import PropTypes from 'prop-types';

export const Product = (props) => {
  return (
    <div className="border-2 rounded-md shadow-sm">
      <div className="h-[125px] flex justify-center my-2">
        <img src={props.post.image} width={100} height={100}/>
      </div>
      <hr />
      <div className="p-2">
        <p className="font-bold text">{props.post.title}</p>
        <p className="text-sm">{props.post.description}</p>
      </div>
      <hr />
      <div className="flex items-center justify-between p-2">
        <p className="text-green-500 font-semibold">${props.post.price}</p>
        <CartButton/>
      </div>
    </div>
  )
}

Product.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};