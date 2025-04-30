import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { useEffect } from "react";
import { useForm } from 'react-hook-form';



const EmailUs = ({ background }) => {

  useEffect(()=>{
    window.scroll(0,0);
  })

  const formRef = useRef();
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.sendForm(
        'service_00pntbu',
        'template_llfenw5',
        formRef.current,
        '3dE4-oRG8ZxSSG3Nn'
      );
      console.log("SUCCESS!");
      setSent(true);
      alert("Message Sent Successfully ✅");
      reset(); // Resets React Hook Form state
    } catch (error) {
      console.error("FAILED...", error);
      alert("Message Failed ❌ Please try again.");
    }
  };

  return (
    <section id="email">
      <div className="sm:h-screen xl:h-auto w-screen flex flex-col justify-start gap-20 items-center pb-5">
        <h1 className="text-[40px] font-bold" style={{ color: background ? "white" : "black" }}>
          Contact Me
        </h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className="w-[90vw] xl:w-[55vw] border-2 text-start px-5 py-10 rounded-3xl flex flex-col sm:flex-row transition duration-700"
          style={{ color: background ? "white" : "black", borderColor: background ? "white" : "black" }}
        >
          {/* Left Info Panel */}
          <div className="md:w-[45%] pr-4">
            <h1 className="text-2xl font-semibold">Contact Information</h1>
            <div className="mt-5">
              <h2 className="text-md font-medium text-gray-400">Name</h2>
              <p className="text-lg font-normal">Shivam Chauhan</p>
              <h2 className="text-md font-medium text-gray-400 mt-5">Email</h2>
              <p className="text-lg font-normal">user@gmail.com</p>
              <h2 className="text-md font-medium text-gray-400 mt-5">Message</h2>
              <p className="text-lg font-normal">Hello We Want to collab with you ....</p>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="mt-5 md:mt-0 md:px-5 md:w-[55%]">
            <h1 className="text-2xl font-semibold">Send me a message</h1>

            <label htmlFor="user_name" className="inline-block mt-5 mb-2">Name</label>
            <input
              type="text"
              id="user_name"
              className="w-[95%] md:w-full h-[40px] rounded-lg text-black px-2 outline-none border-2 border-black"
              {...register('user_name', { required: "Please enter your name" })}
              autoComplete="off"
            />
            {errors.user_name && <p className="text-red-500 text-sm">{errors.user_name.message}</p>}

            <label htmlFor="user_email" className="inline-block mt-5 mb-2">Email</label>
            <input
              type="email"
              id="user_email"
              className="w-[95%] md:w-full h-[40px] rounded-lg text-black px-2 outline-none border-2 border-black"
              {...register('user_email', {
                required: "Please enter your email",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email"
                }
              })}
              autoComplete="off"
            />
            {errors.user_email && <p className="text-red-500 text-sm">{errors.user_email.message}</p>}

            <label htmlFor="message" className="inline-block mt-5 mb-2">Message</label>
            <textarea
              id="message"
              className="w-[95%] md:w-full h-[100px] rounded-lg text-black px-2 outline-none border-2 border-black"
              {...register('message', { required: "Please enter a message" })}
              autoComplete="off"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

            <button
              className="cursor-pointer w-[95%] sm:w-full h-[40px] mt-5 rounded-lg bg-blue-500 text-white text-lg p-2 transition-all duration-300 hover:bg-blue-600"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : (sent ? "Message Sent ✅" : "Send Message")}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailUs;
