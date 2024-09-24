import { useState } from "react";

const SearchBar = ({ onSearchSubmit }) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const handleName = (event) => {
        setName(event.target.value);
        console.log(event.target.value);
    };
    const handlePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ name, password });
        onSearchSubmit({ name, password });
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    Enter Username: <input onChange={handleName} />
                </div>
                <div>
                    Enter Password:{" "}
                    <input onChange={handlePassword} type="password" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SearchBar;
