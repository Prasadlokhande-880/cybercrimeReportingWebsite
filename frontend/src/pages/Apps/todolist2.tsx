import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import IconMenuScrumboard from "../../components/Icon/IconNotes";
import { axiosInstance } from "../../config";
import Popup from "./Popup";
import { ReactI18NextChild } from "react-i18next";
// Interface for Contact
interface Contact {
  id: number;
  Petitioner: string;
  DateofCauseofAction: string;
  caseDescription: string;
  severity: number; // Corrected the typo in the interface
}

const Contacts = () => {
  // Sample data to use until fetching from the backend
  const persons = [
    {
      Petitioner: "John Doe",
      DateofCauseofAction: "2023-01-15",
      CaseType: "Civil",
      severity: 5, // Fixed typo in sample data
      id: 1, // Added an ID for each person (assuming IDs for each entry)
    },
    {
      Petitioner: "Jane Smith",
      DateofCauseofAction: "2023-02-28",
      CaseType: "Criminal",
      severity: 7, // Fixed typo in sample data
      id: 2,
    },
    {
      Petitioner: "Alice Johnson",
      DateofCauseofAction: "2023-03-10",
      CaseType: "Family",
      severity: 9, // Fixed typo in sample data
      id: 3,
    },
  ];
  const [isPopupOpen, setPopupOpen] = useState<string | null>(null);
  const [contactsData, setContactsData] = useState<Contact[]>([]);
  const [showModal, setShowModal] = useState(false); // State to manage the modal visibility
  const [courtId, setcourtId] = useState<string>("");
  const [dataRec, setdataRec] = useState<any>([]);

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);

  const fetchData = async () => {
    try {
      // Assuming 'YOUR_BACKEND_ENDPOINT' is where the data is fetched from
      console.log(courtId);
      const response = await axiosInstance.post("/scheduleCasesJudge", {
        courtID: courtId,
      });

      const dataRec = response.data;
      console.log("This is data", dataRec);
      setdataRec(dataRec);
      // setFilteredItems([...data]);
      console.log("This is filtered data", dataRec);
      //   const response: AxiosResponse<any[]> = await axios.post(
      //     "YOUR_BACKEND_ENDPOINT"
      //   );
      //   setContactsData(response.data); // Set fetched data from the backend
    } catch (error) {
      console.error("Error fetching data:", error);
      setContactsData(persons); // Use sample data if there's an error fetching from the backend
    }
  };

  // Function to handle opening the modal
  // const openModal = () => {
  //   setShowModal(true);
  // };

  // // Function to handle closing the modal
  // const closeModal = () => {
  //   setShowModal(false);
  // };
  const openPopup = (id: string) => {
    setPopupOpen(id);
  };

  const closePopup = () => {
    setPopupOpen(null);
  };
  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-xl">Contacts</h2>
      </div>
      <div className="flex gap-4">
        <div className="sm:flex justify-between items-center gap-5 md:gap-10">
          <label htmlFor="hrLargeinput">CourtId</label>
          <input
            id="hrLargeinput"
            type="email"
            placeholder="name@example.com"
            className="form-input py-3 text-base"
            value={courtId}
            onChange={(e) => setcourtId(e.target.value)}
          />
        </div>
        <div>
          <button
            type="button"
            className="btn btn-primary text-xl"
            onClick={fetchData}
          >
            <IconMenuScrumboard className="ltr:mr-2 rtl:ml-3" />
            Show Cases
          </button>
        </div>
      </div>
      <div className="mt-5 panel p-0 border-0 overflow-hidden">
        <div className="table-responsive">
          <table className="table-striped table-hover">
            <thead>
              <tr>
                <th>Petitioner</th>
                <th>Petitioner Email</th>
                <th>Petitioner Contact</th>
                <th>Cause of Action</th>
                <th>Case Description</th>
                <th>Case Type</th>
                <th>Responder Name</th>
                <th className="!text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {dataRec.map((data: { _id: React.Key | null | undefined; petitioner: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | Iterable<ReactI18NextChild> | null | undefined; email: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | Iterable<ReactI18NextChild> | null | undefined; mobileNumber: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | Iterable<ReactI18NextChild> | null | undefined; }; causeOfAction: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | Iterable<ReactI18NextChild> | null | undefined; caseDetails: { caseDescription: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | Iterable<ReactI18NextChild> | null | undefined; caseType: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | Iterable<ReactI18NextChild> | null | undefined; }; responder: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | Iterable<ReactI18NextChild> | null | undefined; }; }) => (
                <tr key={data._id}>
                  <td>{data.petitioner.name}</td>
                  <td>{data.petitioner.email}</td>
                  <td>{data.petitioner.mobileNumber}</td>
                  <td>{data.causeOfAction}</td>
                  <td>{data.caseDetails.caseDescription}</td>
                  <td>{data.caseDetails.caseType}</td>
                  <td>{data.responder.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
