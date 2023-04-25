import { quotes } from "../assets";
import styles from "../style";

const FeedBackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] mr-0 sm:mr-5 md:mr-10 my-5 feedback-card">
    <img src={quotes} alt="quotes" className="w-[43px] h-[28px]" />
    <p className={`${styles.paragraph} text-base text-white my-10`}>
      {content}
    </p>
    <div className="flex">
      <img src={img} alt={name} className="w-[48px] h-[48px]" />
      <div className="flex flex-col ml-4">
        <h5 className="font-semibold text-[18px] leading-[32px] text-white">
          {name}
        </h5>
        <p
          className={`${styles.paragraph} text-base text-[14px] leading-5 text-dimWhite italic font-light`}
        >
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedBackCard;
