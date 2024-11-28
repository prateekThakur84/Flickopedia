import { Form, useNavigate } from "react-router-dom";
import { useState } from "react";

// Function to handle form data submission
export const contactData = async ({ request }) => {
  try {
    const formData = await request.formData(); // Retrieve form data from the request
    const data = Object.fromEntries(formData); // Convert form data to an object

    // Send data to the backend
    const response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to send the message.");
    }

    return { success: true }; // Return success on successful submission
  } catch (error) {
    console.error("Error handling form submission:", error);
    return { success: false, message: error.message };
  }
};

// Contact component for the contact form and page layout
export const Contact = () => {
  const [status, setStatus] = useState(null); // Track form submission status
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus({ success: true, message: "Message sent successfully!" });
        form.reset(); // Reset the form to empty
      } else {
        const error = await response.json();
        setStatus({ success: false, message: error.message || "Submission failed." });
      }
    } catch (error) {
      setStatus({ success: false, message: "An error occurred. Please try again later." });
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-6 text-white">
      {/* Header text */}
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <p className="mb-8 font-bold text-xl sm:text-2xl text-tblack dark:text-yellow-400">
          Get in touch with us. We are always here to help you.
        </p>
      </div>

      {/* Form and image layout */}
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact form */}
        <div className="flex-1 bg-white border-2 border-gray-300 dark:bg-gray-800 shadow-lg rounded-lg p-4 sm:p-6 lg:p-8">
          <h2 className="text-2xl font-semibold text-tblack dark:text-yellow-400 mb-4">Contact Us</h2>

          {status && (
            <p
              className={`text-center font-semibold mb-4 ${
                status.success ? "text-green-500" : "text-red-500"
              }`}
            >
              {status.message}
            </p>
          )}

          <Form onSubmit={handleSubmit}>
            <div className="space-y-4">
              {/* Name input */}
              <div>
                <label htmlFor="name" className="block font-bold text-tblack dark:text-yellow-400 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 bg-white border-2 dark:bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-400 transition duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email input */}
              <div>
                <label htmlFor="email" className="block font-bold text-tblack dark:text-yellow-400 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 bg-white border-2 dark:bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-400 transition duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Message input */}
              <div>
                <label htmlFor="message" className="block font-bold text-tblack dark:text-yellow-400 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  className="w-full px-4 py-2 bg-white border-2 dark:bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-400 transition duration-300"
                  rows="4"
                  placeholder="Write your message"
                ></textarea>
              </div>

              {/* Submit button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black font-semibold h-10 rounded-lg hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  Send Message
                </button>
              </div>
            </div>
          </Form>
        </div>

        {/* Image section */}
        <figure className="flex-1">
          <img
            src="./contact.jpg"
            className="w-full h-full object-cover rounded-lg"
            alt="Contact"
          />
        </figure>
      </div>
    </section>
  );
};

export default { contactData, Contact };
