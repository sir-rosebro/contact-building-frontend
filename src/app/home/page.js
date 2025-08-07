import AboutV1 from '@/src/components/about/AboutV1';
import FeatureV1 from '@/src/components/feature/FeatureV1';
import FooterV1 from '@/src/components/footer/FooterV1';
import Top from '@/src/components/home/Top';
import ServiceAreaMap from '@/src/components/ServiceMap';
import WorkProgressV1 from '@/src/components/progress/WorkProgressV1';
import ServiceV3 from '@/src/components/service/ServiceV3';
import NewBlog from '@/src/components/blog/NewBlog';
import ChatWidget from '@/src/components/ChatWidget/ChatWidget';


export const metadata = {
    title: "Home - Euildint Construction Building NextJS Template"
}

// Fetch the 4 most recent articles, sorted by publishedAt descending
const fetchBlogs = async () => {
    try {
      const res = await fetch(
        'https://funny-virtue-0648592741.strapiapp.com/api/articles?sort=publishedAt:desc&pagination[limit]=5&fields=title,slug,description,publishedAt&populate[cover][fields]=url,alternativeText&populate[author][fields]=name&populate[author][populate][avatar][fields]=url&populate[category][fields]=name',
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

const Home = async () => {
    const blogs = await fetchBlogs();
    return (
        <>
            <ChatWidget/>
            <Top/>
            <FeatureV1 />
            <AboutV1 />
            <ServiceAreaMap/>
            <ServiceV3/>
            <WorkProgressV1 />
            <NewBlog  blogs={blogs}/> 
            <FooterV1 />
        </>
    );
};

export default Home;