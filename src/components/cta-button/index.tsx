import { HomeDataProps } from "@/utils/types/home-type";
import { Phone } from "lucide-react";
import styles from './styles.module.scss'

const CtaButton = ({object}: HomeDataProps) => {
    return ( 
        <a target="_blank" href={object.metadata.cta_button.url} className={styles.link}>
          <Phone size={24} color="#fff" />
          {object.metadata.cta_button.title}
        </a>
     );
}
 
export default CtaButton;