import { Helmet } from "react-helmet-async";
import Categories from "../Categories/Categories";
import ChefRecommend from "../ChefRecommend/ChefRecommend";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Banner from "../Shared/Banner/Banner";
import Testimonials from "../Testimonials/Testimonials";
import React from "react";

const Home = () => {
  //page top on position...............!
  React.useEffect(() => {
    window.scrollTo(100, 100);
  }, []);
  
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home Page</title>
      </Helmet>
      <Banner />
      <Categories />
      <PopularMenu />
      <ChefRecommend />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
