import { useState } from "react";
import Navbar from "./Components/Navbar";
import Newsboard from "./Components/Newsboard";
import Newsticker from "./Components/Newsticker";  // Add ticker

const App = () => {
  const [category, setCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Navbar setCategory={setCategory} setSearchQuery={setSearchQuery} />
      <Newsticker category={category} />  {/* News Ticker */}
      <Newsboard category={category} searchQuery={searchQuery} />
    </div>
  );
};

export default App;
