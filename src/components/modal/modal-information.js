import React from "react";

const ModalInformation = () => {

    
    return (
        <div className="todo-modal-wrapper">
            <div
                className="todo-modal-content todo-modal-info"
                data-cy="modal-information"
            >
                <div className="todo-d-inline-flex todo-justify-content-between todo-align-items-center todo-my-4">
                    <span
                        className="todo-icon-info-circle todo-text-primary todo-mr-2 todo-fs-lg"
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
