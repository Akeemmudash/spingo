import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AdditionalItem from "./AdditionalItem";
import Questions from "./Questions";
import Review from "./Review";
import { useReviewStore } from "../../store";
import { ChevronDown } from "../../assets/icons";
import PropTypes from "prop-types";

const Tabs = () => {
  const [activeSection, setActiveSection] = useState("additionalInfo");
  const reviewLength = useReviewStore((state) => state.getReviewLength)();

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <section className="mt-5">
      <div className="more-info container">
        <div className="row section__body">
          <div className="col-12">
            <div className="menuHeader d-flex mb-5 flex-column flex-lg-row">
              <h4
                className={`tab d-flex justify-content-between ${
                  activeSection === "additionalInfo" ? "active" : ""
                }`}
                onClick={() => handleSectionClick("additionalInfo")}
              >
                <span>Additional Info</span>
                <TabIcon
                  activeSection={activeSection}
                  section="additionalInfo"
                />
              </h4>
              <h4
                className={`tab d-flex justify-content-between ${
                  activeSection === "questions" ? "active" : ""
                }`}
                onClick={() => handleSectionClick("questions")}
              >
                <span>Questions</span>
                <TabIcon activeSection={activeSection} section="questions" />
              </h4>
              <h4
                className={`tab d-flex justify-content-between ${
                  activeSection === "reviews" ? "active" : ""
                }`}
                onClick={() => handleSectionClick("reviews")}
              >
                <span className="">
                  Reviews<span className="d-lg-none"> ({reviewLength})</span>
                </span>
                <TabIcon activeSection={activeSection} section="reviews" />
              </h4>
            </div>

            <div className="sectionContent">
              <AnimatePresence>
                {activeSection === "additionalInfo" && (
                  <motion.div
                    key="additionalInfo"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AdditionalItem />
                  </motion.div>
                )}
                {activeSection === "questions" && (
                  <motion.div
                    key="questions"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Questions />
                  </motion.div>
                )}
                {activeSection === "reviews" && (
                  <motion.div
                    key="reviews"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Review />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

TabIcon.propTypes = {
  activeSection: PropTypes.string,
  section: PropTypes.string,
};
function TabIcon({ activeSection, section }) {
  return (
    <span
      className="tab__icon"
      style={{
        transform: `${activeSection === section ? "rotate(180deg)" : "none"}`,
      }}
    >
      <ChevronDown />
    </span>
  );
}
export default Tabs;
