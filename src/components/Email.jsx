import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function Email() {
  const [loading, setLoading] = useState(false);
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
      setLoading(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(normalizedEmail)) {
      setEmailError("Invalid email format");
      setLoading(false);
      return;
    }

    if (emails.includes(normalizedEmail)) {
      setEmailError("Email already exists");
      setLoading(false);
      return;
    }
    setEmails((prev) => {
      if (prev.includes(normalizedEmail)) return prev;
      setLoading(true);
      return [...prev, normalizedEmail];
    });

    setEmail("");
    setEmailError("");
    toast.success("Subscribed successfully");
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    // setLoading(false)
  };
  return (
    <>
      <section className="mt-10">
        <h2 className="dark:text-gray-100 text-xl lg:text-3xl font-semibold text-center mb-4 mt-6">
          Join Waitlist
        </h2>
        <div className="dark:bg-slate-800 dark:text-gray-100 mx-auto bg-white p-5 lg:p-10 z-50 shadow-sm rounded-2xl">
          <div className="flex flex-col gap-3 mx-auto max-w-lg">
            <h1 className="dark:text-gray-50 text-xl lg:text-[30px] font-bold text-blue-900 text-center leading-tight">
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
                <div className="flex flex-col gap-3 lg:flex-row mt-5 w-full">
                  <span className="block lg:hidden text-red-500">
                    {emailError}
                  </span>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                    // required
                    className={`${emailError ? "border border-red-500 px-4 py-3 lg:px-3 lg:py-2 bg-[#f4f1fc] text-[#9698b5] text-sm lg:text-base rounded-full outline-none" : `p-2 lg:px-3 lg:py-2 border border-gray-500 bg-[#f4f1fc] text-[#9698b5] text-sm lg:text-base rounded-full focus:border-gray-600 outline-none`} flex-1 min-w-0 p-2 lg:px-3 lg:py-2 border border-gray-500 bg-[#f4f1fc] text-[#9698b5] text-sm lg:text-base rounded-full focus:border-gray-600 outline-none dark:bg-slate-500 dark:text-white dark:placeholder-slate-300 dark:border-slate-700 dark:focus:border-slate-600`}
                    value={email}
                    onChange={handleChange}
                  />
                  <button
                    type="submit"
                    className="px-4 py-3 lg:px-3 lg:py-2 bg-blue-500 hover:bg-blue-600 border border-blue-500 rounded-full text-white text-sm lg:text-base cursor-pointer"
                  >
                    {loading ? "Loading..." : "Join waitlist"}
                  </button>
                  <ToastContainer />
                </div>
                <div>
                  <p className="hidden lg:block text-red-500">{emailError}</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Email;
