import bgImg from "../../assets/bg-image.jpg";
import bgImgDesktop from "../../assets/background-pattern-desktop.svg";
import bgImgMobile from "../../assets/background-pattern-mobile.svg";

const Login = () => {
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
      <div className="md:w-[450px] shadow-2xl bg-slate-200 p-5 mx-auto">
        <h2 className="text-4xl font-semibold ">Login</h2>
        <form>
          <div className="flex flex-col">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              className="border-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="username">Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="border-2"
            />
          </div>
          <button className="bg-red-400">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
