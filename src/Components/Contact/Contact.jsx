import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qn0901c', 'template_xputn1u', form.current, {
        publicKey: 'U6N7O78Am5t7J__9J',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return (
        <div id='contact' className="min-h-screen bg-primary py-6 flex flex-col justify-center sm:py-12 mt-10">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-emerald-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-teal-400 shadow-lg sm:rounded-3xl sm:p-20 text-white">
            <div className="text-center pb-6">
              <h1 className="text-3xl">Contact Us!</h1>
              <p className="text-white">Fill up the form below to send us a message.</p>
            </div>
  
            <form ref={form} onSubmit={sendEmail}>
              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Name"
                name="user_name"
              />
              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email"
                name="user_email"
              />
              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Subject"
                name="subject"
              />
              <textarea
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Type your message here..."
                name="message"
                style={{ height: '121px' }}
              ></textarea>
  
              <div className="flex justify-between">
                <input
                  className="shadow bg-cyan-700 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  value="Send ➤"
                />
                <input
                  className="shadow bg-cyan-700 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="reset"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

    );
};

export default Contact;