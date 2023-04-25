// Styles
import styles, { layout } from "../style";
// Assets
import { bill, google, apple } from "../assets";

const Billing = () => (
  <section id="product" className={`${layout.section}`}>
    <div className={`${layout.sectionImgReverse} flex-col gap-6`}>
      <img src={bill} alt="billing" className="relative  z-[5]" />
      {/* Gradient bg */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom -0 w-[50%] h-[50%] rounded-full pink__gradient" />
      {/* /Gradient bg */}
    </div>
    <div className={`${layout.sectionInfo} mt-5 sm:mt-0`}>
      <h2 className={`${styles.heading2} heading2`}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
      <div className="flex gap-5 mt-10">
        <a href="#">
          <img src={google} alt="play store" />
        </a>
        <a href="#">
          <img src={apple} alt="appstore" />
        </a>
      </div>
    </div>
  </section>
);

export default Billing;
