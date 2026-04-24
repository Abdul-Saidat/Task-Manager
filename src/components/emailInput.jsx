import { useEffect, useState } from "react";

function EmailInput() {
  const [emailError, setEmailError] = useState("");
  const [email, setEmail] = useState("");
  const [emails, setEmails] = useState(() => {
    const saved = localStorage.getItem("emails");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("emails", JSON.stringify(emails));
  }, [emails]);

  const handleEmailSubmit = () => {
    if (!email.trim()) {
      setEmailError("Email required");
      return;
    }

    setEmailError("");

    setEmails((prev) => [...prev, email]);

    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email");
      return;
    }

    setEmail("");
    console.log(emails);

    alert("Subscribed successfully");
  };
  return (
    <>
      <div className="lg:max-w-lg mx-auto bg-white p-5 lg:p-10 z-50 shadow-sm rounded-2xl">
        <div className=" flex flex-col gap-3 items-center justify-center">
          <h1 className="text-xl lg:text-[30px] font-bold text-blue-900 text-center leading-tight">
            Get early access to future feature launches
          </h1>
          <p className="text-center">
            Join an exclusive waitlist and be the first to discover new,
            innovative features that helps you keep track of your tasks and
            goals.
          </p>
          <div className="w-full mt-2">
            <form
              action=""
              onSubmit={(e) => {
                (e.preventDefault(), handleEmailSubmit());
              }}
            >
              <div className="flex items-center justify-center gap-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                  className="p-2 lg:px-3 lg:py-2 border border-gray-500 bg-[#f4f1fc] text-[#9698b5] text-[14px] lg:text-base rounded-full focus:border-gray-600 outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="p-2 lg:px-4 lg:py-2 bg-blue-500 rounded-full text-white text-[12px] lg:text-[16px] cursor-pointer"
                >
                  Join Waitlist
                </button>
              </div>
              <span className="text-red-500 text-center">{emailError}</span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmailInput;
