import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div>
          <blockquote>
            <b>
              I started learning programming since Im 15 <br /> And Im still
              learning and enjoying it
            </b>
          </blockquote>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a
              target="_blank"
              href="https://twitter.com/sowrovsarkar63"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="xl" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sowrovsarkar63/"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </a>
            <a
              target="_blank"
              href="https://github.com/sowrovsarkar63"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
