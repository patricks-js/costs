import { Loader } from "./styles";
import loading from "../../assets/images/loading.svg";

export const Loading = () => {
  return (
    <Loader>
      <img src={loading} alt="loading" />
    </Loader>
  );
};
