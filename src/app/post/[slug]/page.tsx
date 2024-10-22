import styles from "./styles.module.scss";

const ServiceDetails = ({ params: { slug } }: { params: { slug: string } }) => {
  return (
    <div>
      <h1>Página {slug}</h1>
    </div>
  );
};

export default ServiceDetails;
