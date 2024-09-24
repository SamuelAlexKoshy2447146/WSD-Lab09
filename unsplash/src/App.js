import { useState, useEffect } from "react";
import searchText from "./searchapi";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

function App() {
    const [images, setImages] = useState([]);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleName = ({ name, password }) => {
        setName(name);
        setPassword(password);
    };

    const search = async () => {
        const response = await searchText();
        setImages(response);
    };

    useEffect(() => {
        search();
    }, []);

    return (
        <div className="App">
            <SearchBar onSearchSubmit={handleName} />
            <div>Username: {name}</div>
            <div>Password: {password}</div>
            <ImageList images={images} />
        </div>
    );
}

export default App;
