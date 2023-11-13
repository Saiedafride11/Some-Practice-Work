import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useMatch, useNavigate } from "react-router-dom";
import { searched } from "../../redux/features/filter/filterSlice";

const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.filter);
  const [input, setInput] = useState(search);

  const match = useMatch("/");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(input));

    // if (!match) {
    //   navigate("/");
    // }
    if (location.pathname !== "/") {
      navigate("/");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="outline-none border-none mr-2"
        type="search"
        name="search"
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};

export default Search;

// import React from 'react';
// import { Link, useLocation, useParams } from 'react-router-dom';

// function Navigation() {
//   const location = useLocation();
//   const { productId } = useParams();

//   const isProductActive = location.pathname.includes('/product/');
//   const isAboutActive = location.pathname === '/about';
//   const isSaleActive = location.pathname === '/sale';

//   return (
//     <nav>
//       <ul>
//         <li className={isProductActive ? 'active' : ''}>
//           <Link to="/product/1">Product 1</Link>
//         </li>
//         <li className={isProductActive && productId === '2' ? 'active' : ''}>
//           <Link to="/product/2">Product 2</Link>
//         </li>
//         <li className={isAboutActive ? 'active' : ''}>
//           <Link to="/about">About</Link>
//         </li>
//         <li className={isSaleActive ? 'active' : ''}>
//           <Link to="/sale">Sale</Link>
//         </li>
//         {/* Add more menu items as needed */}
//       </ul>
//     </nav>
//   );
// }

// export default Navigation;
