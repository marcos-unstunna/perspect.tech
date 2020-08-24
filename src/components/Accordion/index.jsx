import React from 'react';

// Styles
import { Container } from './styles';

// Components
import { IoIosAdd } from 'react-icons/io';
import { AiOutlineLine } from 'react-icons/ai';

const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <Container>      
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
        >
        <h4>{ title }</h4>
        <IoIosAdd className={`${!isOpen ? "visibleIcon" : "hiddenIcon"}`}/>
        <AiOutlineLine className={`${!isOpen ? "hiddenIcon" : "visibleIcon"}`}/>
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">
          <p>{children}</p>
        </div>
      </div>
    </Container>
  );
};

export default Accordion;