import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import ScrollToTop from "../../layout/Scroll";
import Contact from "../home/Contact";
import Offers from "../home/Offers";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { shares } from "./info";
import { FaHome, FaMapMarkerAlt } from "react-icons/fa";
import sh1 from "../../assets/sh1.png";
import sh2 from "../../assets/sh2.png";
import sh3 from "../../assets/sh3.png";
import sh4 from "../../assets/sh4.png";

export default function Test() {
  let params = useParams();
  const [info, setInfo] = useState({});
  useEffect(() => {
    shares.filter((detail) => {
      if (detail.slug === params.id) {
        setInfo(detail);
      }
    });
  }, [params.id]);

  return (
    <main className="flex flex-col">
      <ScrollToTop />
      <Header />
      <div className="px-5 md:px-20 py-10 md:py-20 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h4 className="text-2xl md:text-[48px] text-secondary font-medium">
            {info?.name}
          </h4>
          <span className="flex md:text-lg font-medium gap-1 items-center">
            <FaMapMarkerAlt /> {info?.location}
          </span>
        </div>
        <div className="flex flex-col md:grid grid-cols-2 gap-5 md:gap-10">
          <img
            src={info?.img1}
            alt=""
            className="w-full object-cover rounded-xl h-[60vw] md:h-full"
          />
          <figure className="grid grid-cols-2 md:flex flex-col gap-5 md:gap-10 h-full w-full">
            <img src={info?.img2} alt="" className="w-full object-cover rounded-xl" />
            <img src={info?.img3} alt="" className="w-full object-cover rounded-xl" />
          </figure>
        </div>
      </div>
      <main className="px-5 md:px-20 py-10 flex flex-col md:grid grid-cols-[2fr_1fr] gap-10">
        <div className="border rounded-xl p-5 md:p-10 flex flex-col gap-5 md:gap-10">
          <div className="flex flex-col gap-4">
            <h4 className="text-xl md:text-2xl text-secondary font-medium">
              Property Description
            </h4>
            <p>{info?.description}</p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-xl md:text-2xl text-secondary font-medium">
              Property Amenities
            </h4>
            <div className="flex gap-2 flex-wrap justify-between">
              <nav className="flex gap-3 min-w-fit items-center">
                <img src={sh1} alt="" className="w-10 h-10" />
                <div className="flex flex-col gap-1">
                  <span>Price</span>
                  <b className="text-lg">{info?.price}</b>
                </div>
              </nav>
              <nav className="flex gap-3 min-w-fit items-center">
                <img src={sh2} alt="" className="w-10 h-10" />
                <div className="flex flex-col gap-1">
                  <span>Square Meters</span>
                  <b className="text-lg">{info?.square}</b>
                </div>
              </nav>
              <nav className="flex gap-3 min-w-fit items-center">
                <img src={sh3} alt="" className="w-10 h-10" />
                <div className="flex flex-col gap-1">
                  <span>Rooms</span>
                  <b className="text-lg">{info?.rooms}</b>
                </div>
              </nav>
              <nav className="flex gap-3 min-w-fit items-center">
                <img src={sh4} alt="" className="w-10 h-10" />
                <div className="flex flex-col gap-1">
                  <span>Floor</span>
                  <b className="text-lg">{info?.floors}</b>
                </div>
              </nav>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-xl md:text-2xl text-secondary font-medium">
              Investment Details
            </h4>
            <div className="flex flex-col md:grid grid-cols-2 gap-5">
              <div className="flex flex-col border-b pb-4 gap-2">
                <span>Min Invest Amount</span>
                <b className="text-lg">{info?.min}</b>
              </div>
              <div className="flex flex-col border-b pb-4 gap-2">
                <span>Rental Rate</span>
                <b className="text-lg">{info?.rate}</b>
              </div>
              <div className="flex flex-col border-b pb-4 gap-2">
                <span>Property Type</span>
                <b className="text-lg">{info?.type}</b>
              </div>
              <div className="flex flex-col border-b pb-4 gap-2">
                <span>Target Duration</span>
                <b className="text-lg">{info?.duration}</b>
              </div>
              <div className="flex flex-col  gap-2 col-span-2">
                <span>Contact Rep</span>
                <b className="text-lg">{info?.rep}</b>
              </div>
            </div>
          </div>
        </div>
        <Form />
      </main>
      <Offers />
      <Contact />
      <Footer />
    </main>
  );
}

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    name: "",
    phone: "",
    email: "",
    country: "",
    address: "",
    amount: "",
    recors: "",
  });
  const [sent, setSent] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    fetch("https://formsubmit.co/ajax/info@eret.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: state.name,
        email: state.email,
        phone: state.phone,
        country: state.country,
        address: state.address,
        amount: state.amount,
        NoOfRecors: state.recors,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSent(true);
        setLoading(false);
        setState({
          first: "",
          phone: "",
          email: "",
          country: "",
          address: "",
          amount: "",
          recors: "",
        });
      })
      .catch((error) => console.log(error));
  }

  return (
    <form
      className="flex flex-col gap-5 md:gap-7 p-5 md:p-10 bg-primary-light border border-secondary border-opacity-40 rounded-xl h-full w-full"
      onSubmit={handleSubmit}
    >
      {sent && (
        <div className="flex flex-col gap-8 text-center items-center justify-center mt-10">
          <b className="text-2xl md:text-[28px] text-secondary">THANK YOU!!</b>
          <p className="">Thank you for investing with us.</p>
        </div>
      )}
      {!sent && (
        <>
          <b className="text-xl md:text-[28px] text-secondary">
            <FaHome className="inline" /> Own A RECORs Share
          </b>
          <label className="flex flex-col gap-2 w-full">
            <input
              type="number"
              className="px-3 h-10 md:h-12 w-full border rounded border-secondary border-opacity-40 placeholder:text-sm bg-inherit text-black outline-none"
              placeholder="Enter amount"
              value={state.amount}
              onChange={(e) =>
                setState((prevState) => ({
                  ...prevState,
                  amount: e.target.value,
                }))
              }
            />
          </label>
          <label className="flex flex-col gap-2 w-full">
            <select
              className="px-3 h-10 md:h-12 w-full border rounded border-secondary border-opacity-40 placeholder:text-sm bg-inherit text-black outline-none"
              onChange={(e) =>
                setState((prevState) => ({
                  ...prevState,
                  recors: e.target.value,
                }))
              }
            >
              <option value="" disabled selected>
                No of Recors
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="4">4</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 w-full">
            <input
              type="text"
              className="px-3 h-10 md:h-12 w-full border rounded border-secondary border-opacity-40 placeholder:text-sm bg-inherit text-black outline-none"
              placeholder="Enter full name"
              value={state.name}
              onChange={(e) =>
                setState((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }))
              }
            />
          </label>
          <label className="flex flex-col gap-2 w-full">
            <input
              type="email"
              className="px-3 h-10 md:h-12 w-full border rounded border-secondary border-opacity-40 placeholder:text-sm bg-inherit text-black outline-none"
              placeholder="Enter email address"
              value={state.email}
              onChange={(e) =>
                setState((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
            />
          </label>
          <label className="flex flex-col gap-2 w-full">
            <input
              type="text"
              className="px-3 h-10 md:h-12 w-full border rounded border-secondary border-opacity-40 placeholder:text-sm bg-inherit text-black outline-none"
              placeholder="Enter phone number"
              value={state.phone}
              onChange={(e) =>
                setState((prevState) => ({
                  ...prevState,
                  phone: e.target.value,
                }))
              }
            />
          </label>
          <label className="flex flex-col gap-2 w-full">
            <input
              type="text"
              className="px-3 h-10 md:h-12 w-full border rounded border-secondary border-opacity-40 placeholder:text-sm bg-inherit text-black outline-none"
              placeholder="Enter country"
              value={state.country}
              onChange={(e) =>
                setState((prevState) => ({
                  ...prevState,
                  country: e.target.value,
                }))
              }
            />
          </label>
          <label className="flex flex-col gap-2 w-full">
            <input
              type="text"
              className="px-3 h-10 md:h-12 w-full border rounded border-secondary border-opacity-40 placeholder:text-sm bg-inherit text-black outline-none"
              placeholder="Enter address"
              value={state.address}
              onChange={(e) =>
                setState((prevState) => ({
                  ...prevState,
                  address: e.target.value,
                }))
              }
            />
          </label>
          <button
            className={`mi3-w-fit w-full h-10 md:h-12 font-[500] md:font-[600] text-white bg-primary rounded-full flex items-center justify-center px- placeholder:text-sm8
                ${
                  loading &&
                  "animate-pulse cursor-not-allowed pointer-events-none"
                }`}
            disabled={loading}
            type="submit"
          >
            Book Appointment Now
          </button>
        </>
      )}
    </form>
  );
};
