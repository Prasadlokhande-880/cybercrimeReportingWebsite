import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../store/themeConfigSlice";
import { userInfo } from "os";
import IconUser from "../../components/Icon/IconUser";
import { axiosInstance } from "../../config";
import axios from "axios";

interface UserProfile {
  _id: string;
  name: string;
  type: string;
  email: string;
  password: string;
  dateOfBirth: Date;
  ordinaryPlaceOfWorking: string;
  district: string;
  state: string;
  mobile: string;
  aadhar: string;
  barNumber: string;
  pincode: string;
  gender: string;
  __v: number;
}

const AccountSetting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle("Account Setting"));
  }, [dispatch]);

  const [tabs, setTabs] = useState<string>("home");
  const [formData, setFormData] = useState<Partial<UserProfile>>({}); // Initialize as empty object

  const toggleTabs = (name: string) => {
    setTabs(name);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Function to retrieve user data from the backend
  const getUserDataFromBackend = async () => {
    try {
      const response = await axios.get("http://localhost:4200/profile");
      console.log(response.data);
      setFormData(response.data);
      console.log(formData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleSave = async () => {
    try {
        console.log("Updating user data:", formData);
        await axios.put(`http://localhost:4200/update`, formData);
        console.log("Data updated successfully");
    } catch (error) {
        console.error("Error updating user data:", error);
    }
};


  useEffect(() => {
    getUserDataFromBackend();
  }, []);

  return (
    <div>
      <ul className="flex space-x-2 rtl:space-x-reverse">
        <li>
          <Link to="#" className="text-primary hover:underline">
            Users
          </Link>
        </li>
        <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
          <span>Account Settings</span>
        </li>
      </ul>
      <div className="pt-5">
        <div className="flex items-center justify-between mb-5">
          <h5 className="font-semibold text-lg dark:text-white-light">
            Settings
          </h5>
        </div>
        <div></div>
        {tabs === "home" ? (
          <div>
            <form className="border border-[#ebedf2] dark:border-[#191e3a] rounded-md p-4 mb-5 bg-white dark:bg-black">
              <h6 className="text-lg font-bold mb-5">General Information</h6>
              <div className="flex flex-col sm:flex-row">
                <div className="ltr:sm:mr-4 rtl:sm:ml-4 w-full sm:w-2/12 mb-5">
                  <IconUser className="w-20 h-20 ltr:mr-2 rtl:ml-2 shrink-0" />
                </div>
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Name"
                      className="form-input"
                      value={formData?.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="profession">Profession</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Name"
                      className="form-input"
                      value={formData?.ordinaryPlaceOfWorking}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="district">district</label>
                    <input
                      id="district"
                      type="text"
                      placeholder="Name"
                      className="form-input"
                      value={formData?.district}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="profession">state</label>
                    <input
                      id="state"
                      type="text"
                      placeholder="Name"
                      className="form-input"
                      value={formData?.state}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      type="text"
                      placeholder="+1 (530) 555-12121"
                      className="form-input"
                      value={formData?.mobile}

                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Jimmy@gmail.com"
                      className="form-input"
                      value={formData?.email}
                    />
                  </div>
                  <div className="sm:col-span-2 mt-3">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={handleSave}

                    >
                     Save
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default AccountSetting;
function userdatafunction(userDataFromBackend: any) {
  throw new Error("Function not implemented.");
}
