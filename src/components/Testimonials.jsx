// Styles
import styles from "../style";
// Data
import { feedback } from "../constants";
// Components
import FeedBackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    {/* TODO */}
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
    <div className="w-full flex justify-between items-center flex-col md:flex-row mb-6 sm:mb-16 relative z-[1]">
      <h2 className={`${styles.heading2} heading2`}>
        What people are <br className="hidden sm:block" /> saying about us
      </h2>
      <p className={`${styles.paragraph} mt-6 md:mt-0 `}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
    {/* Feedback cards */}
    <div className="flex flex-wrap justify-center sm:justify-start w-full relative z-[1] feedback-container">
      {feedback.map((card) => (
        <FeedBackCard key={card.id} {...card} />
      ))}
    </div>
    {/* /Feedback cards */}
  </section>
);

export default Testimonials;
