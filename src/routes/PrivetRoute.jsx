import useUser from "../hook/useUser";

const PrivetRoute = ({ children }) => {
  const { username } = useUser();
  return <div></div>;
};

export default PrivetRoute;
