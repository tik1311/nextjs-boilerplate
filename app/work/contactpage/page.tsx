"use client";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    textt:"",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("ขอบคุณที่ติดต่อเรา!");
  };

  return (

    <div className="min-h-screen bg-dark text-white flex flex-col">
      {/* Navigation */}
      <header className="w-full py-6 px-8">
        <nav className="flex justify-end items-center space-x-8">
          <div className="nav-links hidden md:flex space-x-8">
            <Link href="/" className="hover:text-neon">
              Home
            </Link>
            <Link href="/work" className="hover:text-neon">
              Work
            </Link>
            <Link href="/work/contactpage" className="text-neon">
              Contact
            </Link>
          </div>
          <button className="bg-neon text-dark px-4 py-2 rounded-full font-medium">
            Let's Talk
          </button>
        </nav>
      </header>



      {/* Contact Form */}
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <h3 className="text-3xl font-bold mb-6">Contact us</h3>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg"
        >
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 rounded bg-gray-700 text-white"
              placeholder="กรอกชื่อ"
              required
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium">
              Lastname
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 rounded bg-gray-700 text-white"
              placeholder="กรอกนามสกุล"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 rounded bg-gray-700 text-white"
              placeholder="example@email.com"
              required
            />
          </div>
           <div>
            <label htmlFor="textt" className="block text-sm font-medium">
              Note Text
            </label>
            <input
              type="textt"
              id="textt"
              name="textt"
              value={formData.textt}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 rounded bg-gray-700 text-white"
              placeholder="input your text"
              required
            />
          </div>
          <div className="flex justify-center mt-4">

      <button 
        type="submit"
        className="border border-neon text-neon px-4 py-2 rounded-full font-medium flex items-center"
         >
         Send
      </button>
      </div>

        </form>
      </main>
    </div>
  );
}
