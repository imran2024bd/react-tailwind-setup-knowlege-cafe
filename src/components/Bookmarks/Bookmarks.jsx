import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 text-center  bg-gray-100 rounded-2xl ml-7 py-8 ">
            <div className="text-2xl text-violet-700" >
                <h3 >Reading Spent Time : {readingTime} min</h3>
            </div>
            <h3 className='text-2xl   mt-8'>Bookmarked Blogs: {bookmarks.length} </h3>
            {
                bookmarks.map((bookmark, idx) => <Bookmark
                    key={idx}
                    bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number
}


export default Bookmarks;


// rafcp:	Creates a stateless React component as a named function with PropTypes