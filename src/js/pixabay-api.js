import axios from 'axios';

const API_KEY = "55028646-8629ed6310cecdce9e4f8a275";
axios.defaults.baseURL = 'https://pixabay.com/api/';

const getImagesByQuery = async (query, page) => {
    try {
        const response = await axios.get("", {
            params: {
                key: API_KEY,
                q: query,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: true,
                page: page,
                per_page: 15,
            }
        });
        return response.data;
    } catch (error) {
        throw error.message;
    }; 
};

export { getImagesByQuery };