import squareIcon from "../../images/Icons/Square.svg";
import starIcon from "../../images/Icons/Star.svg";
import square2Icon from "../../images/Icons/Square2.svg";
import Feature from "./Feature";

const FeatureList = () => {
  return (
    <div className="container my-12 mx-auto flex flex-wrap gap-4 lg:gap-16 px-4 bg-features  bg-center">
      <Feature title="First Feature" icon={squareIcon} />
      <Feature title="First Feature" icon={starIcon} />
      <Feature title="First Feature" icon={square2Icon} />
    </div>
  );
};

export default FeatureList;
