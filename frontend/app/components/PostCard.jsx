const PostCard = ({ post }) => {
  return (
    <div className="border rounded-md shadow-md overflow-hidden mb-4">
      {/* User Information */}
      <div className="flex items-center p-4">
        <img
          src="https://via.placeholder.com/40" // Placeholder for user profile picture
          alt="User Avatar"
          className="w-10 h-10 rounded-full mr-3"
        />
        <p className="font-semibold">{post.userId}</p> {/* Assuming you have username in post data */}
      </div>
      
      {/* Post Image */}
      <img
        src={post.imageUrl}
        alt={post.caption}
        className="w-full h-auto max-h-80 object-cover"
      />

      {/* Post Caption */}
      <div className="p-4">
        <p className="text-gray-800 font-semibold mb-2">{post.caption}</p>
        <p className="text-gray-500 text-sm">
          {new Date(post.createdAt.seconds * 1000).toLocaleString()}
        </p>
      </div>

      {/* Interaction Buttons */}
      <div className="flex justify-between p-4 border-t">
        <button className="flex items-center text-gray-600 hover:text-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h12M12 6v12" />
          </svg>
          <span className="ml-1">Like</span>
        </button>
        <button className="flex items-center text-gray-600 hover:text-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20h6c1.104 0 2-.896 2-2V8a2 2 0 00-2-2H9c-1.104 0-2 .896-2 2v10c0 1.104.896 2 2 2z" />
          </svg>
          <span className="ml-1">Comment</span>
        </button>
      </div>
    </div>
  );
};

export default PostCard;