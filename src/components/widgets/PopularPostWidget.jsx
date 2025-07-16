import React from 'react';
import BlogV1Data from '../../../public/assets/jsonData/blog/BlogV1Data.json'
import SinglePopularPost from './SinglePopularPost';
import SidebarBlog from '../blog/SidebarBlog';

    // Fetch the 4 most recent articles, sorted by publishedAt descending
    const fetchBlogs = async () => {
        try {
          const res = await fetch(
            'https://funny-virtue-0648592741.strapiapp.com/api/articles?sort=publishedAt:desc&pagination[limit]=4&fields=title,slug,description,publishedAt&populate[cover][fields]=url,alternativeText&populate[author][fields]=name&populate[author][populate][avatar][fields]=url&populate[category][fields]=name',
            { cache: 'no-store' }
          );
          if (!res.ok) {
            const errorData = await res.json();
            throw new Error(JSON.stringify(errorData));
          }
          const data = await res.json();
          return data?.data || [];
        } catch (err) {
          console.error('Error fetching blogs:', err);
          return [];
        }
    };
    
const PopularPostWidget = async ({ blogs }) => {


    return (
        <>
            <div className="widget-categories-box">
                <div className="mb-4 pb-4" style={{ borderBottom: '1px solid #d8d3ce' }}>
                    <h4> <i className="bi bi-graph-up me-2"></i> Trending Post</h4>
                </div>
                <SidebarBlog blogs={blogs ?? await fetchBlogs()}/>
            </div>    
        </>
    );
};

export default PopularPostWidget;