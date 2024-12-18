"use client";
import React, { useState } from "react";
import Layout from "@theme/Layout";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [captcha, setCaptcha] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_iavx9sn';
    const templateId = 'template_d2lhdrc';
    const publicKey = 'VuqwGF1tobU3FrIdM';

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_company: company,
      from_email: email,
      from_phone: phone,
      message: message,
    };

    emailjs.init({publicKey, blockHeadless: true, limitRate: {throttle: 10000000}});

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams)
      .then((response) => {
        setName('');
        setCompany('');
        setEmail('');        
        setPhone('');
        setMessage('');
        setCaptcha(null);
        console.log('SUCCESS!', response.status, response.text);
        alert('Thank you for reaching out to us. We will get back to you as soon as possible.');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert(`Error sending email!`);
      });
  }



  return (
    <Layout>
      <div className="h-full w-full flex flex-col gap-6 sm:flex-row bg-neutral-100 dark:bg-main justify-center">
        <div className="p-8 text-center justify-center sm:w-full md:w-3/5">
          {/* <img src="/img/pf_photo.jpeg" className="rounded-full w-48 h-48" />
          <h1>NAGENDRA KUPPALA</h1>
          <h5 className="mb-4">
            MS | MBA | SDET | QA | Full Stack Developer | Azure AZ-900 | CSPO |
            Certified SAFe 6.0 Agilist
          </h5> */}
          <p className="text-justify mb-1">
            Driven by the vision to make automation testing as simple as
            possible, We have meticulously crafted <span className="text-green-700 font-semibold">KWIKQA</span> to be the ultimate
            solution for companies seeking efficiency and reliability in their
            testing endeavors. With <span className="text-green-700 font-semibold">KWIKQA</span> Test Automation Framework, businesses
            are empowered to embrace automation testing with confidence,
            enabling faster cycles and ensuring the utmost reliability of their
            applications.
          </p>
        </div>
        <div className="p-8 sm:w-full md:w-2/5">
          <p className="text-justify">
            Join the journey as <span className="text-green-700 font-semibold">KWIKQA</span> paves the way for effortless automation
            testing. Discover <span className="text-green-700 font-semibold">KWIKQA</span> today and unlock the true potential of your
            testing workflows.
          </p>
          <form className='contactForm' onSubmit={handleSubmit}>
            <div className="pt-0 mb-3">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                required
              />
            </div>
            <div className="pt-0 mb-3">
              <input
                type="text"
                placeholder="Company"
                name="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                required
              />
            </div>
            <div className="pt-0 mb-3">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                required
              />
            </div>
            <div className="pt-0 mb-3">
              <input
                type="tel"
                placeholder="Phone Number (xxx-xxx-xxxx)"
                name="phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                required
              />
            </div>
            <div className="pt-0 mb-3">
              <textarea
                placeholder="Your message"
                name="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                required
              />
            </div>
            <div className="pt-0 mb-3">
              <ReCAPTCHA sitekey="6Lf2C6EpAAAAAN2xZR2TRhM8puNgSpULmK_efdeP" onChange={(cVal) => setCaptcha(cVal)} />
            </div>
            <div className="pt-0 mb-3">
              <button
                disabled={!captcha}
                className="active:bg-green-700 hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-green-700 rounded shadow outline-none"
                type="submit"
              >
                Send a message
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
