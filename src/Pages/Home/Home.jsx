import Categories from "../Categories/Categories";
import ChefRecommend from "../ChefRecommend/ChefRecommend";
import PopularMenu from "../PopularMenu/PopularMenu";
import Banner from "../Shared/Banner/Banner";

const Home = () => {
    return (
        <>
            <Banner />
            <Categories />
            <PopularMenu />
            <ChefRecommend />
        </>
    );
};

export default Home;