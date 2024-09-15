import { clutchKits, brakePads, sparkPlugs } from "../../assets/shopCollection";
import PropTypes from "prop-types";
import Button from "../../components/Button";

const data = [
  {
    image: clutchKits,
    title: "clutch kits",
    path: "clutch-kits",
  },
  {
    image: brakePads,
    title: "brake pads",
    path: "brake-pads",
  },
  {
    image: sparkPlugs,
    title: "spark Plugs",
    path: "spark-plugs",
  },
];
export default function ShopCollectionSection() {
  const [clutch, brake, spark] = data;
  return (
    <section className="shop-collection-section container mt-5">
      <h2 className="text-center text-lg-start">Shop Collection</h2>
      <div className="section__body">
        <div className="row">
          <div className="col-12 col-md-6">
            <ShopCollectionCard collection={clutch} />
          </div>
          <div className="col-12 col-md-6">
            <div className="row w-100 mx-auto h-100">
              <div className="col-12 p-0  mt-0">
                <ShopCollectionCard collection={brake} />
              </div>
              <div className="col-12 p-0 mt-md-auto">
                <ShopCollectionCard collection={spark} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

ShopCollectionCard.propTypes = {
  collection: PropTypes.object,
};

function ShopCollectionCard({ collection }) {
  const { image, title, path } = collection;
  return (
    <div className="shop-collection__item position-relative">
      <img
        src={image}
        alt="clutch kits"
        className="w-100 h-100 object-fit-cover"
      />
      <div className="title position-absolute bottom-0 p-3 p-lg-4 p-xl-5">
        <h3 className="text-capitalize font-primary mb-0 mb-lg-2">{title}</h3>
        <Button
          buttonType="link"
          variant="underline"
          hasUnderlineAndArrow
          to={`shop-collections/${path}`}
          className="collection__link"
        >
          Collections
        </Button>
      </div>
    </div>
  );
}
