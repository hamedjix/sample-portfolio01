//import pictures
import home1 from '../img/home1.png';

//import styles
import {
  StyledHide,
  StyledDescription,
  StyledLayout,
  StyledImage,
} from '../styles';

//import component
const AboutSection = () => {
  return (
    <StyledLayout>
      <StyledDescription>
        <div className='title'>
          <StyledHide>
            <h2>We Work to make</h2>
          </StyledHide>
          <StyledHide>
            <h2>
              your <span>dreams</span>
            </h2>
          </StyledHide>
          <StyledHide>
            <h2>come true.</h2>
          </StyledHide>
        </div>
        <p>
          Contact us for any photography or videography ide have professional
          with amazing skills.
        </p>
        <button>Contact Us</button>
      </StyledDescription>
      <StyledImage>
        <img src={home1} alt='guy with camera' />
      </StyledImage>
    </StyledLayout>
  );
};

export default AboutSection;
