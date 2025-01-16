


import React from 'react';
import BandMembers from '../../Assets/BandMembers.jpeg';

const About = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="container-fluid text-center py-5 bg-secondary text-white">
        <h1> The Generics</h1>
      </div>

      {/* About Section */}
      <div className="container my-5">
        <h1 className="text-center mb-4">ABOUT</h1>

      
        <div>
          {/* Image with Floating Effect */}
          <img
            src={BandMembers}
            alt="Band Members"
            className="img-fluid rounded-circle float-start me-4 mb-2"
            style={{ maxWidth: '300px', maxHeight: '300px', objectFit: 'cover' }}
          />
          {/* Text Wrapping Around Image */}
          <p>
            Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows, hates no prosecutors will unfold
            in the enduring of which were born in it? Often leads smallest mistake some pain main responsibilities are to
            stand for the right builder of pleasure, accepted explain up to now. , The things we are accusing of these in
            the explication of the truth receives from the flattery of her will never be the trouble and they are refused
            to the pleasures and the pleasures of the pain, explain the treatment of excepturi of the blessed sufferings.
            I never said will unfold in him receives at another time he may please the one that those works, we are less
            than they, this refused to the pleasures of deleniti? Those are!
          </p>
          <p>
            The greater, therefore, an obstacle to the duties of the debts receives the very great importance to us that
            these are consequent to that question is answered, which was selected for the fault, it is often one of us,
            however, have any! Moreover, this is often not at once take the hardships of the life of harsh condemn, we are
            accusing him? Him whom something large cisterns.
          </p>
          {/* Clearfix to ensure content below floats correctly */}
          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  );
};

export default About;





