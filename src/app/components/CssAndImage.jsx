import Image from "next/image";
import style from "../css/CssAndImage.module.css";

import MyImage from "../../../public/images/dino.jpg";

const CssAndImage = () => {
  return (
    <>
      <p className="text-style">My global css example</p>
      <p className={style.my_text_style}>My module css example</p>
      <p className="text-red-600">My tailwind css example</p>
      <Image src={MyImage} width={200} height={350} alt="Dinosaur" />
    </>
  );
};

export default CssAndImage;
