import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../store/themeConfigSlice";
import { DataTable, DataTableSortStatus } from "mantine-datatable";
import sortBy from "lodash/sortBy";
import { axiosInstance } from "../../config";
import axios, { AxiosResponse } from "axios";

interface CaseInterface extends Document {
  _id:string;
  courtType: string;
  UserEmail: string;
  isScheduled: boolean;
  courtID: string;
  caseDetails: {
    caseDescription: string;
    mainDistrict: string;
    establishment: string;
    natureOfCase: string;
    reliefSought: string;
    caseType: string;
    plaintiff: string;
    contactNumber: string;
  };
  petitioner: {
    name: string;
    gender: string;
    relation: string;
    dateOfBirth: Date;
    age: number;
    caseDetails: string;
    extraName: string;
    email: string;
    occupation: string;
    mobileNumber: string;
    pinCode: string;
    address: string;
    state: string;
    district: string;
    taluka: string;
    village: string;
  };
  responder: {
    name: string;
    gender: string;
    relation: string;
    dateOfBirth: Date;
    age: number;
    caseDetails: string;
    extraName: string;
    email: string;
    occupation: string;
    mobileNumber: string;
    pinCode: string;
    address: string;
    state: string;
    district: string;
    taluka: string;
    village: string;
  };
  causeOfAction: string;
  causeOfActionDate: Date;
  importantInformation: string;
  prayer: string;
  valuation: string;
  location: {
    state: string;
    district: string;
    taluka: string;
    village: string;
  };
  legalDetails: string[];
}

const MultipleTables = () => {
  const [data, setData] = useState<CaseInterface[]>([]);

 // Client-side code (React component using useEffect and Axios)
useEffect(() => {
  const fetchData = async () => {
    try {
      console.log("Fetching data...");
      const response = await axios.get("http://localhost:4200/getallefiling");
      setData(response.data);
      console.log("Data fetched successfully:", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  fetchData();
}, []);


  async function editUser(id:string) {
    try {
      console.log(id)
      const response: AxiosResponse = await axiosInstance.post(`/updatecaseId/${id}`);
      // Handle the response as needed
      console.log(response.data);
    } catch (error) {
      console.error('Error updating caseId:', error);
      // Handle the error as needed
      window.location.href = '/finalForm';
    }
  }

  return (
    <div>
      <div className="panel mt-6">
        <div className="flex md:items-center md:flex-row flex-col mb-5 gap-5">
          <h5 className="font-semibold text-lg dark:text-white-light">Table 1</h5>
        </div>
        <div className="datatables">
          <table className="table-striped table-hover">
            <thead>
              <tr>
                <th>Petitioner Name</th>
                <th>Petitioner Gender</th>
                <th>Petitioner Email</th>
                <th>mobileNumber</th>
                <th>isScheduled</th>
                <th>Responder Name</th>
              </tr>
            </thead>
            <tbody>
            {data.map((contact, index) => (
  <tr key={index}>
    <td>{contact.petitioner.name}</td>
    <td>{contact.petitioner.gender}</td>
    <td>{contact.petitioner.email}</td>
    <td>{contact.petitioner.mobileNumber}</td>
    <td>{contact.isScheduled ? "Scheduled" : "not Scheduled"}</td>
    <td>{contact.responder.name}</td>
  </tr>
))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MultipleTables;
