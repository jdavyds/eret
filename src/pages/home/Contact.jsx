import { FaChevronDown } from "react-icons/fa";
import map from "../../assets/map.png";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    name: "",
    phone: "",
    email: "",
    country: "",
    state: "",
    message: "",
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
        state: state.state,
        country: state.country,
        message: state.message,
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
          state: "",
          country: "",
          message: "",
        });
      })
      .catch((error) => console.log(error));
  }

  return (
    <main
      className="px-5 md:px-20 py-10 md:py-20 flex flex-col gap-10 bg-[#F8FFFA]"
      id="book"
    >
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl md:text-[40px] font-medium text-secondary">
          Book An Appointment
        </h3>
        <p className="md:w-1/2">
          Investing with ERET is a straightforward and empowering experience
          designed to put you in control of your financial destiny.
        </p>
      </div>
      <div className="flex flex-col md:grid grid-cols-2 md:grid-rows-1 gap-10">
        <form
          className="flex flex-col gap-5 md:gap-7 p-5 md:p-10 bg-white rounded-xl h-fit"
          onSubmit={handleSubmit}
        >
          {sent && (
            <div className="flex flex-col gap-8 text-center items-center mt-10">
              <b className="text-2xl md:text-[28px] text-secondary">
                THANK YOU!!
              </b>
              <p className="">
                Your appointment has been booked and your booking details has
                been sent to your mail. Kindly check your mail for more
                information.
              </p>
            </div>
          )}
          {!sent && (
            <>
              <b className="text-xl md:text-[28px] text-secondary">
                Talk to us
              </b>
              <p className="text-lg font-medium -mt-5">
                Fill in your details below
              </p>
              <label className="flex flex-col gap-2 w-full">
                <span className="text-black font-medium">Full name</span>
                <input
                  type="text"
                  className="px-3 h-10 md:h-12 w-full border rounded border-[#00000026] placeholder:text-sm"
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
                <span className="text-black font-medium">Email address</span>
                <input
                  type="email"
                  className="px-3 h-10 md:h-12 w-full border rounded border-[#00000026] placeholder:text-sm"
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
              <label className="flex flex-col gap-2 w-full relative">
                <span className="text-black font-medium">Phone number</span>
                <input
                  type="text"
                  className="px-3 h-10 md:h-12 w-full border rounded border-[#00000026] placeholder:text-sm"
                  placeholder="Enter phone number"
                  value={state.phone}
                  onChange={(e) =>
                    setState((prevState) => ({
                      ...prevState,
                      phone: e.target.value,
                    }))
                  }
                />
                <span className="absolute bottom-2 text-sm right-2 flex gap-1 items-center">
                  +234 <FaChevronDown />
                </span>
              </label>
              <label className="flex flex-col gap-2 w-full">
                <span className="text-black font-medium">Country</span>
                <input
                  type="text"
                  className="px-3 h-10 md:h-12 w-full border rounded border-[#00000026] placeholder:text-sm"
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
                <span className="text-black font-medium">State</span>
                <input
                  type="text"
                  className="px-3 h-10 md:h-12 w-full border rounded border-[#00000026] placeholder:text-sm"
                  placeholder="Enter state"
                  value={state.state}
                  onChange={(e) =>
                    setState((prevState) => ({
                      ...prevState,
                      state: e.target.value,
                    }))
                  }
                />
              </label>
              <label className="flex flex-col gap-2 w-full">
                <span className="text-black font-medium">
                  Please share the topics you would like to discuss that will
                  help us prepare for our meeting
                </span>
                <textarea
                  className="px-5 py-4 h-40 w-full border rounded border-[#00000026]"
                  placeholder="Enter"
                  value={state.message}
                  onChange={(e) =>
                    setState((prevState) => ({
                      ...prevState,
                      message: e.target.value,
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

        <figure className="w-full h-full max-h-full rounded-xl">
          <img
            src={map}
            alt=""
            className="w-full h-full object-cover max-h-[950px] rounded-xl"
          />
        </figure>
      </div>
    </main>
  );
}
