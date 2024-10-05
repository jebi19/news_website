import { useState } from "react";
import './Navbar.css';

const Navbar = ({ setCategory, setSearchQuery }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(query.trim() === "" ? "" : query); 
    setQuery(""); 
  };

  const handleCategoryClick = (category) => {
    setCategory(category);
    setSearchQuery(""); 
    setQuery("");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" onClick={() => handleCategoryClick("general")}>
          <span className="badge bg-light text-dark">News</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            {["technology", "business", "health", "science", "sports", "entertainment"].map(category => (
              <li className="nav-item" key={category}>
                <div className="nav-link" style={{ cursor: 'pointer' }} onClick={() => handleCategoryClick(category)}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </div>
              </li>
            ))}
          </ul>

          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search News"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
