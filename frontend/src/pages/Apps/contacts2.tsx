import React, { useState, useEffect } from "react";
import axios from "axios";
import IconUser from "../../components/Icon/IconUser";
import IconMenuScrumboard from "../../components/Icon/IconNotes";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../store/themeConfigSlice";
import { axiosInstance } from "../../config";

const Contacts = () => {
  const dispatch = useDispatch();
  const [filteredItems, setFilteredItems] = useState<any[]>([]);
  const [courtId, setcourtId] = useState<string>("");
  const [dataRec, setdataRec] = useState<any>([]);
  useEffect(() => {
    dispatch(setPageTitle("Contacts"));
    fetchData();
  }, [dispatch]);

  const fetchData = async () => {
    try {
      console.log(courtId);
      const response = await axiosInstance.post("/scheduleCases", {
        courtID: courtId,
      });
      const dataRec = response.data;
      console.log("This is data", dataRec);
      setdataRec(dataRec);
      // setFilteredItems([...data]);
      console.log("This is filtered data", dataRec);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex sm:flex-row flex-col sm:items-center sm:gap-3 gap-4 w-full sm:w-auto">
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
                scheduled
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 panel p-0 border-0 overflow-hidden">
        <div className="table-responsive">
          <table className="table-striped table-hover">
            <thead>
              <tr>
                <th>Petitioner</th>
                <th>Date of Cause of Action</th>
                <th>Case Type</th>
                <th>Severity</th>
                <th className="!text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {dataRec.map((data: any) => (
                <tr key={data._id}>
                  <td>{data.petitioner.name}</td>
                  <td>{data.causeOfAction}</td>
                  <td>{data.caseDetails.caseType}</td>
                  <td>{data.severity}</td>
                  <td>
                    <div className="flex gap-4 items-center justify-center">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        Case Details
                      </button>
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

export default Contacts;
