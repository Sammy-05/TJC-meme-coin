import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="bg-text mt-40">
      <div className="grid grid-cols-3 mx-32 py-10">
        <div className="col-span-1">
          <img
            className="drop-shadow-3xl w-2/3 flex justify-end items-end"
            src={logo}
            alt=""
          />
        </div>
        <div className="col-span-1">
          <h1 className="text-[40px] text-lightyellow pb-8">Important Links</h1>
          <div className="text-[18px] text-lightyellow flex flex-col gap-y-5">
            <p>Heading 1</p>
            <p>Heading 1</p>
            <p>Heading 1</p>
            <p>Heading 1</p>
            <p>Heading 1</p>
          </div>
        </div>
        <div className="col-span-1">
          <h1 className="text-[40px] text-lightyellow pb-8">Contact Us</h1>
          <div className="text-[18px] text-lightyellow flex flex-col gap-y-10">
            <p>
              If you have any questions or concerns, please feel free to reach
              out to our team: Email: turbotoadtoken@gmail.com
            </p>
            <p>Email: xyz@gmail.com</p>
          </div>
        </div>
      </div>
      <p className="text-[14px] text-white flex text-center pt-5 mx-40 pb-5">
        Welcome to the world of [Your Crypto Coin Name], where the classic chase
        never ends! Just like the endless antics of Tom and Jerry, our
        cryptocurrency brings you an exciting journey in the digital financial
        world. - Welcome to the world of [Your Crypto Coin Name]
      </p>
    </div>
  );
};
export default Footer;
