import rolling from "../../img/rolling.svg";
import { LoadingContainer } from "./style";

function loading() {
  return (
    <LoadingContainer>
      <img src={rolling} />
    </LoadingContainer>
  );
}

export default loading;
