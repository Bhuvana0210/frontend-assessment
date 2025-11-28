export default function ProfileModal({ candidate, onClose }) {
  return (
    // <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
        <div className="fixed inset-0 bg-white dark:bg-gray-900 p-4 rounded justify-center items-center">

      <div className="bg-white w-96 p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-2">{candidate.name}</h2>

        <p><strong>Email:</strong> {candidate.email}</p>
        <p><strong>Phone:</strong> {candidate.phone}</p>
        <p><strong>Company:</strong> {candidate.company}</p>
        <p><strong>Stage:</strong> {candidate.stage}</p>
        <p><strong>Jobs:</strong> {candidate.jobs.join(", ")}</p>
        <p><strong>Education:</strong> {candidate.education.join(", ")}</p>

        <button
          className="mt-4 w-full bg-gray-700 text-white py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
