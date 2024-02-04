import Teachers from "./Teachers";
import Video from "./Video";
import Information from "./Information";

const About = () => {
  return (
    <>
      <div className="about-main">
        <Information />
        <Video />
        <Teachers />
      </div>
    </>
  );
};

export default About;