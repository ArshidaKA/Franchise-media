import { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const HeroContact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [country, setCountry] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.currentTarget,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Your form is successfully submitted");
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
          setCountry("");
          setIsLoading(false);
        },
        (error: Error) => {
          console.log("FAILED...", error);
          alert("Failed to send message. Please try again later.");
          setIsLoading(false);
        }
      );
  };

  // Get WhatsApp URL based on country selection
  const getWhatsAppUrl = () => {
    if (country === "") {
      return "#"; // Prevent navigation with "#"
    }

    return country === "IND"
      ? "https://wa.me/919207887722"
      : "https://wa.me/971585587792";
  };

  // Handle WhatsApp button click
  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (country === "") {
      e.preventDefault();
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  return (
    <div>
      {/* Contact Us Section */}
      <section className="max-w-7xl mx-auto py-16 px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div>
            {/* Feedback Form */}
            <form
              onSubmit={submitHandle}
              data-aos="fade-up"
              data-aos-duration="1100"
              className="px-8 pb-10 rounded-[35px] col-span-1 md:col-span-2 lg:col-span-1"
            >
              <h3
                data-aos="fade-up"
                data-aos-duration="1100"
                className="text-3xl font-semibold text-indigo-800 mb-4"
              >
                Send a Message
              </h3>

              <div
                data-aos="fade-up"
                data-aos-duration="1300"
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
              >
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="border-2 border-[#2B3A8F] rounded-xl text-sm p-2 py-3 w-full"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="border-2 border-[#2B3A8F] text-sm contentFont rounded-xl p-2 py-3 w-full"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="border-2 border-[#2B3A8F] text-sm contentFont rounded-xl p-2 py-3 w-full"
                  required
                />
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="border-2 border-[#2B3A8F] cursor-pointer text-sm contentFont rounded-xl p-2 py-3 w-full"
                  required
                >
                  <option value="" disabled>
                    Choose Subject
                  </option>
                  <option value="General Enquiry">General Enquiry</option>
                  <option value="Business Enquiry">Business Enquiry</option>
                  <option value="Customer Feedback">Customer Feedback</option>
                </select>
              </div>

              <textarea
                data-aos="fade-up"
                data-aos-duration="1300"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                name="message"
                rows={4}
                className="border-2 border-[#2B3A8F] text-sm contentFont rounded-xl p-2 py-3 w-full mb-4"
                required
              ></textarea>

              <button
                type="submit"
                data-aos="fade-up"
                data-aos-duration="1400"
                className="bg-[#2B3A8F] contentFont cursor-pointer text-white py-2 px-10 rounded-lg hover:bg-indigo-900 transition duration-300 w-fit"
              >
                {isLoading ? "Loading..." : "Submit"}
              </button>
            </form>

            {/* Location and Contact Info */}
            <div
              data-aos="fade-up"
              data-aos-duration="1200"
              className="p-6 rounded-3xl max-w-md flex flex-col gap-6"
            >
              <Link to="https://g.co/kgs/mDGgFtj">
                <div className="flex items-start mb-4 gap-2">
                  <img src="/contact/Map.png" className="w-10 h-10" alt="map" />
                  <div>
                    <h4 className="text-sm contentFont font-semibold headingColor">
                      Location
                    </h4>
                    <p className="text-sm contentFont contentColor">
                      HiLITE Business Park, 1410, 4th Floor, Bypass, Thondayad,
                      Kozhikode, Kerala 673014
                    </p>
                  </div>
                </div>
              </Link>

              <div className="flex items-start gap-4 mb-4">
                <img src="/contact/call.png" className="w-8 h-8" alt="call" />
                <div>
                  <h4 className="text-sm contentFont font-semibold headingColor">
                    Contact
                  </h4>
                  <p className="text-sm contentFont contentColor">
                    +91 9207887722
                  </p>
                  <p className="text-sm contentFont contentColor">
                    +971 58 558 7792
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* WhatsApp Card */}
            <div
              data-aos="fade-up"
              data-aos-duration="1300"
              className="border-2 relative border-green-500 py-10 mb-6 p-6 rounded-[35px] flex flex-col items-center"
            >
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50">
                    {country === "UAE" ? (
                      <div className="cursor-pointer text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden flex items-center gap-3">
                        <img
                          src="/flag/uae.png"
                          className="w-5 h-5"
                          alt="uae"
                        />{" "}
                        UAE
                      </div>
                    ) : country === "IND" ? (
                      <div className="cursor-pointer text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden flex items-center gap-3">
                        <img
                          src="/flag/india.png"
                          className="w-5 h-5"
                          alt="india"
                        />{" "}
                        IND
                      </div>
                    ) : (
                      "Choose Country"
                    )}
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 size-5 text-gray-400"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-28 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <div className="py-1">
                    <MenuItem>
                      <div
                        onClick={() => {
                          setCountry("IND");
                          setIsError(false);
                        }}
                        className="cursor-pointer px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden flex items-center gap-3"
                      >
                        <img
                          src="/flag/india.png"
                          className="w-5 h-5"
                          alt="india"
                        />{" "}
                        IND
                      </div>
                    </MenuItem>
                    <MenuItem>
                      <div
                        onClick={() => {
                          setCountry("UAE");
                          setIsError(false);
                        }}
                        className="cursor-pointer px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden flex items-center gap-3"
                      >
                        <img
                          src="/flag/uae.png"
                          className="w-5 h-5"
                          alt="uae"
                        />{" "}
                        UAE
                      </div>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
              <div className="p-4 rounded-full mb-4">
                <img
                  src="/contact/whatsapp.png"
                  className="w-32 h-32"
                  alt="whatsapp"
                />
              </div>
              <p className="text-center contentColor contentFont text-base lg:text-lg mb-4">
                Connect with us to explore tailored franchise opportunities and
                get your queries addressed
              </p>
              <Link to={getWhatsAppUrl()} onClick={handleWhatsAppClick}>
                <button className="bg-green-500 contentFont cursor-pointer text-white py-2 px-8 rounded-lg hover:bg-indigo-900 transition duration-300 w-fit">
                  WhatsApp
                </button>
              </Link>
              {isError && (
                <div className="text-red-500 text-sm">
                  Please select a country
                </div>
              )}
            </div>

            {/* Email Card */}
            <div
              data-aos="fade-up"
              data-aos-duration="1400"
              className="border-2 border-[#2B3A8F] py-10 p-6 rounded-[35px] flex flex-col items-center"
            >
              <div className="p-4 rounded-full mb-4">
                <img
                  src="/contact/email.png"
                  className="w-32 h-32"
                  alt="email"
                />
              </div>
              <p className="text-center contentColor contentFont text-base lg:text-lg mb-4">
                Contact us via email to explore exclusive franchise
                opportunities and share your inquiries with our team
              </p>
              <Link to="mailto:Info@franchisemedia.in">
                <button className="bg-[#2B3A8F] contentFont cursor-pointer text-white py-2 px-8 rounded-lg hover:bg-indigo-900 transition duration-300 w-fit">
                  Send Email
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroContact;
