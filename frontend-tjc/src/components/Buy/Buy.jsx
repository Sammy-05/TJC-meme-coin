import img1 from "../../assets/page6_1.jpg";
import logo from "../../assets/logo.png";
const Buy = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-x-20 mx-32 h-screen items-center">
        <div className="drop-shadow-3xl w-[590px] h-[420px] rounded-lg overflow-hidden ">
          <img className="w-full h-full object-cover" src={img1} alt="" />
        </div>
        <div className="w-1/2">
          <div className="text-[40px] text-heading pb-6 ">
            <h1>Presell Crypto</h1>
          </div>
          <div className="text-text text-[22px]">
            <p>
              Welcome to the world of [Your Crypto Coin Name], where the classic
              chase never ends! Just like the endless antics of Tom and Jerry,
              our cryptocurrency brings you an exciting journey in the digital
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
              Testimonials section with playful, cartoonish fonts, featuring
              user stories shared in the style of Tom and Jerry episodes.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6">
        <div className="col-span-1"></div>
        <div className="col-span-4 bg-button rounded-2xl">
          <div className="grid grid-cols-5 mx-20">
            <div className="col-span-3 flex flex-col gap-y-10 justify-center">
              <div className="text-[40px] text-lightyellow">
                <h1>Buy Crypto Coins</h1>
              </div>
              <div className="text-darkred">
                <input
                  className="w-[70%] bg-lightyellow focus:outline-none placeholder-darkred pl-4 h-10 rounded-lg"
                  placeholder="Enter the Amount"
                  type="text"
                />
              </div>
              <div className="flex gap-x-6">
                <select className="h-10 w-[20%] text-center rounded-lg focus:outline-none bg-lightyellow text-darkred">
                  <option value="">Token</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>

                <input
                  className="w-[45%] bg-lightyellow focus:outline-none placeholder-darkred pl-4 h-10 rounded-lg"
                  placeholder="Enter the Amount"
                  type="text"
                />
              </div>
              <div className="flex items-center justify-center w-[136px] h-[46px] rounded-lg bg-text text-lightyellow">
                <button>Buy Coins</button>
              </div>
            </div>
            <div className="col-span-2">
              <img
                className="drop-shadow-3xl scale-75 flex justify-end items-end"
                src={logo}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="col-span-1"></div>
      </div>
    </div>
  );
};
export default Buy;
