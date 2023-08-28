import Footer from "./Components/Footer/Footer";
import Jobs from "./Components/Job/Jobs";
import Navbar from "./Components/NavBar/Navbar";
import Search from "./Components/Search/Search";
import Value from "./Components/Value/Value";

function App() {
  return (
    <div className="mx-auto">
      <Navbar />
      <Search />
      <Jobs />
      <Value />
      <Footer />
    </div>
  );
}

export default App;
