import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { AxiosResponse } from 'axios';


const YourFormComponent: React.FC = () => {
    const [formData, setFormData] = useState({
        Responder: '',
        gender: '',
        relation: '',
        dob: '',
        age: '',
        case: '',
        petitionerCount: '',
        email: '',
        occupation: '',
        mobile: '',
        pinCode: '',
        address: '',
        state: '',
        district: '',
        taluka: '',
        village: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });

        console.log(formData);
    };

    const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            gender: e.target.value
        });
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
        sendDataToBackend(formData);
    };


    return (
        <form className="space-y-5" onSubmit={()=>{handleSubmit}}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
                <label htmlFor="Responder:">Responder:</label>
                <input
                    id="Responder:"
                    type="text"
                    placeholder="Responder: Name"
                    className="form-input"
                    value={formData.Responder}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Gender:</label>
                <div className="flex flex-col">
                    <label htmlFor="male" className="flex items-center cursor-pointer">
                        <input
                            type="radio"
                            id="male"
                            name="gender"
                            value="male"
                            className="form-radio"
                            checked={formData.gender === 'male'} // Checked if value matches 'male'
                            onChange={handleGenderChange} // Handler for gender change
                        />
                        <span>Male</span>
                    </label>
                </div>
                {/* Similar blocks for female and other genders */}
                <div className="flex flex-col">
                    <label htmlFor="female" className="flex items-center cursor-pointer">
                        <input
                            type="radio"
                            id="female"
                            name="gender"
                            value="female"
                            className="form-radio"
                            checked={formData.gender === 'female'} // Checked if value matches 'female'
                            onChange={handleGenderChange} // Handler for gender change
                        />
                        <span>Female</span>
                    </label>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="other" className="flex items-center cursor-pointer">
                        <input
                            type="radio"
                            id="other"
                            name="gender"
                            value="other"
                            className="form-radio"
                            checked={formData.gender === 'other'} // Checked if value matches 'other'
                            onChange={handleGenderChange} // Handler for gender change
                        />
                        <span>Other</span>
                    </label>
                </div>
            </div>

            </div>

            <div>
                <label htmlFor="relation">Relation</label>
                <input
                    id="relation"
                    type="text"
                    placeholder="relation Name"
                    className="form-input"
                    value={formData.relation}
                    onChange={handleChange}
                />
                </div>
            <div>
                <label htmlFor="dob">Date of Birth</label>
                <input
                    id="dob"
                    type="date"
                    placeholder="relation Name"
                    className="form-input"
                    value={formData.dob}
                    onChange={handleChange}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                    <label htmlFor="age">Age:</label>
                    <input
                    id="age"
                    type="number"
                    placeholder="relation Name"
                    className="form-input"
                    value={formData.age}
                    onChange={handleChange}
                /></div>

                <div>
                    <label htmlFor="case">Case</label>
                    <input
                    id="case"
                    type="text"
                    placeholder="relation Name"
                    className="form-input"
                    value={formData.case}
                    onChange={handleChange}
                />
                </div>

                <div>
                    <label htmlFor="petitionerCount">Extra Petitioner Count</label>
                    <input
                    id="petitionerCount"
                    type="text"
                    placeholder="relation Name"
                    className="form-input"
                    value={formData.petitionerCount}
                    onChange={handleChange}
                />
                </div>
            </div>

            <div>
                <label htmlFor="gridEmail">Email:</label>
                <input
                    id="email"
                    type="text"
                    placeholder="relation Name"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                />
                </div>

            <div>
                <label htmlFor="occupation">Occupation:</label>
                <input
                    id="occupation"
                    type="text"
                    placeholder="relation Name"
                    className="form-input"
                    value={formData.occupation}
                    onChange={handleChange}
                />
                </div>

            <div>
                <label htmlFor="mobile">Mobile no:</label>
                <input
                    id="mobile"
                    type="text"
                    placeholder="relation Name"
                    className="form-input"
                    value={formData.mobile}
                    onChange={handleChange}
                /> </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div>
                    <label htmlFor="pinCode">Pin Code:</label>
                    <input
                    id="pinCode"
                    type="number"
                    placeholder="relation Name"
                    className="form-input"
                    value={formData.pinCode}
                    onChange={handleChange}
                />
                </div>

                <div>
                    <label htmlFor="address">Address</label>
                    <input
                    id="address"
                    type="text"
                    placeholder="relation Name"
                    className="form-input"
                    value={formData.address}
                    onChange={handleChange}
                />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div>
                    <label htmlFor="state">State:</label>
                    <input
                    id="state"
                    type="text"
                    placeholder="relation Name"
                    className="form-input"
                    value={formData.state}
                    onChange={handleChange}
                />
                </div>

                <div>
                    <label htmlFor="district">District:</label>
                    <input
                    id="district"
                    type="text"
                    placeholder="relation Name"
                    className="form-input"
                    value={formData.district}
                    onChange={handleChange}
                />
                 </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div>
                    <label htmlFor="taluka">Taluka:</label>
                    <input
                    id="taluka"
                    type="text"
                    placeholder="relation Name"
                    className="form-input"
                    value={formData.taluka}
                    onChange={handleChange}
                />
                 </div>

                <div>
                    <label htmlFor="village">Village:</label>
                    <input
                    id="village"
                    type="text"
                    placeholder="relation Name"
                    className="form-input"
                    value={formData.village}
                    onChange={handleChange}
                />
                </div>
            </div>
            <NavLink to="/apps/invoice/edit">
                <button type="button" className="btn btn-primary mt-6">
                    Next
                </button>
            </NavLink>
        </form>
    );
};

export default YourFormComponent;
