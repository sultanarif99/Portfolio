import "./About.css";
import "../Images/mine.jpg";
const About = () => {
  return (
    <div className="about">
      <div className="main">
        <img src="../Images/mine.jpg" />
        <div className="about-text">
          <h2>About Me</h2>
          <h5>
            Full-Stack <span>Developer</span>
          </h5>
          <p>
            I am a Full-Stack web developer. I can provide clean code and pixel
            perfect design. I also make the website more & more interactive with
            web animations. I can provide clean code and pixel perfect design. I
            aslo make the website more & more interactive with web animations. A
            responsive design makes your website accessible to all users,
            regardless of their devices.
          </p>
          <button type="button">Let's Talk</button>
        </div>
      </div>
    </div>
  );
};
export default About;
