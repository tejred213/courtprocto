import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router for navigation

const casesData = [
  { id: "00001", name: "Christine Brooks", description: "089 Kutch Green Apt. 448", date: "14 Feb 2019" },
  { id: "00002", name: "Rosie Pearson", description: "979 Immanuel Ferry Suite 526", date: "14 Feb 2019" },
  { id: "00003", name: "Darrell Caldwell", description: "8587 Frida Ports", date: "14 Feb 2019" },
  { id: "00004", name: "Gilbert Johnston", description: "768 Destiny Lake Suite 600", date: "14 Feb 2019" },
  { id: "00005", name: "Alan Cain", description: "042 Mylene Throughway", date: "14 Feb 2019" },
  { id: "00006", name: "Alfred Murray", description: "543 Weimann Mountain", date: "14 Feb 2019" },
];

function JudgeDash() {
  const [newCases, setNewCases] = useState(casesData);
  const [acceptedCases, setAcceptedCases] = useState([]);
  const navigate = useNavigate(); // React Router's navigation hook

  const handleAcceptCase = (caseId) => {
    const acceptedCase = newCases.find((c) => c.id === caseId);
    setAcceptedCases([...acceptedCases, acceptedCase]);
    setNewCases(newCases.filter((c) => c.id !== caseId));
  };

  const handleRejectCase = (caseId) => {
    setNewCases(newCases.filter((c) => c.id !== caseId));
  };


  const handleCasesClick = () => {
    console.log('Cases clicked');
    navigate('/judgedash'); // Navigate to the cases management page
  };

  const handleSettingsClick = () => {
    console.log('Settings clicked');
    navigate('/settings'); // Navigate to the settings page
  };

  const handleCollaboratorsClick = () => {
    console.log('Collaboration clicked');
    navigate('/collaborators'); // Navigate to the collaboration page
  }

  const handleCaseStatusClick = () => {
    console.log('Case status clicked');
    navigate('/casestatus'); // Navigate to the case status page
  }

  const handleLogout = () => {
    // Clear any authentication tokens or user data (if stored in local storage/session storage)
    localStorage.removeItem("authToken"); // Example: removing the auth token
    // Redirect to the login page
    navigate("/"); // Redirect to login (assuming you have a login route setup)
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
<div className="w-64 bg-gray-800 text-white p-6">
  <h2 className="text-2xl font-bold mb-6">Application Name</h2>
  
  {/* Divider */}
  <div className="border-b border-gray-700 mb-6"></div>
  
  <h3 className="text-lg font-semibold mb-4">OPTIONS</h3>
  <ul className="space-y-2">
    <li>
      <button
        className="block w-full px-4 py-2 text-left text-white hover:bg-gray-700 transition duration-200 rounded-md"
        onClick={handleCasesClick}
      >
        Cases
      </button>
    </li>
    <li>
      <button
        className="block w-full px-4 py-2 text-left text-white hover:bg-gray-700 transition duration-200 rounded-md"
        onClick={handleCollaboratorsClick}
      >
        Collaborators
      </button>
    </li>
    <li>
      <button
        className="block w-full px-4 py-2 text-left text-white hover:bg-gray-700 transition duration-200 rounded-md"
        onClick={handleCaseStatusClick}
      >
        Case Status
      </button>
    </li>
    <li>
      <button
        className="block w-full px-4 py-2 text-left text-white hover:bg-gray-700 transition duration-200 rounded-md"
        onClick={handleSettingsClick}
      >
        Settings
      </button>
    </li>
  </ul>

  {/* Divider */}
  <div className="border-b border-gray-700 my-6"></div>

  <ul className="space-y-2">
    <li>
      <button
        className="flex items-center w-full px-4 py-2 text-left text-white hover:bg-gray-700 transition duration-200 rounded-md"
        onClick={handleLogout}
      >
        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
        </svg>
        Logout
      </button>
    </li>
  </ul>
</div>


      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        {/* Search Bar */}
        <div className="w-full mb-6">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* New Cases */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">New Cases</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="py-2 px-4 border border-gray-300">ID</th>
                  <th className="py-2 px-4 border border-gray-300">CASE NAME</th>
                  <th className="py-2 px-4 border border-gray-300">CASE DESCRIPTION</th>
                  <th className="py-2 px-4 border border-gray-300">DATE</th>
                  <th className="py-2 px-4 border border-gray-300">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {newCases.map((c) => (
                  <tr key={c.id} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border border-gray-300">{c.id}</td>
                    <td className="py-2 px-4 border border-gray-300">{c.name}</td>
                    <td className="py-2 px-4 border border-gray-300">{c.description}</td>
                    <td className="py-2 px-4 border border-gray-300">{c.date}</td>
                    <td className="py-2 px-4 border border-gray-300">
                      <div className="flex space-x-2">
                        <button
                          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition duration-200"
                          onClick={() => handleAcceptCase(c.id)}
                        >
                          Accept
                        </button>
                        <button
                          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition duration-200"
                          onClick={() => handleRejectCase(c.id)}
                        >
                          Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Accepted Cases */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Accepted Cases</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="py-2 px-4 border border-gray-300">ID</th>
                  <th className="py-2 px-4 border border-gray-300">CASE NAME</th>
                  <th className="py-2 px-4 border border-gray-300">CASE DESCRIPTION</th>
                  <th className="py-2 px-4 border border-gray-300">DATE</th>
                </tr>
              </thead>
              <tbody>
                {acceptedCases.map((c) => (
                  <tr key={c.id} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border border-gray-300">{c.id}</td>
                    <td className="py-2 px-4 border border-gray-300">{c.name}</td>
                    <td className="py-2 px-4 border border-gray-300">{c.description}</td>
                    <td className="py-2 px-4 border border-gray-300">{c.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JudgeDash;


// {/* Sidebar */}
// <div className="w-64 bg-gray-800 text-white p-6">
// <h2 className="text-2xl font-bold mb-6">Application Name</h2>
// <ul className="space-y-2">
//   <li>
//     <button className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-200">Cases</button>
//   </li>
//   <li><button className="w-full text-left px-4 py-2 hover:bg-gray-700 rounded-md transition duration-200">Collaborators</button></li>
//   <li><button className="w-full text-left px-4 py-2 hover:bg-gray-700 rounded-md transition duration-200">Case Status</button></li>
//   <li><button className="w-full text-left px-4 py-2 hover:bg-gray-700 rounded-md transition duration-200">Settings</button></li>
//   <li>
//     <button
//       onClick={handleLogout}
//       className="w-full text-left px-4 py-2 hover:bg-gray-700 rounded-md transition duration-200"
//     >
//       Logout
//     </button>
//   </li>
// </ul>
// </div>