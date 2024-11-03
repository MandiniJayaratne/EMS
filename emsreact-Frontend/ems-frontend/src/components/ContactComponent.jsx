import React, { useState } from "react";

const ContactComponent = () => {
  const [result, setResult] = useState("");
  const defaultEmail = "mandinijay@gmail.com"; // default email address

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9a672a11-9725-45c7-a069-b7cbcb5d52a1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="container mt-5" style={{ paddingLeft: "0px" }}>
      <div className="border border-dark p-4" style={{ borderColor: "purple" }}>
        <h2>Contact Upper Managment</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              {" "}
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Employee Email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message:
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ backgroundColor: "purple" }}
          >
            SUBMIT
          </button>
        </form>
        <div className="mt-3">
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
