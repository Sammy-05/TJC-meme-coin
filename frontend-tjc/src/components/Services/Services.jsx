import img1 from "../../assets/page4_1.jpg";
import img2 from "../../assets/page4_2.jpeg";
import img3 from "../../assets/page4_3.jpg";
const Services = () => {
  return (
    <div className="text-center pt-20">
      <div className="col-span-4 flex flex-col items-center justify-center">
        <div className="text-[40px] text-heading pb-12">
          <h1>Chase the fun with TJC Coin</h1>
        </div>
        <div className="text-text text-[18px] w-3/5">
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
        <div className="flex gap-x-12 pt-20 pb-20">
          <div className="drop-shadow-3xl">
            <div className="w-[365px] h-[420px] rounded-t-lg overflow-hidden ">
              <img className="w-full h-full object-cover" src={img3} alt="" />
            </div>
            <div className="text-xl bg-button py-3 text-white rounded-b-lg">
              <p>WHY WE ARE BETTER</p>
            </div>
          </div>
          <div className="drop-shadow-3xl">
            <div className="w-[365px] h-[420px] rounded-t-lg overflow-hidden">
              <img className="w-full h-full object-cover" src={img2} alt="" />
            </div>
            <div className="text-xl bg-button py-3 text-white rounded-b-lg">
              <p>BENEFITS WITH US</p>
            </div>
          </div>
          <div className="drop-shadow-3xl">
            <div className="w-[365px] h-[420px] rounded-t-lg overflow-hidden">
              <img className="w-full h-full object-cover" src={img1} alt="" />
            </div>
            <div className="text-xl bg-button py-3 text-white rounded-b-lg">
              <p>WHAT WE OFFER</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default Services;
