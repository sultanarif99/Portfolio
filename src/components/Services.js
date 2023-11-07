import "./Services.css";
const Services = () => {
  return (
<div className="services">
  <div className="title">
    <h2>Our Services</h2>
  </div>
  <div className="box">
    <div className="card">
      <i className="fa-solid fa-bars"></i>
      <h5>Web Development</h5>
      <div className="para">
        <p>
          Every website should be built with two primary goals: Firstly, it
          needs to work across all devices. Secondly, it needs to be fast as
          possible.
        </p>
          <a className="button" href="#read">
            Read more
          </a>
        
      </div>
    </div>
    <div className="card">
      <i className="fa-regular fa-user"></i>
      <h5>Web Development</h5>
      <div className="para">
        <p>
          Every website should be built with two primary goals: Firstly, it
          needs to work across all devices. Secondly, it needs to be fast as
          possible.
        </p>
        
          <a className="button" href="#read">
            Read more
          </a>
        
      </div>
    </div>
    <div className="card">
      <i className="fa-regular fa-bell"></i>
      <h5>Web Development</h5>
      <div className="para">
        <p>
          Every website should be built with two primary goals: Firstly, it
          needs to work across all devices. Secondly, it needs to be fast as
          possible.
        </p>
       
          <a className="button" href="#read">
            Read more
          </a>
        
      </div>
    </div>
  </div>
</div>
  );
};
export default Services;
