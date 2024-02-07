const Episode = () => {
  return (
    <div className="text-center grid grid-cols-6 ">
      <div className=" col-span-1"></div>
      <div className="col-span-4 flex flex-col items-center justify-center">
        <div className="text-[40px] text-heading pb-12">
          <h1>Chase the fun with TJC Coin</h1>
        </div>
        <div className="text-text text-[18px]">
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
        <div className="w-4/5 pt-12">
          <iframe
            className="w-full h-[60vh]"
            src="https://www.youtube.com/embed/VIDEO_ID_HERE"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="col-span-1"></div>
    </div>
  );
};
export default Episode;
