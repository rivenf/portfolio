import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

export default function SocialIcons() {
  return (
    <div className="socialIcons">
      <a href="https://github.com/rivenf" target="_blank">
        <FontAwesomeIcon icon={faGithubSquare} />
      </a>
      <a
        href="https://www.linkedin.com/in/nicole-rivera-1b88ab256"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://www.instagram.com/rivenf/" target="_blank">
        <FontAwesomeIcon icon={faInstagramSquare} />
      </a>
    </div>
  );
}
