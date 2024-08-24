import PropTypes from "prop-types";

const ButtonUse = ({ Dbtn, Text }) => {
  return (
    <div>
      <button className={Dbtn}>{Text}</button>
    </div>
  );
};

ButtonUse.propTypes = {
  Dbtn: PropTypes.string,
  Text: PropTypes.string,
};
export default ButtonUse;
