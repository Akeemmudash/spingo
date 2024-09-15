import Breadcrumb from "../../components/Breadcrumb";

const ContactHeader = () => {
  return (
    <section className="contact-header">
      <div className="container">
        <Breadcrumb />
        <div className="">
          <h1 className="contact-header__heading font-primary">
            We believe in sustainable products. We’re passionate about you and
            your vehicle lives.
          </h1>
          <p>
            As Vescan continues to expand its offerings, the company is poised
            to become a leader in the automotive repair industry. Future
            developments include the introduction of advanced analytics tools
            that will allow users to track their purchasing patterns and
            optimize their inventory management. Vescan also plans to launch a
            mobile app, further enhancing accessibility and convenience for its
            users.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHeader;
