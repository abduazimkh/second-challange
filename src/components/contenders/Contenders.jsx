import contendersImg from "../../assets/images/contenders.png";
import { CodingCard } from "../../utils/Utils";
import { CgArrowLongRight } from "react-icons/cg";

const Contenders = () => {
  return (
    <>
      <CodingCard
        image={contendersImg}
        title="Identify top contenders"
        text="Identify top contenders and invite them to meet your team using data-driven decisions that help level the playing field for developers everywhere."
        linkText={"Learn more "}
        link={"/"}
        icon={<CgArrowLongRight />}
      />
    </>
  )
}

export default Contenders;