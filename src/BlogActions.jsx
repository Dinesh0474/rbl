import { useState } from "react";
import { useBlog } from "./BlogProvider";

const BlogActions = ({ blog }) => {
  const { deleteBlog, updateBlog } = useBlog();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(blog.title);
  const [updatedDescription, setUpdatedDescription] = useState(blog.description);

  const handleUpdate = () => {
    updateBlog(blog.id, { title: updatedTitle, description: updatedDescription });
    setIsEditing(false);
  };

  return (
    <div className="flex gap-4 mt-4">
      {isEditing ? (
        <div className="space-y-2">
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            className="border p-2 rounded"
          />
          <textarea
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
          <button onClick={() => setIsEditing(false)} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
        </div>
      ) : (
        <>
          <button onClick={() => setIsEditing(true)} className="bg-green-500 text-white px-4 py-2 rounded">Edit</button>
          <button onClick={() => deleteBlog(blog.id)} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
        </>
      )}
    </div>
  );
};

export default BlogActions;
