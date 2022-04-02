import React from "react";

const ModalDelete = () => {
    return (
        <div className="todo-modal-wrapper">
            <div className="todo-modal-content" data-cy="modal-delete">
                <div className="todo-w-100 todo-text-center todo-p-4">
                    <i
                        className="todo-icon-warning todo-text-danger todo-fs-iconcard"
                        data-cy="modal-delete-icon"
                    ></i>
                    <h3 className="todo-my-4" data-cy="modal-delete-title">
                        <span className="todo-font-weight-normal">
                            Apakah anda yakin ingin menghapus activity{" "}
                        </span>
                        <span className="todo-font-weight-semi-bold">
                            "New Activity Group 107"
                        </span>{" "}
                        ?
                    </h3>
                    <button
                        className="todo-btn todo-mr-2"
                        data-cy="modal-delete-cancel-button"
                    >
                        Batal
                    </button>
                    <button
                        className="todo-btn todo-btn-danger"
                        data-cy="modal-delete-confirm-button"
                    >
                        Hapus
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ModalDelete;
