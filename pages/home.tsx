import Head from "next/head";
import FeaturesSection from "../src/components/homeAuth/featuresSection";
import NewestCategory from "../src/components/homeAuth/newestCategory";
import FavoriteCategory from ".././src/components/homeAuth/favoriteCategory";
import FeaturedCategory from "../src/components/homeAuth/featuredCategory";
import Footer from "../src/components/common/footer";

const HomeAuth = function () {
    return (
        <>
            <Head>
                <title>Onebitflix - Home</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>
            <main>
            <FeaturesSection/>
            <NewestCategory/>
            <FavoriteCategory/>
            <FeaturedCategory />
            <Footer/>
            </main>
        </>
    );
};

export default HomeAuth;