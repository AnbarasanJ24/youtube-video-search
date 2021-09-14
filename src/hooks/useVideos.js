import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);


    const search = async (searchTerm) => {
        const reponse = await youtube.get('/search', {
            params: {
                q: searchTerm
            }
        })
        setVideos(reponse.data.items);
    }

    return [videos, search];

};

export default useVideos;