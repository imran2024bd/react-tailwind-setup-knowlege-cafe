import PropTypes from 'prop-types'
const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3">
            <h3 className='text-3xl'>Bookmarks: {bookmarks.length} </h3>
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks: PropTypes.object.isRequired
}


export default Bookmarks;