import { FaCartPlus } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center bg-violet-300 h-[50px]">
        <div>
          <NavLink to="/">
            <div>
              <img src="" alt="" />
            </div>
          </NavLink>
        </div>
        <div className="flex gap-4 items-center mr-4">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/Cart">
            <FaCartPlus />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
