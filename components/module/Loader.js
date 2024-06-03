import { ThreeDots } from "react-loader-spinner";
const Loader = () => {
  return (
    <ThreeDots
      color="#03ab81"
      height={45}
      ariaLabel="three-dots-loading"
      visible={true}
      wrapperStyle={{ margin: "auto" }}
    />
  );
};
export default Loader;
