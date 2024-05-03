import React, { useState } from 'react';
import { AxiosResponse } from 'axios';
import axios from 'axios'

const YourFormComponent: React.FC = () => {
    const initialState = {
        causeOfAction: '',
        dateOfCauseOfAction: '',
        importantInfo: '',
        prayer: '',
        valuation: 0,
        selectedState: '',
        selectedDistrict: '',
        selectedTaluka: '',
        selectedVillage: '',
        act: '',
        section: '',
    };

    const [formValues, setFormValues] = useState(initialState);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormValues({
            ...formValues,
            [id]: value,
        });

        console.log(formValues);
    };



    const sendDataToBackend = async (data: any) => {
        try {
            const response: AxiosResponse<any> = await axios.post('https://your-backend-url.com/submitFormData', data);
            console.log('Data sent to the backend:', response.data);
        } catch (error: any) {
            console.error('Error sending data to the backend:', error);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission behavior
        sendDataToBackend(formValues);
    };


    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
                    <label htmlFor="causeOfAction">Cause of Action</label>
                    <input
                        id="causeOfAction"
                        type="text"
                        name="causeOfAction"
                        placeholder="Enter Cause of Action"
                        className="form-input"
                        value={formValues.causeOfAction}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="dateOfCauseOfAction">Date of Cause of Action</label>
                    <input
                        id="dateOfCauseOfAction"
                        type="date"
                        name="dateOfCauseOfAction"
                        placeholder="Enter Date of Cause of Action"
                        className="form-input"
                        value={formValues.dateOfCauseOfAction}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div>
                <label htmlFor="importantInfo">Important Information</label>
                <input
                        id="importantInfo"
                        type="text"
                        name="dateOfCauseOfAction"
                        placeholder="Enter Date of Cause of Action"
                        className="form-input"
                        value={formValues.importantInfo}
                        onChange={handleInputChange}
                    />
                      </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="prayer">Prayer</label>
                    <input
                        id="prayer"
                        type="text"
                        name="dateOfCauseOfAction"
                        placeholder="Enter Date of Cause of Action"
                        className="form-input"
                        value={formValues.prayer}
                        onChange={handleInputChange}
                    />
                     </div>
                <div>
                    <label htmlFor="valuation">Valuation</label>
                    <input
                        id="valuation"
                        type="text"
                        name="dateOfCauseOfAction"
                        placeholder="Enter Date of Cause of Action"
                        className="form-input"
                        value={formValues.valuation}
                        onChange={handleInputChange}
                    />
                    </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="selectedState">State</label>
                    <select
                    id="selectedState"
                    className="form-select text-white-dark"
                    value={formValues.selectedState}
                    onChange={handleInputChange}
                    >
                        <option>Choose...</option>
                        <option>State1</option>
                        <option>State2</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="selectedDistrict">District</label>
                    <select
                    id="selectedDistrict"
                    className="form-select text-white-dark"
                    value={formValues.selectedDistrict}
                        onChange={handleInputChange}
                        >
                        <option>Choose...</option>
                        <option>District1</option>
                        <option>District2</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="selectedTaluka">Taluka</label>
                    <select
                    id="selectedTaluka"
                    className="form-select text-white-dark"
                    value={formValues.selectedTaluka}
                        onChange={handleInputChange}
                    >
                        <option>Choose...</option>
                        <option>Taluka1</option>
                        <option>Taluka2</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="selectedVillage">Village</label>
                    <select
                    id="selectedVillage"
                     className="form-select text-white-dark"
                     value={formValues.selectedVillage}
                        onChange={handleInputChange}
                     >
                        <option>Choose...</option>
                        <option>Village1</option>
                        <option>Village2</option>
                    </select>
                </div>
            </div>
            <div>
                <label htmlFor="act">Act</label>
                <input
                        id="act"
                        type="text"
                        name="dateOfCauseOfAction"
                        placeholder="Enter Date of Cause of Action"
                        className="form-input"
                        value={formValues.act}
                        onChange={handleInputChange}
                    />
                     </div>
            <div>
                <label htmlFor="section">Section</label>
                <input
                        id="section"
                        type="text"
                        name="dateOfCauseOfAction"
                        placeholder="Enter Date of Cause of Action"
                        className="form-input"
                        value={formValues.section}
                        onChange={handleInputChange}
                    /> </div>
            <button type="submit" className="btn btn-primary !mt-6">
                Submit
            </button>
        </form>
    );
};

export default YourFormComponent;
