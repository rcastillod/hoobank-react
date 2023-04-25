// Styles
import styles, { layout } from "../style";
// Assets
import { star, shield, send } from "../assets";
// Components
import Button from "./Button";
// Data
import { features } from "../constants";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-col sm:flex-row p-6 rounded-[20px] feature-card`}>
    <div
      className={`w-[64px] h-[64px] mb-3 sm:mb-0 rounded-full bg-dimBlue ${styles.flexCenter}`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex- flex-col ml-3">
      <h5 className="font-semibold text-white text-[18px] leading-[23px]">
        {title}
      </h5>
      <p className="text-dimWhite mt-2">{content}</p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={`${layout.section} mt-20 sm:mt-0`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2} heading2`}>
          You do the business, <br className="sm:block hidden" /> we’ll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles="mt-10" link="#" />
      </div>
      <div className={`${layout.sectionImg} flex-col gap-6`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
