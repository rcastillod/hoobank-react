// Data
import { stats } from "../constants";
// Styles
import styles from "../style";

const Stats = () => (
  <section
    className={`${styles.flexCenter} flex-col md:flex-row flex-wrap sm:mb-20 gap-5 md:gap-0 mb-6 mt-8 stats`}
  >
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`${styles.flexCenter} flex-col sm:flex-row flex-1 relative`}
      >
        <h4 className="font-poppins font-semibold text-white">{stat.value}</h4>
        <p className="font-poppins font-normal text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
