import Categories from "../Categories/Categories";
import ChefRecommend from "../ChefRecommend/ChefRecommend";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Banner from "../Shared/Banner/Banner";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <>
            <Banner />
            <Categories />
            <PopularMenu />
            <ChefRecommend />
            <Featured />
            <Testimonials />
        </>
    );
};

export default Home;