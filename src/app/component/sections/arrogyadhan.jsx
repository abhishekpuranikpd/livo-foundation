"use client";

import { useState } from "react";
import Image from "next/image";
import { FaArrowCircleDown } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IndianRupee } from "lucide-react";
import { Input } from "../../../components/ui/input";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ArrogyaDhan = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    why: "",
    cost: "",
  });

  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = "";

    if (name === "name" && /\d/.test(value)) {
      error = "Name cannot contain numbers";
    }
    if (name === "mobile" && (!/^\d+$/.test(value) || value.length > 10)) {
      error = "Mobile must be exactly 10 digits and contain only numbers";
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(errors).some((error) => error)) return;

    setLoading(true);

    try {
      const response = await fetch("/api/aarogya-dhan-enq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message);

      toast.success("Enquiry submitted successfully!");
      setFormData({ name: "", mobile: "", why: "", cost: "" });
      setErrors({});
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const crowdfundingcategory = [
    { src: "https://res.cloudinary.com/dnckhli5u/image/upload/v1723878707/Icons/tuxittmxdtivblh2hbba.png", text: "Help to NGO's" },
    { src: "https://res.cloudinary.com/dnckhli5u/image/upload/v1723878707/Icons/ejzr8jxma88a3qgs7ecc.png", text: "Child Health" },
    { src: "https://res.cloudinary.com/dnckhli5u/image/upload/v1723878707/Icons/vpgxhzpydivabu1irhpw.png", text: "Emergency Help" },
    { src: "https://res.cloudinary.com/dnckhli5u/image/upload/v1723878707/Icons/yststufrq8q0jiobj32p.png", text: "Medical Help" },
    { src: "https://res.cloudinary.com/dnckhli5u/image/upload/v1723878707/Icons/eadfqhg8qvfzsumpwmdj.png", text: "Cancer Care" },
    { src: "https://res.cloudinary.com/dnckhli5u/image/upload/v1723878707/Icons/poosxlvu7tfzurz3lqx9.png", text: "Transplant Surgery" },
    { src: "https://res.cloudinary.com/dnckhli5u/image/upload/v1723878707/Icons/qmqk3gn6dyz07zcwj822.png", text: "Personal Cause" },
  ];

  const items = [
    {
      src: "https://res.cloudinary.com/dnckhli5u/image/upload/v1723878707/Icons/s66redc0tjmethfcg3zh.png",
      alt: "3000+ Fundraisers",
      text: "3000+ Fundraisers",
    },
    {
      src: "https://res.cloudinary.com/dnckhli5u/image/upload/v1723878707/Icons/wbdzd4kklxbhi3djjzcb.png",
      alt: "Rs 50 Lakhs+ Raised",
      text: "Rs 50 Lakhs+ Raised",
    },
    {
      src: "https://res.cloudinary.com/dnckhli5u/image/upload/v1723878707/Icons/mmf2qhsysfskuxxkdpvr.png",
      alt: "650+ Donations",
      text: "650+ Donations",
    },
  ];


  return (
    <>
      <section id="arrogyaDhan" className="relative w-full scroll-mt-28 py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
        {/* Background Decorative Accents */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 lg:mb-24">
            <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-bold text-xs tracking-widest uppercase mb-6">
              AarogyaDhan Initiative
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
              Connecting <span className="text-primary">Donors</span> & <span className="text-accent">Donees</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-8 font-medium">
              A dedicated online technology platform empowering health access and bridging healthcare disparities across India.
            </p>
          </div>

          {/* Main Banner Card */}
          <div className="relative aspect-[21/9] lg:aspect-[3/1] rounded-[2.5rem] overflow-hidden shadow-2xl mb-20 border-8 border-white">
            <Image
              src="https://res.cloudinary.com/dnckhli5u/image/upload/v1731670874/4_mavjpg.png"
              alt="AarogyaDhan Banner"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
          </div>

          {/* Info Section */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center mb-24">
            <div className="flex justify-center lg:justify-start gap-6 col-span-1 lg:col-span-2">


            </div>

            {/* <div className="bg-secondary p-8 rounded-3xl border border-gray-100">
              <p className="text-foreground font-semibold text-base leading-relaxed">
                <span className="text-primary font-bold">AarogyaDhan</span> is a non-commercial platform facilitating direct impact without financial returns.
              </p>
            </div> */}
          </div>

          {/* Request Call Back Section */}
          <div className="bg-white rounded-[3rem] p-8 lg:p-16 shadow-2xl border border-gray-100 max-w-5xl mx-auto relative overflow-hidden">
            {/* Decorative background for form */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-extrabold text-foreground mb-2">Request a Call Back</h3>
                <p className="text-muted-foreground font-bold uppercase tracking-widest text-xs">Our team will assist you shortly</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      className="w-full px-5 py-4 rounded-full bg-gray-50 border border-gray-100 focus:border-primary focus:bg-white focus:outline-none transition-all font-medium text-sm"
                    />
                  </div>

                  {/* Mobile */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-2">Mobile No.</label>
                    <input
                      type="text"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      maxLength="10"
                      placeholder="10-Digit Number"
                      className="w-full px-5 py-4 rounded-full bg-gray-50 border border-gray-100 focus:border-primary focus:bg-white focus:outline-none transition-all font-medium text-sm"
                    />
                  </div>

                  {/* Cost */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-2">Est. Cost</label>
                    <div className="relative">
                      <select
                        name="cost"
                        value={formData.cost}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-full bg-gray-50 border border-gray-100 focus:border-primary focus:bg-white focus:outline-none transition-all font-medium text-sm appearance-none"
                      >
                        <option value="">Select Range</option>
                        <option value="1 Lakh to 2 Lakh">1 Lakh to 2 Lakh</option>
                        <option value="2 Lakh to 3 Lakh">2 Lakh to 3 Lakh</option>
                        <option value="3 Lakh to 5 Lakh">3 Lakh to 5 Lakh</option>
                        <option value="5 Lakh to 8 Lakh">5 Lakh to 8 Lakh</option>
                        <option value="8 Lakh to 10 Lakh">8 Lakh to 10 Lakh</option>
                        <option value="10 Lakh+">10 Lakh+</option>
                      </select>
                      <FaArrowCircleDown className="absolute right-5 top-1/2 -translate-y-1/2 text-primary/30 pointer-events-none" />
                    </div>
                  </div>

                  {/* Reason */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-2">Reason</label>
                    <div className="relative">
                      <select
                        name="why"
                        value={formData.why}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-full bg-gray-50 border border-gray-100 focus:border-primary focus:bg-white focus:outline-none transition-all font-medium text-sm appearance-none"
                      >
                        <option value="">Select Need</option>
                        {crowdfundingcategory.map((cat, i) => (
                          <option key={i} value={cat.text}>{cat.text}</option>
                        ))}
                      </select>
                      <FaArrowCircleDown className="absolute right-5 top-1/2 -translate-y-1/2 text-primary/30 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-12 py-5 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-xl hover:shadow-primary/30 active:scale-95 disabled:opacity-50"
                  >
                    {loading ? "SUBMITTING..." : "SUBMIT YOUR REQUEST"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArrogyaDhan;