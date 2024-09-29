/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Spinner from "../Components/Spinner";
import { Product } from "../Components/Product";

export const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [Loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);
    } catch (error) {
      console.log("error, page not found!");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      {
        Loading ? <Spinner/> :
        posts.length > 0 ?
        (<div>
          {
             posts.map( (post) => {
              <Product key = {posts.id} post = {posts}/>
            } )
          }
        </div>) :
        <div>
          <p>No Data Found</p>
        </div>
      }
    </div>
  )
};
