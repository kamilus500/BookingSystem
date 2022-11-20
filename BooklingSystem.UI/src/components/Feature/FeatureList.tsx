import squareIcon from "../../images/Icons/Square.svg";
import starIcon from "../../images/Icons/Star.svg";
import square2Icon from "../../images/Icons/Square2.svg";
import Feature from "./Feature";

const FeatureList = () => {
  return (
    //bg-features bg-center
    <div
      id="features"
      className="container my-12 mx-auto flex flex-wrap gap-4 lg:gap-16 px-4"
    >
      <Feature
        title="Namioty"
        text="Szeroki wybór pięknych namiotów imprezowych, niezapomniane wrażenia!"
        icon={squareIcon}
      />
      <Feature
        title="Sprzęt imprezowy"
        text="Nagłośnienie, muzyka, karaoke! To wszystko dostępne u nas!"
        icon={starIcon}
      />
      <Feature
        title="Grill"
        text="Większa impreza? Może grill wieczorem? Oczywiście!"
        icon={square2Icon}
      />
    </div>
  );
};

export default FeatureList;
