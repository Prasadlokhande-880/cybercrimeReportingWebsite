import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import axios, { AxiosResponse } from "axios";
import { axiosInstance } from "../../../config";

const FinalForm = () => {
  const [actSectArray, setActSectArray] = useState([]);
  const [selectedAct, setSelectedAct] = useState("");
  const [section, setSection] = useState("");
  const [error, setError] = useState("");

  const handleActChange = (e) => {
    setSelectedAct(e.target.value);
  };

  const handleSectionChange = (e) => {
    const value = e.target.value;

    // Validate section: only alphabets and numbers, not blank
    if (/^[A-Za-z0-9]+$/.test(value)) {
      setSection(value);
      setError("");
    } else {
      setError("Section can only contain alphabets and numbers");
    }
  };

  const handleAddActSection = () => {
    if (selectedAct !== "Choose..." && section.trim() !== "") {
      setActSectArray((prevArray) => [
        ...prevArray,
        { act: selectedAct, section },
      ]);

      setSelectedAct("");
      setSection("");
    }
  };

  const handleRemoveActSection = (index) => {
    const updatedArray = [...actSectArray];
    updatedArray.splice(index, 1);
    setActSectArray(updatedArray);
  };

  console.log("ActSectArray:", actSectArray);

  const [courtType, setCourtType] = useState("");
  const [isScheduled, setIsScheduled] = useState(false);
  const [courtID, setCourtID] = useState("");

  const [caseDescription, setCaseDescription] = useState("");
  const [mainDistrict, setMainDistrict] = useState("");
  const [establishment, setEstablishment] = useState("");
  const [natureOfCase, setNatureOfCase] = useState("");
  const [reliefSought, setReliefSought] = useState("");
  const [caseType, setCaseType] = useState("");
  const [plaintiff, setPlaintiff] = useState("");
  const [contactNumber, setContactNumber] = useState(0);

  const [petitionerName, setPetitionerName] = useState("");
  const [petitionerGender, setPetitionerGender] = useState("");
  const [petitionerRelation, setPetitionerRelation] = useState("");
  const [petitionerDateOfBirth, setPetitionerDateOfBirth] = useState("");
  const [petitionerAge, setPetitionerAge] = useState(0);
  const [petitionerCaseDetails, setPetitionerCaseDetails] = useState("");
  const [petitionerExtraName, setPetitionerExtraName] = useState("");
  const [petitionerEmail, setPetitionerEmail] = useState("");
  const [petitionerOccupation, setPetitionerOccupation] = useState("");
  const [petitionerMobileNumber, setPetitionerMobileNumber] = useState(0);
  const [petitionerPinCode, setPetitionerPinCode] = useState(0);
  const [petitionerAddress, setPetitionerAddress] = useState("");
  const [petitionerState, setPetitionerState] = useState("");
  const [petitionerDistrict, setPetitionerDistrict] = useState("");
  const [petitionerTaluka, setPetitionerTaluka] = useState("");
  const [petitionerVillage, setPetitionerVillage] = useState("");
  const [responderName, setResponderName] = useState("");
  const [responderGender, setResponderGender] = useState("");
  const [responderRelation, setResponderRelation] = useState("");
  const [responderDateOfBirth, setResponderDateOfBirth] = useState("");
  const [responderAge, setResponderAge] = useState(0);
  const [responderCaseDetails, setResponderCaseDetails] = useState("");
  const [responderExtraName, setResponderExtraName] = useState("");
  const [responderEmail, setResponderEmail] = useState("");
  const [responderOccupation, setResponderOccupation] = useState("");
  const [responderMobileNumber, setResponderMobileNumber] = useState(0);
  const [responderPinCode, setResponderPinCode] = useState(0);
  const [responderAddress, setResponderAddress] = useState("");
  const [responderState, setResponderState] = useState("");
  const [responderDistrict, setResponderDistrict] = useState("");
  const [responderTaluka, setResponderTaluka] = useState("");
  const [responderVillage, setResponderVillage] = useState("");
  const [causeOfAction, setCauseOfAction] = useState("");
  const [causeOfActionDate, setCauseOfActionDate] = useState("");
  const [importantInformation, setImportantInformation] = useState("");
  const [prayer, setPrayer] = useState("");
  const [valuation, setValuation] = useState(0);
  const [locationState, setLocationState] = useState("");
  const [locationDistrict, setLocationDistrict] = useState("");
  const [locationTaluka, setLocationTaluka] = useState("");
  const [locationVillage, setLocationVillage] = useState("");
  const [legalAct, setLegalAct] = useState("");
  const [legalSection, setLegalSection] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    switch (id) {
      case "courtType":
        setCourtType(value);
        break;
      case "isScheduled":
        setIsScheduled(value === "true");
        break;
      case "courtID":
        setCourtID(value);
        break;
      case "caseDescription":
        setCaseDescription(value);
        break;
      case "mainDistrict":
        setMainDistrict(value);
        break;
      case "establishment":
        setEstablishment(value);
        break;
      case "natureOfCase":
        setNatureOfCase(value);
        break;
      case "reliefSought":
        setReliefSought(value);
        break;
      case "caseType":
        setCaseType(value);
        break;
      case "plaintiff":
        setPlaintiff(value);
        break;
      case "contactNumber":
        setContactNumber(Number(value));
        break;
      case "petitionerName":
        setPetitionerName(value);
        break;
      case "petitionerGender":
        setPetitionerGender(value);
        break;
      case "petitionerRelation":
        setPetitionerRelation(value);
        break;
      case "petitionerDateOfBirth":
        setPetitionerDateOfBirth(value);
        break;
      case "petitionerAge":
        setPetitionerAge(Number(value));
        break;
      case "petitionerCaseDetails":
        setPetitionerCaseDetails(value);
        break;
      case "petitionerExtraName":
        setPetitionerExtraName(value);
        break;
      case "petitionerEmail":
        setPetitionerEmail(value);
        break;
      case "petitionerOccupation":
        setPetitionerOccupation(value);
        break;
      case "petitionerMobileNumber":
        setPetitionerMobileNumber(Number(value)); // Convert to number assuming it's an input type number
        break;
      case "petitionerPinCode":
        setPetitionerPinCode(Number(value)); // Convert to number assuming it's an input type number
        break;
      case "petitionerAddress":
        setPetitionerAddress(value);
        break;
      case "petitionerState":
        setPetitionerState(value);
        break;
      case "petitionerDistrict":
        setPetitionerDistrict(value);
        break;
      case "petitionerTaluka":
        setPetitionerTaluka(value);
        break;
      case "petitionerVillage":
        setPetitionerVillage(value);
        break;
      case "responderName":
        setResponderName(value);
        break;
      case "responderGender":
        setResponderGender(value);
        break;
      case "responderRelation":
        setResponderRelation(value);
        break;
      case "responderDateOfBirth":
        setResponderDateOfBirth(value);
        break;
      case "responderAge":
        setResponderAge(Number(value)); // Convert to number assuming it's an input type number
        break;
      case "responderCaseDetails":
        setResponderCaseDetails(value);
        break;
      case "responderExtraName":
        setResponderExtraName(value);
        break;
      case "responderEmail":
        setResponderEmail(value);
        break;
      case "responderOccupation":
        setResponderOccupation(value);
        break;
      case "responderMobileNumber":
        setResponderMobileNumber(Number(value)); // Convert to number assuming it's an input type number
        break;
      case "responderPinCode":
        setResponderPinCode(Number(value)); // Convert to number assuming it's an input type number
        break;
      case "responderAddress":
        setResponderAddress(value);
        break;
      case "responderState":
        setResponderState(value);
        break;
      case "responderDistrict":
        setResponderDistrict(value);
        break;
      case "responderTaluka":
        setResponderTaluka(value);
        break;
      case "responderVillage":
        setResponderVillage(value);
        break;
      case "causeOfAction":
        setCauseOfAction(value);
        break;
      case "causeOfActionDate":
        setCauseOfActionDate(value);
        break;
      case "importantInformation":
        setImportantInformation(value);
        break;
      case "prayer":
        setPrayer(value);
        break;
      case "valuation":
        setValuation(Number(value)); // Convert to number assuming it's an input type number
        break;
      case "locationState":
        setLocationState(value);
        break;
      case "locationDistrict":
        setLocationDistrict(value);
        break;
      case "locationTaluka":
        setLocationTaluka(value);
        break;
      case "locationVillage":
        setLocationVillage(value);
        break;
      case "legalAct":
        setLegalAct(value);
        break;
      case "legalSection":
        setLegalSection(value);
        break;
      default:
        break;
    }
  };

  const sendDataToBackend = async (data: any) => {
    try {
      const response: AxiosResponse<any> = await axiosInstance.post(
        "/addCase",
        data
      );
      console.log("Data sent to the backend:", response.data);
    } catch (error: any) {
      console.error("Error sending data to the backend:", error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      courtType: courtType,
      isScheduled: false,
      courtID: courtID,
      caseDetails: {
        caseDescription: caseDescription,
        mainDistrict: locationDistrict,
        establishment: establishment,
        natureOfCase: natureOfCase,
        reliefSought: reliefSought,
        caseType: caseType,
        plaintiff: plaintiff,
        contactNumber: contactNumber,
      },
      petitioner: {
        name: petitionerName,
        gender: petitionerGender,
        relation: petitionerRelation,
        dateOfBirth: petitionerDateOfBirth,
        age: petitionerAge,
        caseDetails: petitionerCaseDetails,
        extraName: petitionerExtraName,
        email: petitionerEmail,
        occupation: petitionerOccupation,
        mobileNumber: petitionerMobileNumber,
        pinCode: petitionerPinCode,
        address: petitionerAddress,
        state: petitionerState,
        district: petitionerDistrict,
        taluka: petitionerTaluka,
        village: petitionerVillage,
      },
      responder: {
        name: responderName,
        gender: responderGender,
        relation: responderRelation,
        dateOfBirth: responderDateOfBirth,
        age: responderAge,
        caseDetails: responderCaseDetails,
        extraName: responderExtraName,
        email: responderEmail,
        occupation: responderOccupation,
        mobileNumber: responderMobileNumber,
        pinCode: responderPinCode,
        address: responderAddress,
        state: responderState,
        district: responderDistrict,
        taluka: responderTaluka,
        village: responderVillage,
      },
      causeOfAction: causeOfAction,
      causeOfActionDate: causeOfActionDate,
      importantInformation: importantInformation,
      prayer: prayer,
      valuation: valuation,
      location: {
        state: locationState,
        district: locationDistrict,
        taluka: locationTaluka,
        village: locationVillage,
      },
      legalDetails: actSectArray,
    };
    console.log(formData);
    sendDataToBackend(formData);
  };

  return (
    <div>
      <div className="p-5">
        <Tab.Group>
          <Tab.List className="flex gap-4">
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`py-2 px-4 rounded ${
                    selected
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  } focus:outline-none`}
                >
                  Initial Input
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`py-2 px-4 rounded ${
                    selected
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  } focus:outline-none`}
                >
                  Petitioner Details
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`py-2 px-4 rounded ${
                    selected
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  } focus:outline-none`}
                >
                  Responder Details
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`py-2 px-4 rounded ${
                    selected
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  } focus:outline-none`}
                >
                  Case Details
                </button>
              )}
            </Tab>
          </Tab.List>

          <Tab.Panels>
            <Tab.Panel>
              <div className="p-4 rounded">
                {/* <form className="space-y-5"> */}
                <form className="space-y-5" onSubmit={handleSubmit}>
                  {/* <div className=" bg-cyan-50 textcolo">
                <h1>District/Establishment</h1>
            </div> */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="gridState">District</label>
                      <input
                        id="mainDistrict"
                        name="mainDistrict"
                        type="text"
                        placeholder="District"
                        className="form-input"
                        value={mainDistrict}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="establishment">Establishment</label>
                      <input
                        id="establishment"
                        name="establishment"
                        type="text"
                        placeholder="Establishment"
                        className="form-input"
                        value={establishment}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="gridState">Nature ofsadsd Case</label>
                      <input
                        id="natureOfCase"
                        name="natureOfCase"
                        type="text"
                        placeholder="District"
                        className="form-input"
                        value={natureOfCase}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="reliefSought">Relief Sought</label>
                    <input
                      id="reliefSought"
                      type="text"
                      placeholder="Relief Sought"
                      className="form-input"
                      value={reliefSought}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="caseType">Case Type</label>
                    <input
                      id="caseType"
                      type="text"
                      placeholder="Case Type"
                      className="form-input"
                      value={caseType}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="courtID">Court ID</label>
                    <input
                      id="courtID"
                      type="text"
                      placeholder="Case Type"
                      className="form-input"
                      value={courtID}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="plaintiff">Plaintiff</label>
                    <input
                      id="plaintiff"
                      type="text"
                      placeholder="Plaintiff"
                      className="form-input"
                      value={plaintiff}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="contactNumber">Contact No.</label>
                    <input
                      id="contactNumber"
                      type="number"
                      placeholder="Contact No."
                      className="form-input"
                      value={contactNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                </form>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="p-4  rounded">
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="petitionerName">Petitioner:</label>
                      <input
                        id="petitionerName"
                        type="text"
                        placeholder="Petitioner Name"
                        className="form-input"
                        value={petitionerName}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="petitionerGender">Gender:</label>
                      <input
                        id="petitionerGender"
                        type="text"
                        placeholder="Petitioner Name"
                        className="form-input"
                        value={petitionerGender}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="petitionerRelation">Relation</label>
                    <input
                      id="petitionerRelation"
                      type="text"
                      placeholder="Relation"
                      className="form-input"
                      value={petitionerRelation}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="petitionerDateOfBirth">Date of Birth</label>
                    <input
                      id="petitionerDateOfBirth"
                      type="date"
                      className="form-input"
                      value={petitionerDateOfBirth}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="md:col-span-2">
                      <label htmlFor="petitionerAge">Age:</label>
                      <input
                        id="petitionerAge"
                        type="number"
                        placeholder="Enter Age"
                        className="form-input"
                        value={petitionerAge}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="petitionerCaseDetails">Case</label>
                      <input
                        id="petitionerCaseDetails"
                        type="text"
                        placeholder="Enter case"
                        className="form-input"
                        value={petitionerCaseDetails}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="petitionerEmail">Email:</label>
                    <input
                      id="petitionerEmail"
                      type="email"
                      placeholder="Email Name"
                      className="form-input"
                      value={petitionerEmail}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="petitionerOccupation">Occupation:</label>
                    <input
                      id="petitionerOccupation"
                      type="text"
                      placeholder="Occupation"
                      className="form-input"
                      value={petitionerOccupation}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="petitionerMobileNumber">Mobile no:</label>
                    <input
                      id="petitionerMobileNumber"
                      type="number"
                      placeholder="Mobile no"
                      className="form-input"
                      value={petitionerMobileNumber}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="petitionerPinCode">Pin Code:</label>
                      <input
                        id="petitionerPinCode"
                        type="number"
                        placeholder="Pin Code"
                        className="form-input"
                        value={petitionerPinCode}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="petitionerAddress">Address</label>
                      <input
                        id="petitionerAddress"
                        placeholder="Address"
                        className="form-input"
                        value={petitionerAddress}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="petitionerState">State:</label>
                      <input
                        id="petitionerState"
                        type="text"
                        placeholder="State"
                        className="form-input"
                        value={petitionerState}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="petitionerDistrict">District:</label>
                      <input
                        id="petitionerDistrict"
                        type="text"
                        placeholder="District"
                        className="form-input"
                        value={petitionerDistrict}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="petitionerTaluka">Taluka:</label>
                      <input
                        id="petitionerTaluka"
                        type="text"
                        placeholder="Taluka"
                        className="form-input"
                        value={petitionerTaluka}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="petitionerVillage">Village:</label>
                      <input
                        id="petitionerVillage"
                        type="text"
                        placeholder="Village"
                        className="form-input"
                        value={petitionerVillage}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="p-4  rounded">
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="responderName">Responder:</label>
                      <input
                        id="responderName"
                        type="text"
                        placeholder="Responder Name"
                        className="form-input"
                        value={responderName}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="responderGender">Gender:</label>
                      <input
                        id="responderGender"
                        type="text"
                        placeholder="Responder Name"
                        className="form-input"
                        value={responderGender}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="responderRelation">Relation</label>
                    <input
                      id="responderRelation"
                      type="text"
                      placeholder="Relation"
                      className="form-input"
                      value={responderRelation}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="responderDateOfBirth">Date of Birth</label>
                    <input
                      id="responderDateOfBirth"
                      type="date"
                      className="form-input"
                      value={responderDateOfBirth}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="md:col-span-2">
                      <label htmlFor="responderAge">Age:</label>
                      <input
                        id="responderAge"
                        type="number"
                        placeholder="Enter Age"
                        className="form-input"
                        value={responderAge}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="responderCaseDetails">Case</label>
                      <input
                        id="responderCaseDetails"
                        type="text"
                        placeholder="Enter case"
                        className="form-input"
                        value={responderCaseDetails}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="responderEmail">Email:</label>
                    <input
                      id="responderEmail"
                      type="email"
                      placeholder="Email Name"
                      className="form-input"
                      value={responderEmail}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="responderOccupation">Occupation:</label>
                    <input
                      id="responderOccupation"
                      type="text"
                      placeholder="Occupation"
                      className="form-input"
                      value={responderOccupation}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="responderMobileNumber">Mobile no:</label>
                    <input
                      id="responderMobileNumber"
                      type="number"
                      placeholder="Mobile no"
                      className="form-input"
                      value={responderMobileNumber}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="responderPinCode">Pin Code:</label>
                      <input
                        id="responderPinCode"
                        type="text"
                        placeholder="Pin Code"
                        className="form-input"
                        value={responderPinCode}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="responderAddress">Address</label>
                      <input
                        id="responderAddress"
                        placeholder="Address"
                        className="form-input"
                        value={responderAddress}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="responderState">State:</label>
                      <input
                        id="responderState"
                        type="text"
                        placeholder="State"
                        className="form-input"
                        value={responderState}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="responderDistrict">District:</label>
                      <input
                        id="responderDistrict"
                        type="text"
                        placeholder="District"
                        className="form-input"
                        value={responderDistrict}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="responderTaluka">Taluka:</label>
                      <input
                        id="responderTaluka"
                        type="text"
                        placeholder="Taluka"
                        className="form-input"
                        value={responderTaluka}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="responderVillage">Village:</label>
                      <input
                        id="responderVillage"
                        type="text"
                        placeholder="Village"
                        className="form-input"
                        value={responderVillage}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </Tab.Panel>

            <Tab.Panel>
              <div className="p-4  rounded">
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="causeOfAction">Cause of Action</label>
                      <input
                        id="causeOfAction"
                        type="text"
                        placeholder="Enter Cause of Action"
                        className="form-input"
                        value={causeOfAction}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="causeOfActionDate">
                        Date of Cause of Action
                      </label>
                      <input
                        id="causeOfActionDate"
                        type="date"
                        placeholder="Enter Date of Cause of Action"
                        className="form-input"
                        value={causeOfActionDate}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="caseDescription">caseDescription</label>
                    <input
                      id="caseDescription"
                      type="text"
                      placeholder="caseDescriptio"
                      defaultValue=""
                      className="form-input"
                      value={caseDescription}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="importantInformation">
                      Important Information
                    </label>
                    <input
                      id="importantInformation"
                      type="text"
                      placeholder="Enter Important Information / Subject / Reason"
                      defaultValue=""
                      className="form-input"
                      value={importantInformation}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="prayer">Prayer</label>
                      <input
                        id="prayer"
                        type="text"
                        placeholder="Enter Prayer"
                        className="form-input"
                        value={prayer}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="valuation">Valuation</label>
                      <input
                        id="valuation"
                        type="number"
                        placeholder="Enter Valuation"
                        className="form-input"
                        value={valuation}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="locationDistrict">District</label>
                      <input
                        id="locationDistrict"
                        type="text"
                        placeholder="Enter Prayer"
                        className="form-input"
                        value={locationDistrict}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="locationTaluka">Taluka</label>
                      <input
                        id="locationTaluka"
                        type="text"
                        placeholder="Enter Prayer"
                        className="form-input"
                        value={locationTaluka}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="locationVillage">Village</label>
                      <input
                        id="locationVillage"
                        type="text"
                        placeholder="Enter Prayer"
                        className="form-input"
                        value={locationVillage}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="locationState">State</label>
                      <input
                        id="locationState"
                        type="text"
                        placeholder="Enter Prayer"
                        className="form-input"
                        value={locationState}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="gridState">Act</label>
                    <input
                      id="gridState"
                      type="text"
                      placeholder="Enter Prayer"
                      className="form-input"
                      value={selectedAct}
                      onChange={handleActChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="gridSection">Section</label>
                    <input
                      id="gridSection"
                      type="text"
                      placeholder="Enter Section"
                      className={`form-input ${error ? "border-red-500" : ""}`}
                      value={section}
                      onChange={handleSectionChange}
                    />
                    {error && <p className="text-red-500">{error}</p>}
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={handleAddActSection}
                      className="btn btn-primary mt-2  max-w-max "
                    >
                      Add Act-Section
                    </button>
                  </div>
                  <div className="">
                    {/* <h2 className="btn btn-primary mt-2 w-1/6">Act-Section Pairs:</h2> */}
                    <ul className="">
                      {actSectArray.map((actPair, index) => (
                        <li
                          className="form-input mb-4 mt-4  flex flex-row justify-between items-center "
                          key={index}
                        >
                          Act: {actPair.act}, Section: {actPair.section}
                          <button
                            type="button"
                            onClick={() => handleRemoveActSection(index)}
                            className="bg-red-500 text-white px-2 py-1 rounded ml-6"
                          >
                            Remove
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* <button type="submit">Submit</button> */}
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="btn btn-primary mt-6"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default FinalForm;
