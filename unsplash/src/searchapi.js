import axios from "axios";
const SearchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization:
                "Client-ID ktiU1KKXXuDv0NzVNhnEVaIc7FjNZd5Oz59n_6Hs5no",
        },
        params: {
            query: "restaurant",
        },
    });
    console.log(response.data.results);
    return response.data.results;
};
export default SearchImages;
