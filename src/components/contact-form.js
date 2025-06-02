"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xdkgpkjw");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-[80%] md:w-[] bg-gray-200 flex flex-col px-5 py-5"
    >
      <h1 className="text-[18px] font-semibold">Get a quote</h1>
      <p className="text-[14px] mb-5">
        Let’s bring your project to life with clarity and commitment. Submit your details and our team will reach out promptly.
      </p>
      {/* <label htmlFor="email">
        Email Address
      </label> */}
      <input
        id="name"
        type="name"
        name="name"
        placeholder="Name"
        className="w-full h-[4vh] p-2 mb-5 bg-white border border-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-300"
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        className="w-full h-[4vh] p-2 mb-5 bg-white border border-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-300"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <input
        id="tel"
        type="tel"
        name="tel"
        placeholder="Number"
        className="w-full h-[4vh] p-2 mb-5 bg-white border border-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-300"
      />
      <ValidationError prefix="Tel" field="tel" errors={state.errors} />
      <textarea
        id="message"
        name="message"
        className="w-full h-[20vh] p-2 mb-5 bg-white border border-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-300"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className="w-[50%] h-[5vh] bg-amber-400 self-center rounded-lg hover:bg-amber-300 transition duration-300 ease-in-out"
      >
        Get a quote
      </button>
    </form>
  );
}

export default ContactForm;
