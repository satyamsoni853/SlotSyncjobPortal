import React from 'react';

const EducationForm = ({ education, onSave, onCancel }: any) => {
  const [editedEducation, setEditedEducation] = React.useState(education);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedEducation({ ...editedEducation, [name]: value });
  };

  return (
    <div className="p-4 border rounded-lg mb-4">
      <input
        type="text"
        name="institution"
        value={editedEducation.institution}
        onChange={handleInputChange}
        placeholder="Institution"
        className="w-full p-2 border rounded mb-2 dark:bg-zinc-800 dark:border-zinc-700"
      />
      <input
        type="text"
        name="degree"
        value={editedEducation.degree}
        onChange={handleInputChange}
        placeholder="Degree"
        className="w-full p-2 border rounded mb-2 dark:bg-zinc-800 dark:border-zinc-700"
      />
      <input
        type="text"
        name="fieldOfStudy"
        value={editedEducation.fieldOfStudy}
        onChange={handleInputChange}
        placeholder="Field of Study"
        className="w-full p-2 border rounded mb-2 dark:bg-zinc-800 dark:border-zinc-700"
      />
      <div className="flex gap-2 mb-2">
        <input
          type="text"
          name="startDate"
          value={editedEducation.startDate}
          onChange={handleInputChange}
          placeholder="Start Date"
          className="w-full p-2 border rounded dark:bg-zinc-800 dark:border-zinc-700"
        />
        <input
          type="text"
          name="endDate"
          value={editedEducation.endDate}
          onChange={handleInputChange}
          placeholder="End Date"
          className="w-full p-2 border rounded dark:bg-zinc-800 dark:border-zinc-700"
        />
      </div>
      <div className="flex justify-end">
        <button onClick={onCancel} className="mr-2 px-4 py-2 rounded bg-gray-200 dark:bg-zinc-700">Cancel</button>
        <button onClick={() => onSave(editedEducation)} className="px-4 py-2 rounded bg-faded-jade-500 text-white">Save</button>
      </div>
    </div>
  );
};

export default EducationForm;
