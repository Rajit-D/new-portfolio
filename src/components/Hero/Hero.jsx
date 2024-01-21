import "./Hero.css";
import pfp from "../../assets/images/pfp.jpeg";

const Hero = () => {
  return (
    <div className="container flex justify-between items-center lg:flex-row lg:p-8">
      <div className="info">
        <div className="name lg:w-[442px] rev-block text-[90px]">
          <span>Rajit Dutta</span>
        </div>
        <div className="intro w-[800px] mt-[20px] text-[20px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque rem
          explicabo sint possimus voluptatem sunt consectetur. Dolorum labore
          quos perferendis delectus omnis aut ipsum voluptatum eveniet
          praesentium porro saepe, sequi maiores, sapiente odio, natus adipisci
          obcaecati commodi quis quibusdam culpa? Minima ratione voluptates
          repellendus nobis, debitis voluptatum architecto inventore culpa.
        </div>
        <div className="button">
          <button className="bg-slate-950 text-white p-4 rounded-xl">
            Resume
          </button>
        </div>
      </div>
      <div className="pfp-socials">
        <div className="pfp">
          <img src={pfp} alt="" className="h-[400px] w-[300px]" />
        </div>
        <div className="socials flex">
          <ul className="mr-2">fb</ul>
          <ul className="mx-2">tw</ul>
          <ul className="mx-2">li</ul>
          <ul className="ml-2">git</ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
