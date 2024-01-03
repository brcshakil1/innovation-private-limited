import { useNavigate } from "react-router-dom";
import bgImgDesktop from "../../assets/background-pattern-desktop.svg";
import bgImgMobile from "../../assets/background-pattern-mobile.svg";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const password = form.password.value;

    const user = {
      username,
      password,
    };

    // login from dummyJson
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.username) {
          const userInfo = {
            username: data?.username,
            name: `${data?.firstName} ${data?.lastName}`,
            image: data?.image,
            token: data?.token,
          };
          localStorage.setItem("user", JSON.stringify(userInfo));
          return navigate("/");
        }
      });
  };

  return (
    <div>
      {/* banner image for login page */}
      <div>
        <picture>
          <source media="(min-width: 650px)" srcSet={bgImgDesktop} />
          <img className="w-full" src={bgImgMobile} alt="" />
        </picture>
      </div>
      {/* Login in form */}
      <div
        className="w-[90%] md:w-[450px] bg-white absolute shadow-xl
      top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
       shadow-[#88469286] rounded-lg p-5 mx-auto"
      >
        <h2 className="text-4xl font-semibold pb-5">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="text-xl pb-2">Username</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              className="border border-slate-400
              outline-none focus:outline focus:outline-[#88469286]
               rounded-md text-lg py-2 px-4 mb-3"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xl pb-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="border border-slate-400
              outline-none focus:outline focus:outline-[#88469286]
               rounded-md text-lg py-2 px-4 mb-4"
            />
          </div>
          <button className="w-full py-2 hover:bg-[#3f1a44c7] bg-[#3f1a44] text-lg text-white font-bold rounded-md">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
