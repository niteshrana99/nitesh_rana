import React, { useState, useEffect } from 'react'
import axios from "axios";
import Card from '../Card/Card';


const Blog = () => {
    const [ blogState, setBlogState ] = useState([]);
    async function getMediumFeed() {
        try {
            const mediumRssFeed = "https://medium.com/feed/@rananitesh99";
            const rssToJsonApi = "https://api.rss2json.com/v1/api.json";
            const data = { params: { rss_url: mediumRssFeed } };
            const response = await axios.get(rssToJsonApi, data);
            setBlogState(response.data.items)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getMediumFeed();
    }, [])
    return (
        <div className="blog">
            {blogState.length && blogState.map(item => (
                 <Card data={item} />
            ))}
           
            {/* {blogState.map(item => (
                <div className="blog_item">
                    <img className="blog_thumbnail" src={item.thumbnail} />
                </div>
            ))} */}
            
        </div>
    )
}

export default Blog
