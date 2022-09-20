import Head from "next/head";
import FeaturesSection from "../src/components/homeAuth/featuresSection";

const HomeAuth = function () {
    return (
        <>
            <Head>
                <title>Onebitflix - Home</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>
            <main>
            <FeaturesSection/>
            </main>
        </>
    );
};

export default HomeAuth;