// Assets
import styles from "../style";
// Data
import { clients } from "../constants";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div
      className={`${styles.flexCenter} flex-wrap md:justify-between w-full gap-5`}
    >
      {clients.map((client) => (
        <div key={client.id} className="client__wrapper relative">
          <img
            src={client.logo}
            alt="client logo"
            className="w-[192px] transition-all duration-300"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
