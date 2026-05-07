import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function Email() {
  const [emailError, setEmailError] = useState("");
  const [email, setEmail] = useState("");
  const [emails, setEmails] = useState(() => {
    const saved = localStorage.getItem("emails");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("emails", JSON.stringify(emails));
  }, [emails]);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    const normalizedEmail = email.toLowerCase().trim();

    if (!normalizedEmail) {
      setEmailError("Email required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(normalizedEmail)) {
      setEmailError("Invalid email format");
      return;
    }

    if (emails.includes(normalizedEmail)) {
      setEmailError("Email already exists");
      return;
    }
    setEmails((prev) => {
      if (prev.includes(normalizedEmail)) return prev;
      return [...prev, normalizedEmail];
    });

    setEmail("");
    setEmailError("");
    toast.success("Subscribed successfully");
  };
  return (
    <>
      <section className="mt-7 lg:mt-10">
        <h2 className="text-xl lg:text-3xl font-semibold text-center mb-4 mt-6">
          Join Waitlist
        </h2>
        <div className=" mx-auto bg-white p-5 lg:p-10 z-50 shadow-sm rounded-2xl">
          <div className=" flex flex-col gap-3 mx-auto max-w-lg">
            <h1 className="text-xl lg:text-[30px] font-bold text-blue-900 text-center leading-tight">
              Get early access to future feature launches
            </h1>
            <p className="text-center">
              Join an exclusive waitlist and be the first to discover new,
              innovative features that helps you keep track of your tasks and
              goals.
            </p>
            <div className="mt-2 w-full">
              <form
                name="waitlist"
                onSubmit={handleEmailSubmit}
                className="w-full"
              >
                <div className="flex items-center gap-3 mt-5 w-full">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                    // required
                    className={`${emailError ? "border border-red-500 flex-1 min-w-0 p-2 lg:px-3 lg:py-2 bg-[#f4f1fc] text-[#9698b5] text-[14px] lg:text-base rounded-full outline-none" : `flex-1 min-w-0 p-2 lg:px-3 lg:py-2 border border-gray-500 bg-[#f4f1fc] text-[#9698b5] text-[14px] lg:text-base rounded-full focus:border-gray-600 outline-none`}flex-1 min-w-0 p-2 lg:px-3 lg:py-2 border border-gray-500 bg-[#f4f1fc] text-[#9698b5] text-[14px] lg:text-base rounded-full focus:border-gray-600 outline-none`}
                    value={email}
                    onChange={handleChange}
                  />
                  <button
                    type="submit"
                    className="p-2 lg:px-4 lg:py-2 bg-blue-500 border border-blue-500 rounded-full text-white text-[12px] lg:text-[16px] cursor-pointer whitespace-nowrap shrink-0"
                  >
                    Join Waitlist
                  </button>
                  <ToastContainer />
                </div>
                <span className="text-red-500 text-center">{emailError}</span>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Email;
