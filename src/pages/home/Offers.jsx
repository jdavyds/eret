import { FaMapMarkerAlt } from "react-icons/fa";
import offer1 from "../../assets/offers/offer1.png";
import offer2 from "../../assets/offers/offer2.png";
import offer3 from "../../assets/offers/offer3.png";
import offer4 from "../../assets/offers/offer4.png";
import { Btn } from "../../utils/Button";

export default function Offers() {
  return (
    <main className="py-10 flex flex-col gap-10" id="own">
      <div className="px-5 md:px-20 flex flex-col gap-4">
        <h3 className="text-2xl md:text-[40px] font-medium text-secondary">
          REAL ESTATE Co-Ownership Rights Offers
        </h3>
        <p className="md:w-2/3">
          At ERET, we are committed to revolutionizing your real estate
          investment experience, offering a unique blend of transparency,
          diversity, and financial empowerment.
        </p>
      </div>
      <div className="pl-5 md:pl-20 flex gap-5 md:gap-10® overflow-x-scroll snap">
        <Single
          img={offer1}
          name="Property Name"
          slug="/share/river-plaza-and-mall"
          location="Abuja Nigeria"
          text="Investing with ERET is a straightforward and empowering experience designed to put you in control of your financial destiny."
        />
        <Single
          img={offer2}
          name="Property Name"
          slug="/share/river-plaza-and-mall"
          location="Abuja Nigeria"
          text="Investing with ERET is a straightforward and empowering experience designed to put you in control of your financial destiny."
        />
        <Single
          img={offer3}
          name="Property Name"
          slug="/share/river-plaza-and-mall"
          location="Abuja Nigeria"
          text="Investing with ERET is a straightforward and empowering experience designed to put you in control of your financial destiny."
        />
        <Single
          img={offer4}
          name="Property Name"
          slug="/share/river-plaza-and-mall"
          location="Abuja Nigeria"
          text="Investing with ERET is a straightforward and empowering experience designed to put you in control of your financial destiny."
        />
      </div>
    </main>
  );
}

const Single = ({ img, name, location, text, slug }) => {
  return (
    <div className="relative w-[90%] min-w-[90%] md:w-[30%] md:min-w-[30%]">
      <img src={img} alt="" className="w-full h-full md:block hidden" />
      <div className="flex flex-col gap-3 md:absolute top-0 left-0 bg-white w-full h-full md:opacity-0 md:hover:opacity-100 transition-all duration-700 ease-in-out">
        <img
          src={img}
          alt=""
          className="w-full rounded-2xl object-cover h-1/2"
        />
        <h4 className="text-lg text-secondary font-medium">{name}</h4>
        <span className="flex gap-1 items-center">
          <FaMapMarkerAlt /> {location}
        </span>
        <p>{text}</p>
        <Btn name="Own a RECORs Share" slug={slug} style="w-full" />
      </div>
    </div>
  );
};
