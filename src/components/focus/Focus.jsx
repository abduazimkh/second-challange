import focus from "../../assets/images/code-1.png";
import { CodingCard } from "../../utils/Utils";
import { CgArrowLongRight } from "react-icons/cg";

const Focus = () => {
  return (
    <>
      <CodingCard
        image={focus}
        title="Focus on what really matters: the code."
        text="Build skills-based coding tests with tech problems a developer would encounter on the job — and hire the team behind your next big idea."
        linkText={"Request a demo"}
        link={"/"}
        icon={<CgArrowLongRight />}
      />
    </>
  )
}

export default Focus;