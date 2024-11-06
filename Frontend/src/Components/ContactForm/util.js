import axios from "axios";

export const handleInputChange = (e, formData, setFormData) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};

export const handleFormSubmit = async (e, formData, setFormData, setStatus) => {
  e.preventDefault();
  try {
    await axios.post("http://localhost:5000/api/messages", formData);
    setStatus("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  } catch (error) {
    setStatus("Error sending message. Please try again.");
  }
};

export const setupButtonHoverAnimation = (buttonRef) => {
  const button = buttonRef.current;
  const bgEffect = button.querySelector("span:nth-child(2)");
  const buttonText = button.querySelector("span.relative");

  const onHover = () => {
    bgEffect.classList.remove("scale-x-0");
    bgEffect.classList.add("scale-x-100");
    buttonText.classList.add("text-white");
  };

  const onHoverOut = () => {
    bgEffect.classList.remove("scale-x-100");
    bgEffect.classList.add("scale-x-0");
    buttonText.classList.remove("text-white");
  };

  button.addEventListener("mouseenter", onHover);
  button.addEventListener("mouseleave", onHoverOut);

  return () => {
    button.removeEventListener("mouseenter", onHover);
    button.removeEventListener("mouseleave", onHoverOut);
  };
};
