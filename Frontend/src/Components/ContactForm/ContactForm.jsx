import React, { useState, useRef, useEffect } from "react";
import {
  handleInputChange,
  handleFormSubmit,
  setupButtonHoverAnimation,
} from "./util";
import Toast from "../../AnimationComponents/Toast/Toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [toastMessage, setToastMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // To manage button disabled state
  const buttonRef = useRef(null);

  useEffect(() => {
    const cleanupHoverAnimation = setupButtonHoverAnimation(buttonRef);
    return cleanupHoverAnimation;
  }, []);

  const onSubmit = async (e) => {
    setIsSubmitting(true); // Disable the button while submitting
    const result = await handleFormSubmit(e, formData, setFormData);
    setIsSubmitting(false); // Re-enable the button

    if (result === "success") {
      setToastMessage("Message sent successfully!");
    } else {
      setToastMessage("Error sending message. Please try again.");
    }

    // Hide toast message after 3 seconds
    setTimeout(() => setToastMessage(""), 3000);
  };

  return (
    <div className="w-full font-montserrat">
      <form onSubmit={onSubmit}>
        <div className="flex w-full justify-center py-4 text-[1rem] md:text-[2rem] lg:text-[3vw] xl:text-[4vw] text-black border-t border-b border-black">
          <label>My name is </label>
          <input
            type="text"
            name="name"
            className="text-black outline-none text-center"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => handleInputChange(e, formData, setFormData)}
            required
          />
        </div>
        <div className="flex w-full justify-center py-4 text-[1rem] md:text-[2rem] lg:text-[3vw] xl:text-[4vw] text-black border-b border-black">
          <label>and my email</label>
          <input
            type="email"
            name="email"
            className="text-black outline-none text-center"
            placeholder="example@mail.com"
            value={formData.email}
            onChange={(e) => handleInputChange(e, formData, setFormData)}
            required
          />
        </div>
        <div className="flex w-full justify-center py-4 text-[1rem] md:text-[2rem] lg:text-[3vw] xl:text-[4vw] text-black border-b border-black">
          <input
            name="message"
            className="text-black outline-none text-center"
            placeholder="Let's talk about..."
            value={formData.message}
            onChange={(e) => handleInputChange(e, formData, setFormData)}
            maxLength="200"
            required
          />
        </div>
        <div className="flex items-center justify-center py-4">
          <button
            ref={buttonRef}
            type="submit"
            className="relative px-6 py-3 mt-4 border-2 border-black text-black uppercase tracking-wide overflow-hidden"
            disabled={isSubmitting} // Disable the button while submitting
          >
            <span className="relative z-10">
              {isSubmitting ? "Sending..." : "Send Message"}
            </span>
            <span className="absolute inset-0 bg-black transition-transform duration-300 ease-in-out transform scale-x-0 origin-left" />
          </button>
        </div>
      </form>
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage("")} />
      )}
    </div>
  );
};

export default ContactForm;
