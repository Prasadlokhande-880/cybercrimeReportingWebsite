import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import IconUser from '../../components/Icon/IconUser';
import { axiosInstance } from '../../config';

type ContactData = {
    // id: number;  
    name: string;
    email: string;
    address: string;
    mobileNumber: string;
    causeOfAction: string;

    // path?: string;
};

const Contacts = () => {
    const [datalist, setDatalist] = useState<ContactData[]>([]);

    // Function to fetch data from the backend
    const fetchData = async () => {
        try {
            // const response = await axios.get('YOUR_BACKEND_ENDPOINT');
            const response: AxiosResponse = await axiosInstance.get("/userDraftedcases");

            const data: ContactData[] = response.data;
            setDatalist(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Fetch data when the component mounts
    useEffect(() => {
        fetchData();
    }, []);


    // Define editUser and deleteUser functions
    const editUser = async (contact: ContactData) => {
        try {
            const editEndpoint = `YOUR_BACKEND_ENDPOINT/${contact.id}`;
            const response = await axios.put(editEndpoint, contact);
            console.log('User updated:', response.data);
            fetchData();
        } catch (error) {
            console.error('Error editing user:', error);
        }
    };

    const finalSubmit = async (contact: ContactData) => {
        try {
            const editEndpoint = `YOUR_BACKEND_ENDPOINT/${contact.id}`;
            const response = await axios.put(editEndpoint, contact);
            console.log('User updated:', response.data);
            fetchData();
        } catch (error) {
            console.error('Error editing user:', error);
        }
    };

    // Rendering your component
    return (
        <div>
            <div className="flex items-center justify-between flex-wrap gap-4">
                <h2 className="text-xl">Drafted Cases</h2>
                {/* Additional components or elements */}
            </div>
            <div className="mt-5 panel p-0 border-0 overflow-hidden">
                <div className="table-responsive">
                    <table className="table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Location</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datalist.map((contact) => (
                                <tr >
                                    <td>
                                        <div className="flex items-center w-max">
                                            <div>{contact.name}</div>
                                        </div>
                                    </td>
                                    <td>{contact.email}</td>
                                    <td className="whitespace-nowrap">{contact.address}</td>
                                    <td className="whitespace-nowrap">{contact.mobileNumber}</td>
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
