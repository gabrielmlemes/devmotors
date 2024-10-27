import { HomeDataProps } from "@/utils/types/home-type";
import styles from "./styles.module.scss";
import { Mail, Phone, Map, Clock } from "lucide-react";
import CtaButton from "@/components/cta-button";
import { getDataHome } from "@/utils/actions/get-data";

const Footer = async ({ object }: HomeDataProps) => {
const data: HomeDataProps = await getDataHome();

  return (
    <footer id="contatos" className={styles.footer}>
      <section className={styles.section}>
        <h3 className={styles.contatosTitle}>Contatos</h3>

        <div className={styles.content}>
          <div className={styles.item}>
            <Phone size={28} color="#fff" />

            <div className={styles.text}>
              <strong>Telefone</strong>
              <p>{object.metadata.contact.phone}</p>
            </div>
          </div>

          <div className={styles.item}>
            <Mail size={28} color="#fff" />

            <div className={styles.text}>
              <strong>Email</strong>
              <p>{object.metadata.contact.email}</p>
            </div>
          </div>

          <div className={styles.item}>
            <Map size={28} color="#fff" />

            <div className={styles.text}>
              <strong>Endereço</strong>
              <p>{object.metadata.contact.adress}</p>
            </div>
          </div>

          <div className={styles.item}>
            <Clock size={28} color="#fff" />

            <div className={styles.text}>
              <strong>Horário de funcionamento</strong>
              <p>{object.metadata.contact.time}</p>
            </div>
          </div>
        </div>
      </section>

      <CtaButton object={data.object}/>

    </footer>
  );
};

export default Footer;
