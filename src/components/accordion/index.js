/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Accordion,
} from 'react-bootstrap';
import generateKey from '../../utils/keyGenerator';

const MwmAccordion = ({ items }) => (
  <Accordion>
    {items.map(({ postings, title }) => postings.map(({
      text, lists, applyUrl, categories: { commitment, location, team }, hostedUrl,
    }) => {
      const key = generateKey(title);
      return (
        <Accordion.Item eventKey={`${key}`} key={generateKey(title)}>
          <Accordion.Header>{text}</Accordion.Header>
          <Accordion.Body className="d-c">
            {lists.map(({ text: listTitle, content }) => (
              <div key={generateKey(listTitle)}>
                <h5>{listTitle}</h5>
                <div dangerouslySetInnerHTML={{ __html: content }} className="accordion-m-b-1" />
              </div>
            ))}

            <div className="accordion-d-r-sb">
              <div className="accordion-d-c">
                <h6>Commitment</h6>
                <span>{commitment}</span>
              </div>
              <div className="accordion-d-c">
                <h6>Location</h6>
                <span>{location}</span>
              </div>
              <div className="accordion-d-c">
                <h6>Team</h6>
                <span>{team}</span>
              </div>
            </div>
            <div className="accordion-d-r-fe">
              <a href={`${hostedUrl}`} target="_blank" className="btn" rel="noreferrer">Full job description</a>
              <a href={`${applyUrl}`} target="_blank" variant="primary" className="btn" rel="noreferrer">Apply for this job</a>
            </div>

          </Accordion.Body>
        </Accordion.Item>
      );
    }))}
  </Accordion>
);

MwmAccordion.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default MwmAccordion;
