import Head from "next/head";
import FeaturesSection from "../src/components/homeAuth/featuresSection";
import NewestCategory from "../src/components/homeAuth/newestCategory";

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
            </main>
        </>
    );
};

export default HomeAuth;