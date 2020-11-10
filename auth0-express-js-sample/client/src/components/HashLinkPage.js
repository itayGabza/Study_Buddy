import React from 'react';
import PropTypes from 'prop-types';
import objectAssign from 'object-assign';
import ContentCard from '../views/ContentCard'
import Feed from '../views/Feed'
import Post from '../views/Post'

import HomeImage from '../data/img/home.jpg'

const propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

function HashLinkPage() {
  const sectionStyle = {
    padding: '2.5vw 3.5vw 12vh 3.5vw',
    boxSizing: 'border-box',
    height: '100vh',
  };
  const h2Style = { fontSize: '22px' };
  const h3Style = { fontSize: '18px', marginTop: '2.5vh' };

  return (
    <div>
      <section style={objectAssign({},)} id="section-one">
        <img src={HomeImage}></img>

      </section>
      <section id="post">
        <div className="feed">
          <Post></Post>
        </div>
      </section>
      <section id="feed">
        <div className="feed">
          <Feed ></Feed>
        </div>
      </section>
      <section id="section-two">
        <ContentCard ></ContentCard>
      </section>
      <section style={objectAssign({ backgroundColor: '#C0C0C0' }, sectionStyle)} id="section-three">
        <h2 style={h2Style}>Section Three</h2>
        <h3 style={h3Style}>Go to:</h3>

      </section>
    </div>
  );
}

HashLinkPage.propTypes = propTypes;

export default HashLinkPage;