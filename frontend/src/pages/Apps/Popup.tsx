import React, { useState } from "react";
import Modal from "react-modal";
import axios, { AxiosResponse } from "axios";
import { axiosInstance } from "../../config";

Modal.setAppElement("#root");

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  id: number;
  severity: number;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, id, severity }) => {
  const [petitioner, setPetitioner] = useState<any>(0);
  //   setPetitioner(severity);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPetitioner(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(id);
    try {
      const response: AxiosResponse<any> = await axiosInstance.put(
        "/updateSeverity",
        {
          caseID: id,
          severity: petitioner,
        }
      );

      console.log("Data sent to the backend:", response.data);
    } catch (error) {
      console.error("Error sending data to the backend:", error);
    }

    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: "rgba(211, 211, 211,0.4)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        content: {
          width: "300px",
          height: "200px",
          margin: "auto",
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "16px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <div>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          Close
        </button>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="Petitioner">Priority</label>
          <input
            id="Petitioner"
            type="text"
            placeholder="Plaintiff"
            className="form-input"
            value={petitioner}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary mt-6">
            Submit
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default Popup;
