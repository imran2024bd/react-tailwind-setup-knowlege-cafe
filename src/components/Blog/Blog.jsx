import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    // console.log(blog);
    const { title, author, cover, author_img, reading_time, posted_date, hashtags
    } = blog;
    return (
        <div>
            <img src={cover} alt={`cover Picture of the title ${title}`} />
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
                    <button>Bookmarks</button>
                </div>
            </div>
            <h2 className="text-4xl font-bold"> {title} </h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;