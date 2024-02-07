import img1 from "../../assets/page5_1.jpeg";

const Converter = () => {
  return (
    <div className="flex flex-row gap-x-40 mx-32 h-screen items-center">
      <div className="">
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
      <div className="drop-shadow-3xl">
        <div className="w-[365px] h-[280px] rounded-t-2xl overflow-hidden">
          <img className="w-full h-full object-cover" src={img1} alt="" />
        </div>
        <div className="h-[200px] rounded-b-2xl flex flex-col gap-y-10 justify-center bg-button">
          <div className=" text-darkred flex justify-center">
            <div className="flex gap-x-5">
              <div>
                <select className="h-10 w-24 text-center rounded-lg focus:outline-none bg-lightyellow">
                  <option value="">Token</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>

              <div className="text-darkred w-full">
                <input
                  className="bg-lightyellow focus:outline-none placeholder-darkred pl-4 h-10 rounded-lg"
                  placeholder="Enter the Amount"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className=" text-darkred flex justify-center">
            <div className="flex gap-x-5">
              <div>
                <select className="h-10 w-24 text-center rounded-lg focus:outline-none bg-lightyellow">
                  <option value="">Token</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>

              <div className="text-darkred w-full">
                <input
                  className="bg-lightyellow focus:outline-none placeholder-darkred pl-4 h-10 rounded-lg"
                  placeholder="Enter the Amount"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Converter;
