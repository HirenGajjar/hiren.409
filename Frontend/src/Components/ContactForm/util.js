import axios from "axios";

// Handle form input change
export const handleInputChange = (e, formData, setFormData) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};

// Handle form submission
export const handleFormSubmit = async (e, formData, setFormData) => {
  e.preventDefault();
  try {
    const response = await axios.post(
      "https://hiren-409.onrender.com/api/messages/",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Response:", response);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    return "success";
  } catch (error) {
    console.error("Error sending message:", error);
    return "error";
  }
};

// Button hover animation
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
