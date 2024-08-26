import { Form, InputGroup } from "react-bootstrap";
import "./footer.css";
export default function Footer() {
  return (
    <footer className="mt-auto mb-0">
      <JoinNewsLetter />
      <div className="w-100  text-white bg-primary-600 mb-0 text-center px-5 py-4"></div>
    </footer>
  );
}
function JoinNewsLetter() {
  return (
    <section className="join-news-letter d-flex justify-content-center align-items-center flex-column">
      <h2 className="text-white">Join Our Newsletter</h2>

      <Form className="news-letter__form">
        <InputGroup className="">
          <InputGroup.Text className="bg-transparent border-0 border-bottom border-white rounded-0">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Icon/email">
                <path
                  id="Union"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.07675 6.53075C4.23299 6.01858 4.70925 5.646 5.27254 5.646H19.2725C19.8358 5.646 20.3121 6.01858 20.4683 6.53075L12.2725 11.9946L4.07675 6.53075ZM2.52257 6.88226C2.52244 6.89026 2.52242 6.89826 2.52254 6.90625V16.896C2.52254 18.4148 3.75376 19.646 5.27254 19.646H19.2725C20.7913 19.646 22.0225 18.4148 22.0225 16.896V6.90622M20.5225 8.29738V16.896C20.5225 17.5864 19.9629 18.146 19.2725 18.146H5.27254C4.58218 18.146 4.02254 17.5864 4.02254 16.896V8.29738L11.8565 13.52C12.1084 13.688 12.4366 13.688 12.6886 13.52L20.5225 8.29738ZM22.0225 6.88229C22.0151 5.36981 20.7868 4.146 19.2725 4.146H5.27254C3.75834 4.146 2.52997 5.3698 2.52257 6.88226"
                  fill="#FEFEFE"
                />
              </g>
            </svg>
          </InputGroup.Text>

          <Form.Control
            placeholder="Email"
            color="#fff"
            aria-label="Username"
            type="email"
            className="border-0 border-bottom shadow-none mb-0 bg-transparent text-white"
          />
          <button className="btn-reset text-white border-bottom">
            Sign Up
          </button>
        </InputGroup>
      </Form>
    </section>
  );
}
