import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

export default function SocialIcons() {
  return (
    <div className="socialIcons">
      <a href="" target="_blank">
        <FontAwesomeIcon icon={faGithubSquare} />
      </a>
      <a href="" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="" target="_blank">
        <FontAwesomeIcon icon={faInstagramSquare} />
      </a>
    </div>
  );
}
