import Cards from "./Cards";
import Information from "./Information";

const Home = () => {
    return (
        <>
            <div className="home-main">
                <Information />
                <Cards />
            </div>
        </>
    );
};

export default Home;