import React from 'react';

const CertificationForm = ({ certification, onSave, onCancel }: any) => {
  const [editedCertification, setEditedCertification] = React.useState(certification);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedCertification({ ...editedCertification, [name]: value });
  };

  return (
    <div className="p-4 border rounded-lg mb-4">
      <input
        type="text"
        name="name"
        value={editedCertification.name}
        onChange={handleInputChange}
        placeholder="Certification Name"
        className="w-full p-2 border rounded mb-2 dark:bg-zinc-800 dark:border-zinc-700"
      />
      <input
        type="text"
        name="issuingOrganization"
        value={editedCertification.issuingOrganization}
        onChange={handleInputChange}
        placeholder="Issuing Organization"
        className="w-full p-2 border rounded mb-2 dark:bg-zinc-800 dark:border-zinc-700"
      />
      <input
        type="text"
        name="issueDate"
        value={editedCertification.issueDate}
        onChange={handleInputChange}
        placeholder="Issue Date"
        className="w-full p-2 border rounded mb-2 dark:bg-zinc-800 dark:border-zinc-700"
      />
      <div className="flex justify-end">
        <button onClick={onCancel} className="mr-2 px-4 py-2 rounded bg-gray-200 dark:bg-zinc-700">Cancel</button>
        <button onClick={() => onSave(editedCertification)} className="px-4 py-2 rounded bg-faded-jade-500 text-white">Save</button>
      </div>
    </div>
  );
};

export default CertificationForm;
