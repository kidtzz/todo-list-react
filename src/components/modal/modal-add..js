import React from "react";

const ModalAdd = () => {
    return (
        <div>
            <div className="todo-modal-content" data-cy="modal-add">
                <div className="todo-w-100">
                    <div className="todo-d-flex todo-justify-content-between todo-p-4">
                        <h3
                            className="todo-font-weight-semi-bold todo-mb-0"
                            data-cy="modal-add-title"
                        >
                            Tambah List Item
                        </h3>
                        <div className="todo-font-weight-semi-bold todo-pointer todo-icon-close"></div>
                    </div>
                    <div className="todo-divider todo-mb-3"></div>
                    <form className="todo-w-100">
                        <div className="todo-w-100 todo-px-4">
                            <div className="todo-w-100 todo-mb-2 todo-text-left">
                                <h3 data-cy="modal-add-name-title">
                                    <b>
                                        <span className="todo-text-danger todo-mr-2">
                                            *
                                        </span>
                                        NAMA LIST ITEM
                                    </b>
                                </h3>
                            </div>
                            <input
                                type="text"
                                className="todo-text-input"
                                data-cy="modal-add-name-input"
                                value=""
                            />
                        </div>
                        <div className="todo-w-100 todo-px-4">
                            <div className="todo-w-100 todo-mb-2 todo-text-left todo-mt-4">
                                <h3 data-cy="modal-add-priority-title">
                                    <b>
                                        <span className="todo-text-danger todo-mr-2">
                                            *
                                        </span>
                                        PRIORITY
                                    </b>
                                </h3>
                            </div>
                            <div
                                className="todo-priority-box"
                                data-cy="modal-add-priority-dropdown"
                            >
                                <div className="todo-d-flex todo-justify-content-between todo-p-2">
                                    <div className="todo-d-flex todo-justify-content-between todo-align-items-center">
                                        <div className="todo-label-indicator todo-very-high"></div>
                                        Very High
                                    </div>
                                    <div className="todo-icon-chevron-down"></div>
                                </div>
                            </div>
                        </div>
                        <div className="todo-divider todo-mt-4 todo-mb-1"></div>
                        <div className="todo-text-right todo-mx-4 todo-my-3">
                            <button
                                className="todo-btn todo-btn-primary"
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
