import { useState } from "react";


const HeroContact = () => {
    const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

   const handleChange = (
     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
     const { name, value } = e.target;
     setFormData({ ...formData, [name]: value });
   };

const submitHandle = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  alert("Your form is successfully submitted");
   setFormData({
     fullName: "",
     email: "",
     phone: "",
     subject: "",
     message: "",
   });
};
  return (
    <div>
      {/* Contact Us Section */}
      <section className="max-w-7xl mx-auto py-16 px-6 md:px-12 lg:px-20  ">
        <h2
          data-aos="fade-up"
          data-aos-duration="1100"
          className=" text-2xl md:text-4xl font-bold headingColor mb-8"
        >
          Contact US
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* WhatsApp Card */}
          <div
            data-aos="fade-up"
            data-aos-duration="1300"
            className="border-2 border-[#2B3A8F] py-10 p-6 rounded-[35px]  flex flex-col items-center"
          >
            <div className=" p-4 rounded-full mb-4">
              <img src="/contact/whatsapp.png" className="w-32 h-32" alt="" />
            </div>
            <p className="text-center contentColor contentColor contentFont text-base lg:text-lg  mb-4">
              Connect with us to explore tailored franchise opportunities and
              get your queries addressed
            </p>
            <button className="bg-[#2B3A8F] contentFont cursor-pointer text-white py-2 px-8 rounded-lg hover:bg-indigo-900 transition duration-300 w-fit">
              WhatsApp
            </button>
          </div>

          {/* Email Card */}
          <div
            data-aos="fade-up"
            data-aos-duration="1400"
            className="border-2 border-[#2B3A8F] py-10 p-6 rounded-[35px]  flex flex-col items-center"
          >
            <div className=" p-4 rounded-full mb-4">
              <img src="/contact/email.png" className="w-32 h-32" alt="" />
            </div>
            <p className="text-center contentColor contentColor contentFont text-base lg:text-lg mb-4">
              Contact us via email to explore exclusive franchise opportunities
              and share your inquiries with our team
            </p>
            <button className="bg-[#2B3A8F] contentFont cursor-pointer text-white py-2 px-8 rounded-lg  hover:bg-indigo-900 transition duration-300 w-fit">
              Send Email
            </button>
          </div>

          {/* Feedback Form */}
          <form
            onSubmit={submitHandle}
            data-aos="fade-up"
            data-aos-duration="1100"
            className="bg-gray-200 px-8 py-10 rounded-[35px] shadow-md col-span-1 md:col-span-2 lg:col-span-1"
          >
            <h3
              data-aos="fade-up"
              data-aos-duration="1100"
              className="text-2xl font-semibold text-indigo-800 mb-4 text-center"
            >
              Your valuable feedback
            </h3>

            <div
              data-aos="fade-up"
              data-aos-duration="1300"
              className="grid grid-cols-1 md:grid-cols-2  gap-4 mb-4"
            >
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="border-2 border-[#2B3A8F] rounded-xl text-sm p-2 w-full"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="border-2 border-[#2B3A8F] text-sm contentFont rounded-xl p-2 w-full"
                required
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="border-2 border-[#2B3A8F] text-sm contentFont rounded-xl p-2 w-full"
                required
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Choose Subject"
                className="border-2 border-[#2B3A8F] text-sm contentFont rounded-xl p-2 w-full"
                required
              />
            </div>

            <textarea
              data-aos="fade-up"
              data-aos-duration="1300"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              name="message"
              rows={4}
              className="border-2 border-[#2B3A8F] text-sm contentFont rounded-xl p-2 w-full mb-4"
              required
            ></textarea>

            <button
              type="submit"
              data-aos="fade-up"
              data-aos-duration="1400"
              className="bg-[#2B3A8F] contentFont cursor-pointer text-white py-2 px-10 rounded-lg hover:bg-indigo-900 transition duration-300 w-fit"
            >
              Submit
            </button>
          </form>

          {/* Location and Contact Info */}
          <div
            data-aos="fade-up"
            data-aos-duration="1200"
            className=" border-2 border-[#2B3A8F] p-6 h-40 rounded-3xl max-w-md "
          >
            <div className="flex items-start mb-4 gap-2">
              <img src="/contact/Map.png" className="w-10 h-10" alt="map" />
              <div>
                <h4 className="text-sm contentFont font-semibold headingColor">
                  Location
                </h4>
                <p className="text-sm contentFont contentColor">
                  #6/118 Balram Park, 14th 4th Cross, Thondayad, Kozhikode,
                  Kerala 673014
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <img src="/contact/call.png" className="w-8 h-8" alt="call" />
              <div>
                <h4 className="text-sm contentFont font-semibold headingColor">
                  Contact
                </h4>
                <p className="text-sm contentFont contentColor">
                  +91 9999799999
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroContact;
