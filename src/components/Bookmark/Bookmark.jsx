import React from 'react';
import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className='bg-white p-5 m-7 rounded-xl'>
            <h2 className="text-lg font-normal text-left"> {title} </h2>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
};

export default Bookmark;


// Better ReactJS Code Snippet
// rafcp:	Creates a stateless React component as a named function with PropTypes