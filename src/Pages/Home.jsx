/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Spinner from "../Components/Spinner";
import { Product } from "../Components/Product";

export const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    return data;
  }

  useEffect(() => {
    let mounted = true;
    fetchProducts().then(data => {
      if(mounted) {
        setPosts(data);
      }
    });
    return () => mounted = false;
  }, []);

  if(posts.length === 0) {
    return <>no procuts found</>
  } else {
    return (
      <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4 m-4">
        {posts.map((post, index) => (
          <Product key={index} post={post} />
        ))}
      </div>
    );
  }
}

// export const Home = () => {
//   const API_URL = "https://fakestoreapi.com/products";
//   const [Loading, setLoading] = useState(false);
//   const [posts, setPosts] = useState([]);

//   async function fetchProductData() {
//     setLoading(true);
//     try {
//       const res = await fetch(API_URL);
//       const data = await res.json();

//       setPosts(data);
//     } catch (error) {
//       console.log("error, page not found!");
//       setPosts([]);
//     }
//     setLoading(false);
//   }

//   useEffect(() => {
//     fetchProductData();
//   }, []);

//   return (
//     <div>
//       {Loading ? (
//         <Spinner />
//       ) : posts.length > 0 ? (
//         <div>
//           {posts.map((post) => {
//             <Product key={posts.id} post={posts} />;
//           })}
//         </div>
//       ) : (
//         <div>
//           <p>No Data Found</p>
//         </div>
//       )}
//     </div>
//   );
// };
