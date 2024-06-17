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
          RECORs, or Real Estate Co-Ownership Rights, transform property
          ownership by allowing investors to acquire fractional ownership stakes
          in real estate assets. Governed by Transparent-Responsible Dealings
          (TRD) standards, the market ensures inclusivity through verified
          RECORs Brokers. Investors engage in trading and exchanging these
          rights, fostering portfolio diversification and granting access to
          premium properties with lower financial thresholds. This transparent
          and regulated system empowers investors to navigate the market
          confidently, driving participation and fostering a dynamic ecosystem.
        </p>
      </div>
      <div className="flex flex-col md:grid grid-cols-4 gap-10">
        <Single
          img={icon1}
          title="Explore Our RECORs Market Compliant Real Estate Portfolio"
          desc="Each property is meticulously vetted to provide you with a diverse array of investment opportunities."
        />
        <Single
          img={icon2}
          title="Buy in and Buy out RECORs with Confidence!"
          desc="ERET ensures transparent co-ownership, offering clear insights into risks, returns, and strategy. Confidently navigate and contribute to shared success as a co-owner."
        />
        <Single
          img={icon3}
          title="Monitor Your Portfolio with Ease!"
          desc=" Our intuitive tools make managing your investments a breeze. Stay informed, track performance, and make informed decisions effortlessly. Start optimizing your portfolio today!"
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
