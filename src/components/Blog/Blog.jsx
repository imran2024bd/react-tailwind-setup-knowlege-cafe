import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark, handleReadAsMark }) => {
    // console.log(blog);
    const { title, author, cover, author_img, reading_time, posted_date, hashtags
    } = blog;

    return (
        <div className='mb-20 text-left space-y-4'>
            <img className='w-full mb-8 rounded-3xl' src={cover} alt={`cover Picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex '>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h2 className="text-2xl"> {author} </h2>
                        <p> {posted_date
                        } </p>
                    </div>
                </div>
                <div className='flex items-center '>
                    <span>{reading_time} min read</span>
                    <button className='ml-2 text-2xl text-red-600'
                        onClick={() => handleAddToBookmark(blog)}
                    > <FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl font-bold mt-4"> {title} </h2>
            <p className='mt-4 gap-x-4'>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a href="">#{hash}</a></span>)
                }
            </p>
            <button
                onClick={() => handleReadAsMark(reading_time)}
                className='text-purple-800 font-bold underline'
            >Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleReadAsMark: PropTypes.func
}
export default Blog;