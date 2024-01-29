import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon4.png";
import icon3 from "../../assets/icon5.png";
import icon4 from "../../assets/icon6.png";

export default function How() {
  return (
    <main className="px-5 md:px-20 py-10 flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl md:text-[40px] font-medium text-secondary">
          How It Works
        </h3>
        <p className="md:w-2/3">
          Buying into {`ERET's`} offer of Real Estate Co-Ownership Rights
          -RECORs to commercially viable real estates in the global real estate
          destinations is a straight forward and empowering experience
          researched, designed, developed and sustainably managed to put you in
          control of your economic destiny.
        </p>
      </div>
      <div className="flex flex-col md:grid grid-cols-4 gap-10">
        <Single
          img={icon1}
          title="Explore Our Curated Portfolio"
          desc="Dive into our curated selection of prime real estate properties. Each property is meticulously vetted to offer you diverse investment opportunities."
        />
        <Single
          img={icon2}
          title="Invest with Confidence"
          desc="ERET ensures transparent co-ownership, offering clear insights into risks, returns, and strategy. Confidently navigate and contribute to shared success as a co-owner"
        />
        <Single
          img={icon3}
          title="Monitor Your Portfolio"
          desc="Our intuitive portfolio management tools make it easy to keep tabs on your investments. Receive regular updates on property performance, market trends, and the growth of your portfolio."
        />
        <Single
          img={icon4}
          title="Receive Rental Income"
          desc="Sit back, watch your wealth grow through passive income and capital appreciation. ERET maximizes returns, minimizes complexity."
        />
      </div>
    </main>
  );
}

const Single = ({ img, title, desc }) => {
  return (
    <div className="rounded-xl border border-primary bg-primary-light px-5 py-8 flex justify-center items-center flex-col gap-4 text-center">
      <img src={img} alt="" className="h-16 w-16 mb-2" />
      <h4 className="text-lg text-[#101010] font-medium">{title}</h4>
      <p>{desc}</p>
    </div>
  );
};
