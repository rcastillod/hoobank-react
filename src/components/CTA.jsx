// Styles
import styles from "../style";
// Components
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} md:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1">
      <h2 className={`${styles.heading2} heading2`}>
        Let’s try our service now!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
    <div className="mt-14 md:mt-0">
      <Button />
    </div>
  </section>
);

export default CTA;
