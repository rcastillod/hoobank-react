// Styles
import styles, { layout } from "../style";
// Assets
import { card } from "../assets";
// Components
import Button from "./Button";

const CardDeal = () => (
  <section id="product" className={`${layout.section}`}>
    <div className={`${layout.sectionInfo} mt-5 sm:mt-0`}>
      <h2 className={`${styles.heading2} heading2`}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button styles="mt-10" link="#" />
    </div>
    <div className={`${layout.sectionImg} flex-col gap-6`}>
      <img src={card} alt="card" />
    </div>
  </section>
);

export default CardDeal;
