"use client";
import React, { useState } from "react";

const Contact: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, message }),
    });

    const data = await response.json();
    if (data.success) {
      setEmail("");
      setMessage("");
      setSubmitted(true);
    } else {
      console.error("Failed to send message.");
    }
  } catch (error) {
    console.error("An error occurred while sending the message:", error);
  }
};

  return (
    <div className="p-8 max-w-lg mx-auto bg-[#EDF2F7] shadow-lg rounded-lg mt-16">
      <h2 className="text-3xl font-bold mb-4 text-center text-[#E53E3E]">Contact Us</h2>
      {submitted && (
        <div className="mb-4 text-green-600 text-center font-semibold">
          Your message has been sent!
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block mb-2  font-medium text-gray-700 text-black">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E53E3E] bg-[#EDF2F7] text-black"

          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 text-lg font-medium text-gray-700">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E53E3E] bg-[#EDF2F7] text-black"
            rows={6}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#E53E3E] text-white font-semibold py-3 rounded-lg hover:bg-teal-700 transition duration-200"
        >
          Send Message
        </button>
      </form>
      <div className="mt-6 text-center text-gray-600 text-sm">
        We will get back to you shortly!
      </div>
    </div>
  );
};

export default Contact;
