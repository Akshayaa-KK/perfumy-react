//Import components

import Navbar from "./Navbar";
import SearchBar from "./Searchbar";
import Products from "./Products";
import About from "./About";
import Footer from "./Footer";

//Fragments are used instead of div

function App() {
    return (
        <>
            <Navbar></Navbar>
            <SearchBar></SearchBar>
            <Products></Products>
            <About></About>
            <Footer></Footer>
        </>
    )
}

export default App