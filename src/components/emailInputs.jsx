import { useState } from "react";

function EmailInput() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailSubmit = () => {
    if (!email) {
      setEmailError("Email required");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email");
      return;
    }

    setEmailError("");
    alert("Subscribed successfully");
  };
  return (
    <>
      <div>
        <h1>Join the waitlist</h1>
        <p>
          Join an exclusive waitlist and be the first to discover new,
          innovative features that helps you keep track of your tasks and goals.
        </p>
        <div className="max-w-md border">
          <form
            action=""
            onSubmit={(e) => {
              (e.preventDefault(), handleEmailSubmit());
            }}
          >
            {/* <h2>Join the waitlist</h2> */}
            <p>Sign up now for early notification upon launch.</p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              className="px-3 py-2"
            />
            <button>Join Waitlist</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default EmailInput;
