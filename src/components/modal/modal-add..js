import React from "react";

const ModalAdd = (setOpenModal) => {
    return (
        <div>
            <div className="modal-content" data-cy="modal-add">
                <div className="w-100">
                    <div className="d-flex justify-content-between p-4">
                        <h3
                            className="font-weight-semi-bold mb-0"
                            data-cy="modal-add-title"
                        >
                            Tambah List Item
                        </h3>
                        <div
                            className="font-weight-semi-bold pointer bi bi-close"
                            onClick={() => {
                                setOpenModal(false);
                            }}
                        ></div>
                    </div>
                    <div className="divider mb-3"></div>
                    <form className="w-100">
                        <div className="w-100 px-4">
                            <div className="w-100 mb-2 text-left">
                                <h3 data-cy="modal-add-name-title">
                                    <b>
                                        <span className="text-danger mr-2">
                                            *
                                        </span>
                                        NAMA LIST ITEM
                                    </b>
                                </h3>
                            </div>
                            <input
                                type="text"
                                className="text-input"
                                data-cy="modal-add-name-input"
                                value=""
                            />
                        </div>
                        <div className="w-100 px-4">
                            <div className="w-100 mb-2 text-left mt-4">
                                <h3 data-cy="modal-add-priority-title">
                                    <b>
                                        <span className="text-danger mr-2">
                                            *
                                        </span>
                                        PRIORITY
                                    </b>
                                </h3>
                            </div>
                            <div
                                className=" priority-box"
                                data-cy="modal-add-priority-dropdown"
                            >
                                <div className=" d-flex  justify-content-between  p-2">
                                    <div className=" d-flex  justify-content-between  align-items-center">
                                        <div className=" label-indicator  very-high"></div>
                                        Very High
                                    </div>
                                    <div className=" bi bi-chevron-down"></div>
                                </div>
                            </div>
                        </div>
                        <div className=" divider  mt-4  mb-1"></div>
                        <div className=" text-right  mx-4  my-3">
                            <button
                                className=" btn  btn-primary"
                                disabled=""
                                type="submit"
                                data-cy="modal-add-save-button"
                            >
                                Simpan
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default ModalAdd;
