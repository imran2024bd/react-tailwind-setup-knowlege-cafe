import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="md:w-1/3 text-center  bg-gray-100 rounded-2xl ml-7 mt-8 py-8">
            <h3 className='text-2xl '>Bookmarked Blogs: {bookmarks.length} </h3>
            {
                bookmarks.map(bookmark => <Bookmark
                    key={bookmark.id}
                    bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired
}


export default Bookmarks;


// rafcp:	Creates a stateless React component as a named function with PropTypes