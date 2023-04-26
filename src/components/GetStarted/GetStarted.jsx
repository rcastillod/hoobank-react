// Styles
import "./GetStarted.css";
import styles from "../../style";
// Assets
import { arrowUp, arrowUpBlack } from "../../assets";

const GetStarted = () => {
  return (
    <a
      href="#"
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] transition-all duration-300 getstarted__button`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full getstarted__button-inner`}
      >
        <div className={`${styles.flexStart} flex-row mr-3 gap-1`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="getstarted__button-inner_text text-gradient transition-all duration-300">
              Get
            </span>
          </p>
          <div className="w-[23px] h-[23px] overflow-hidden relative getstarted__button-inner_icon">
            <img
              src={arrowUp}
              alt=""
              className="w-full h-full object-contain absolute inset-0"
            />
            <img
              src={arrowUpBlack}
              alt=""
              className="w-full h-full object-contain absolute inset-0"
            />
          </div>
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="getstarted__button-inner_text text-gradient transition-all duration-300">
            Started
          </span>
        </p>
      </div>
    </a>
  );
};

export default GetStarted;
