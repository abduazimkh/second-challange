import binaryImg from "../../assets/images/binarytree-1.png";
import { CodingCard } from "../../utils/Utils";
import { CgArrowLongRight } from "react-icons/cg";

const BinaryTree = () => {
  return (
    <>
      <CodingCard
        image={binaryImg}
        title="Leave the binary tree behind."
        text="Build coding questions using our library of dev-friendly content that challenges them to solve the problems they’d actually tackle on the job."
        linkText={"Start free trial "}
        link={"/"}
        icon={<CgArrowLongRight />}
      />
    </>
  )
}

export default BinaryTree;