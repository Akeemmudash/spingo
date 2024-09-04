import { useEffect, useRef, useState } from "react";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import { Form, InputGroup } from "react-bootstrap";

SearchToggler.propTypes = {
  onClick: PropTypes.func,
};

function SearchToggler({ onClick }) {
  return (
    <button onClick={onClick} className="btn-reset" aria-label="Search">
      <SearchIcon />
    </button>
  );
}

export default function Search() {
  const [isModalVisible, setModalVisible] = useState(false);
  const inputRef = useRef(null);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setModalVisible(false);
  };

  useEffect(() => {
    if (isModalVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isModalVisible]);
  return (
    <>
      <SearchToggler onClick={openModal} />
      <Modal
        show={isModalVisible}
        onHide={closeModal}
        contentClassName="rounded-pill overflow-hidden"
      >
        <Form
          className="mb-0"
          onSubmit={handleSubmit}
          id="search"
          name="search"
        >
          <InputGroup className="">
            <InputGroup.Text className="bg-white">
              <button className="btn-reset btn-animation">
                <SearchIcon />
              </button>
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Search"
              className=" fs-5 mb-0 shadow-none border-0"
              aria-label="Search"
              role="search"
              ref={inputRef}
            />
          </InputGroup>
        </Form>
      </Modal>
    </>
  );
}
function SearchIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" fill="#F5F5F5" />
      <g id="Landing Page/Product Page/Flyout Cart/Shop Page">
        <path
          d="M-1701 -582C-1701 -583.105 -1700.1 -584 -1699 -584H9361C9362.1 -584 9363 -583.105 9363 -582V7059C9363 7060.1 9362.1 7061 9361 7061H-1699C-1700.1 7061 -1701 7060.1 -1701 7059V-582Z"
          fill="#E6E9EC"
        />
        <path
          d="M-1699 -583H9361V-585H-1699V-583ZM9362 -582V7059H9364V-582H9362ZM9361 7060H-1699V7062H9361V7060ZM-1700 7059V-582H-1702V7059H-1700ZM-1699 7060C-1699.55 7060 -1700 7059.55 -1700 7059H-1702C-1702 7060.66 -1700.66 7062 -1699 7062V7060ZM9362 7059C9362 7059.55 9361.55 7060 9361 7060V7062C9362.66 7062 9364 7060.66 9364 7059H9362ZM9361 -583C9361.55 -583 9362 -582.552 9362 -582H9364C9364 -583.657 9362.66 -585 9361 -585V-583ZM-1699 -585C-1700.66 -585 -1702 -583.657 -1702 -582H-1700C-1700 -582.552 -1699.55 -583 -1699 -583V-585Z"
          fill="black"
          fillOpacity="0.1"
        />
        <g clipPath="url(#clip0_1_3)">
          <rect
            width="1440"
            height="5595"
            transform="translate(-1150 -58)"
            fill="white"
          />
          <g id="Navigation Bar">
            <rect
              width="1440"
              height="60"
              transform="translate(-1150 -18)"
              fill="white"
            />
            <g id="Icons">
              <g id="interface/outline/search 02">
                <path
                  id="Vector"
                  d="M18.5 18.5L22 22M21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21C16.7467 21 21 16.7467 21 11.5Z"
                  stroke="#001F3F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1_3">
          <rect
            width="1440"
            height="5595"
            fill="white"
            transform="translate(-1150 -58)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
