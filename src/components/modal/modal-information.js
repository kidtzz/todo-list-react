import React, { useState, useEffect } from "react";
import api from "../../api/activities";

const ModalInformation = () => {
    const [status, setStatus] = useState(null);

    useEffect((id) => {
        // DELETE request using axios inside useEffect React hook
        api.delete(`/activities${id}`).then(() =>
            setStatus("Activity berhasil dihapus")
        );

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <div className="modal-wrapper">
            <div
                className="modal-content modal-info"
                data-cy="modal-information"
            >
                <div className="d-inline-flex justify-content-between align-items-center my-4">
                    <span
                        className="bi bi-info-circle text-primary mr-2 fs-lg"
                        data-cy="modal-information-icon"
                    ></span>
                    <span data-cy="modal-information-title">{status}</span>
                </div>
            </div>
        </div>
    );
};
export default ModalInformation;
