"use client";

import React, { useState, useEffect } from "react";
import { Select, SelectItem, Input } from "@nextui-org/react";
import Image from "next/image";
import img1 from "../../../public/images/Intersect.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { MuiPhone } from "../phone/MuiPhone";
import Marquee from "react-fast-marquee";
import { anton, work_sans } from "@/styles/fonts";

const MultiPageForm = () => {
  const [phone, setPhone] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    category: "",
    field: "",
    details: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    country: "",
    industry: "",
    instagram: "",
    tiktok: "",
    snapchat: "",
    youtube: "",
  });
  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);

        setSelectedCountry(data.userSelectValue);
      });
  }, []);

  const nextPage = () => {
    console.log(formData.category);
    if (
      formData.category === "mediapartner" ||
      formData.category === "sponsor"
    ) {
      setPage(3); // Go to the final page directly
    } else {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (
      formData.category === "mediapartner" ||
      formData.category === "sponsor"
    ) {
      setPage(1); // Go to the first page directly
    } else {
      setPage(page - 1);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission here
  };

  const handleselect = (key) => {
    setFormData({ ...formData, category: key.target.value });
  };
  const maskImageStyle = {
    maskImage:
      "linear-gradient(to right, transparent 0%, #000 15%, #000 85%, transparent 100%)",
    WebkitMaskImage:
      "linear-gradient(to right, transparent 0%, #000 15%, #000 85%, transparent 100%)",
  };
  return (
    <div className={`p-20 bg-white text-2xl ${work_sans.className} font-bold`}>
      <Marquee
        direction="left"
        gradient={false}
        speed={40}
        className={` z-10 text-9xl w-full ${anton.className} absolute top-12 `}
        autoFill={true}
        style={{ height: "300px", ...maskImageStyle }}
      >
        &nbsp; REGISTER - REGISTER - REGISTER - REGISTER - REGISTER - REGISTER -
        REGISTER -
      </Marquee>
      <div className="flex flex-row justify-center  w-full max-w-[100%] max-md:mt-10 relative bottom-20 z-20  ">
        <form
          onSubmit={handleSubmit}
          className=" w-[60%]  p-20   rounded-xl "
          style={{
            boxShadow: "0px 0px 10px 0px #0000001a ",
            background: "rgba(255, 255, 255, 1.15) ",
            border: "1px solid #0000001a",
            color: "rgba(0, 0, 0, 0.18)",
            filter: "drop-shadow(40px 40px 76px)",
            mixBlendMode: "normal",
          }}
        >
          {page === 1 && (
            <div className="flex  flex-col md:flex-nowrap gap-4">
              <h2 className={` text-black  ${anton}`}>First Page</h2>

              <Select
                label="Select category"
                className="max-w-md"
                onChange={handleselect}
                variant="underlined"
              >
                <SelectItem key="delegate">Delegate</SelectItem>
                <SelectItem key="speaker">Speaker</SelectItem>
                <SelectItem key="sponsor">Sponsor</SelectItem>
                <SelectItem key="mediapartner">Media Partner</SelectItem>
              </Select>

              <button
                onClick={nextPage}
                className="btn btn-primary border-2 border-sky-500 "
              >
                Next
              </button>
            </div>
          )}

          {page === 2 && (
            <div className="flex  flex-col md:flex-nowrap gap-4">
              <h2>Second Page</h2>
              {formData.category !== "sponsor" &&
                formData.category !== "mediapartner" && (
                  <Select
                    variant="underlined"
                    label="Select Field"
                    value={formData.field}
                    onChange={(value) =>
                      setFormData({ ...formData, field: value })
                    }
                    className="max-w-md"
                  >
                    <SelectItem value="influencer">Influencer</SelectItem>
                    <SelectItem value="marketer">Marketer</SelectItem>
                  </Select>
                )}
              <button
                onClick={prevPage}
                className="btn btn-primary border-2 border-sky-500 "
              >
                Previous
              </button>
              <button
                onClick={nextPage}
                className="btn btn-primary border-2 border-sky-500 "
              >
                Next
              </button>
            </div>
          )}

          {page === 3 && (
            <div className="flex  flex-wrap    gap-4">
              <div className="flex flex-row gap-4 w-full">
                <Input
                  variant="underlined"
                  className="w-1/2 "
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  size="lg"
                />
                <Input
                  variant="underlined"
                  className="w-1/2"
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  size="lg"
                />
              </div>
              <div className="flex flex-row align-bottom gap-4 w-full">
                <Input
                  label="Business Email"
                  name="email"
                  className="w-1/2"
                  value={formData.email}
                  onChange={handleChange}
                  variant="underlined"
                  size="lg"
                />
                {/* <Input
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                /> */}

                <MuiPhone
                  value={formData.phone}
                  onChange={(phone) => setPhone(phone)}
                  className="w-1/2"
                />
              </div>

              <div className="flex flex-row gap-4 w-full">
                <Input
                  variant="underlined"
                  label="Company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  size="lg"
                />
                <Input
                  variant="underlined"
                  label="Job Title"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  size="lg"
                />
              </div>
              <div className="flex flex-row gap-4 w-full">
                {/* <Input
                  label="Country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                /> */}

                <Select
                  variant="underlined"
                  label="Select Country"
                  value={selectedCountry}
                  onChange={(value) => {
                    setSelectedCountry(value);
                    setSelectedCountryCode(countries[value]);
                  }}
                  size="lg"
                >
                  {countries.map((country) => (
                    <SelectItem key={country.label}>{country.label}</SelectItem>
                  ))}
                </Select>
                <Input
                  variant="underlined"
                  label="Industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  size="lg"
                />
              </div>

              {/* Add other input fields as needed */}
              <button
                onClick={prevPage}
                className="btn btn-primary border-2 border-sky-500 "
              >
                Previous
              </button>
              <button
                type="submit"
                className="btn btn-primary border-2 border-sky-500 "
              >
                Submit
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default MultiPageForm;
