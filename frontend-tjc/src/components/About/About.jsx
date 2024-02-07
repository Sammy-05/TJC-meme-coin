import image2 from "../../assets/page2.jpeg";

const About = () => {
  return (
    <div className="flex flex-row gap-x-8 mx-20 h-screen items-center">
      <div className="">
        <img
          className="drop-shadow-2xl flex justify-end items-end"
          src={image2}
          alt=""
        />
      </div>
      <div className="mx-12">
        <div className="text-[40px] text-heading pb-12">
          <h1>Chase the fun with TJC Coin</h1>
        </div>
        <div className="text-text text-[22px]">
          <p>
            Welcome to the world of [Your Crypto Coin Name], where the classic
            chase never ends! Just like the endless antics of Tom and Jerry, our
            cryptocurrency brings you an exciting journey in the digital
            financial world.
          </p>
          <p>
            Animated background with Tom and Jerry in a playful chase, weaving
            through coins and crypto symbols.
          </p>
          <p>
            A brief introduction to the coin, its unique features, and how it
            stands out in the crypto market.
          </p>
          <p>
            Testimonials section with playful, cartoonish fonts, featuring user
            stories shared in the style of Tom and Jerry episodes.
          </p>
        </div>
        
      </div>

      
    </div>
  );
};
export default About;
