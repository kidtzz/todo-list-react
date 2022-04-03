import React from "react";

const ModalInformation = () => {
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
                    <span data-cy="modal-information-title">
                        Activity berhasil dihapus
                    </span>
                </div>
            </div>
        </div>
    );
};
export default ModalInformation;
