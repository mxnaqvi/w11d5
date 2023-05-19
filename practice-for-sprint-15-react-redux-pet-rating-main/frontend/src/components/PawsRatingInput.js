import {useState} from 'react'

const PawsRatingInput = ({ rating, disabled, onChange }) => {

  const [activeRating, setActiveRating] = useState(rating);

  const handleMouseEnter = (rating) => {
    if (disabled === false) {
      setActiveRating(rating);
    }
  };

  const handleMouseLeave = () => {
    if (disabled === false) {
      setActiveRating(rating);
    }
  };

  return (
    <>
    {/* <input
      disabled={disabled}
      value={rating}
      onChange={onChange}
    /> */}
    <div className="rating-input">
    <div
          className={activeRating >= 1 ? 'filled' : 'empty'}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
          onClick={() => onChange(1)}
        >
          <i className="fa fa-paw"></i>
    </div>
    <div 
          className={activeRating >= 2 ? 'filled' : 'empty'}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
          onClick={() => onChange(2)}
          >
    <i className="fa fa-paw"></i>
    </div>
    <div 
         className={activeRating >= 3 ? 'filled' : 'empty'}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
          onClick={() => onChange(3)}
          >
    <i className="fa fa-paw"></i>
    </div>
    <div  
          className={activeRating >= 4 ? 'filled' : 'empty'}
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={handleMouseLeave}
          onClick={() => onChange(4)}
          >
    <i className="fa fa-paw"></i>
    </div>
    <div  className={activeRating >= 5 ? 'filled' : 'empty'}
          onMouseEnter={() => handleMouseEnter(5)}
          onMouseLeave={handleMouseLeave}
          onClick={() => onChange(5)}
          >
    <i className="fa fa-paw"></i>
    </div>
  </div>
    </>
  );

};
export default PawsRatingInput;