import { social } from "./Constants";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <p>Sultan Arif</p>
      <p>Full Stack Developer</p>
      <ul className="socials">
        {social.map((social) => {
          return <li key={social.id}>{social.icons}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
