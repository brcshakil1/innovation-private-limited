import { IoSearch } from "react-icons/io5";

const Banner = ({ setSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.name.value);
  };

  return (
    <div className="min-h-[40vh] bg-[#3f1a44] rounded-b-lg mb-10 md:mb-14">
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Search..." />
        <button>
          <IoSearch />
        </button>
      </form>
    </div>
  );
};

export default Banner;
