import React, { useState } from "react";
import ModalAdd from "./modal/modal-add.";

const AddAcitivites = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <div className="d-flex container justify-content-between my-4 align-items-center">
                <div className="d-inline-flex justify-content-between align-items-center">
                    <span
                        className="bi bi-chevron-left mr-2 pointer"
                        data-cy="back-button"
                    ></span>
                    <h1 className="my-0 font-weight-semi-bold" data-cy="title">
                        New Activity Group 111
                    </h1>
                    <span
                        className="bi bi-edit ml-3 pointer"
                        data-cy="title-edit-button"
                    ></span>
                </div>
                <div>
                    <button className="btn-sort pointer" data-cy="sort-button">
                        <span className="bi bi-arrow-down-up"></span>
                    </button>
                    <button
                        className="btn btn-primary"
                        data-cy="add-button"
                        onClick={() => {
                            setModalOpen(true);
                        }}
                    >
                        <span className="bi bi-plus mr-2"></span>Tambah
                    </button>
                    {modalOpen && <ModalAdd setOpenModal={setModalOpen} />}
                </div>
            </div>
        </div>
    );
};

export default AddAcitivites;
