import React from 'react';

const ExperienceForm = ({ experience, onSave, onCancel }: any) => {
  const [editedExperience, setEditedExperience] = React.useState(experience);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedExperience({ ...editedExperience, [name]: value });
  };

  return (
    <div className="p-4 border rounded-lg mb-4">
      <input
        type="text"
        name="title"
        value={editedExperience.title}
        onChange={handleInputChange}
        placeholder="Title"
        className="w-full p-2 border rounded mb-2 dark:bg-zinc-800 dark:border-zinc-700"
      />
      <input
        type="text"
        name="company"
        value={editedExperience.company}
        onChange={handleInputChange}
        placeholder="Company"
        className="w-full p-2 border rounded mb-2 dark:bg-zinc-800 dark:border-zinc-700"
      />
      <input
        type="text"
        name="location"
        value={editedExperience.location}
        onChange={handleInputChange}
        placeholder="Location"
        className="w-full p-2 border rounded mb-2 dark:bg-zinc-800 dark:border-zinc-700"
      />
      <div className="flex gap-2 mb-2">
        <input
          type="text"
          name="startDate"
          value={editedExperience.startDate}
          onChange={handleInputChange}
          placeholder="Start Date"
          className="w-full p-2 border rounded dark:bg-zinc-800 dark:border-zinc-700"
        />
        <input
          type="text"
          name="endDate"
          value={editedExperience.endDate}
          onChange={handleInputChange}
          placeholder="End Date"
          className="w-full p-2 border rounded dark:bg-zinc-800 dark:border-zinc-700"
        />
      </div>
      <textarea
        name="description"
        value={editedExperience.description}
        onChange={handleInputChange}
        placeholder="Description"
        className="w-full p-2 border rounded mb-2 dark:bg-zinc-800 dark:border-zinc-700"
      />
      <div className="flex justify-end">
        <button onClick={onCancel} className="mr-2 px-4 py-2 rounded bg-gray-200 dark:bg-zinc-700">Cancel</button>
        <button onClick={() => onSave(editedExperience)} className="px-4 py-2 rounded bg-faded-jade-500 text-white">Save</button>
      </div>
    </div>
  );
};

export default ExperienceForm;
