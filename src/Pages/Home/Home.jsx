import Categories from "../Categories/Categories";
import PopularMenu from "../PopularMenu/PopularMenu";
import Banner from "../Shared/Banner/Banner";

const Home = () => {
    return (
        <>
            <Banner />
            <Categories />
            <PopularMenu />
        </>
    );
};

export default Home;