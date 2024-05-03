import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../store/themeConfigSlice";
import { DataTable, DataTableSortStatus } from "mantine-datatable";
import sortBy from "lodash/sortBy";
import { axiosInstance } from "../../config";
import { AxiosResponse } from "axios";

type UserData = {
  name: string;
  causeOfActionDate: string;
  respondername: string;
  natureOfCase: string;
  caseType: string;
  mobileNumber: number;
  id:string
};

const MultipleTables = () => {
  const [data, setData] = useState<UserData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data...");
        const response: AxiosResponse<UserData[]> = await axiosInstance.get("/userCasedetails");
        setData(response.data);
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
                <th>Cause of Action Date</th>
                <th>Responder Name</th>
                <th>Nature of Case</th>
                <th>Case Type</th>
                <th>Mobile Number</th>
                <th className="!text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
            {data.map((contact, index) => (
  <tr key={index}>
    <td>{contact.name}</td>
    <td>{contact.causeOfActionDate}</td>
    <td>{contact.respondername}</td>
    <td>{contact.natureOfCase}</td>
    <td>{contact.caseType}</td>
    <td>{contact.mobileNumber}</td>
    <td>
      <div className="flex gap-4 items-center justify-center">
      <button
          type="button"
          className="btn btn-sm btn-outline-primary"
          onClick={() => {
            editUser(contact._id);
          }}
        >Edit</button>
      </div>
    </td>
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
