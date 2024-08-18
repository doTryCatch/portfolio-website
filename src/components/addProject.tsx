import React, { ReactHTMLElement, useState } from "react";
import { projectSchema } from "./formSchema/schema";
const PostForm = () => {
  const [formData, setFormData] = useState(projectSchema);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleListChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newValue = value.split(",").map((value) => ({ name: value }));
    setFormData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  return (
    <div className="RootAuth center max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Post Form</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label
            htmlFor="headline"
            className="text-sm font-medium text-gray-700 mb-2"
          >
            Headline
          </label>
          <input
            type="text"
            id="headline"
            name="heading"
            value={formData.heading}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter headline"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="tags"
            className="text-sm font-medium text-gray-700 mb-2"
          >
            Techstacks (comma-separated)
          </label>
          <input
            type="text"
            id="tags"
            name="techstack"
            onChange={handleListChange}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., #React, #JavaScript"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="thumbnail_url"
            className="text-sm font-medium text-gray-700 mb-2"
          >
            Thumbnail UR
          </label>
          <input
            type="file"
            id="thumbnail_url"
            name="thumbnail_url"
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter thumbnail URL"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="github_link"
            className="text-sm font-medium text-gray-700 mb-2"
          >
            GitHub Link
          </label>
          <input
            type="url"
            id="github_link"
            name="githubLinkUrl"
            value={formData.githubLinkUrl}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter GitHub link"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostForm;
