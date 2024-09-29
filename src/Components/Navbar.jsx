import { FaCartPlus } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between bg-violet-300">
        <div>
          <NavLink to="/">
            <div>
              <img src="" alt="" />
            </div>
          </NavLink>
        </div>

        <div>
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
