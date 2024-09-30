import CartButton from "./CartButton"
export const Product = (posts) => {
  return (
    <div>
      <div>
        <p>{posts.title}</p>
      </div>
      <div>
        <p>{posts.description}</p>
      </div>
      <div>
        <img src= {posts.image}/>
      </div>
      <div>
        <p>${posts.price}</p>
      </div>
      <div>
        <button>
          <CartButton/>
        </button>
      </div>
    </div>
  )
}
