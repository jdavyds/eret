import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";

export default function Value() {
  return (
    <main className="px-5 md:px-20 py-10 flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl md:text-[40px] font-medium text-secondary">
          Our Value Proposition
        </h3>
        <p className="md:w-2/3">
          At ERET, we are committed to revolutionizing your real estate
          investment experience, offering a unique blend of transparency,
          diversity, and financial empowerment.
        </p>
      </div>
      <div className="flex flex-col md:grid grid-cols-3 gap-10">
        <Single
          img={icon1}
          title="Diverse Investment Portfolio"
          desc="Embark on a journey with ERET, where we meticulously curate a diverse selection of commercial properties to redefine your business success. Our portfolio is a showcase of carefully chosen opportunities, ranging from dynamic urban centers to strategic business districts, ensuring a tailored fit for a multitude of business needs."
        />
        <Single
          img={icon2}
          title="Co-Ownership for Shared Success"
          desc="Become part of an innovative community at ERET, where forward-thinking businesses converge to unlock the transformative power of co-ownership. ERET's platform is a dynamic space where a coalition of businesses collaboratively owns commercial properties, creating a synergistic environment for shared success and unprecedented growth."
        />
        <Single
          img={icon3}
          title="Security and Peace of Mind"
          desc="Your financial security is our top priority. ERET employs robust security measures to protect your investments and personal information. Rest easy knowing that our platform is designed with your peace of mind in mind. We prioritize the security of your assets as much as you do."
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
