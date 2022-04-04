import React from "react";
import "./modal.scss";

export default function ModalAdd({ setOpenModalAdd }) {
    const options = [
        {
            label: "Very High",
            value: "1",
        },
        {
            label: " High",
            value: "2",
        },
        {
            label: "Medium",
            value: "3",
        },
        {
            label: "Low ",
            value: "4",
        },
        {
            label: "Very Low",
            value: "5",
        },
    ];
    const [value, setValue] = React.useState("priority");

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    //axios Add data

    return (
        <div className="modal-content-bg">
            <div className="modal-content" data-cy="modal-add">
                <div className="w-100">
                    <div className="d-flex justify-content-between p-4 modal-add-title">
                        <h5 className="fw-bold mb-0" data-cy="modal-add-title">
                            Tambah List Item
                        </h5>
                        <button
                            className="fw-bold pointer btn btn-close"
                            onClick={() => {
                                setOpenModalAdd(false);
                            }}
                        ></button>
                    </div>
                    <div className="divider mb-3"></div>
                    <form className="w-100">
                        <div className="w-100 px-4">
                            <div className="w-100 mb-3 mt-4 text-left">
                                <h6 data-cy="modal-add-name-title">
                                    <b>
                                        <span className="text-danger mx-2">
                                            *
                                        </span>
                                        NAMA LIST ITEM
                                    </b>
                                </h6>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Tambahkan nama list item"
                                data-cy="modal-add-name-input"
                                value=""
                            />
                        </div>
                        <div className="w-100 px-4">
                            <div className="w-100 mb-2 text-left mt-4">
                                <h6 data-cy="modal-add-priority-title">
                                    <b>
                                        <span className="text-danger mx-2">
                                            *
                                        </span>
                                        PRIORITY
                                    </b>
                                </h6>
                            </div>

                            <select
                                value={value}
                                onChange={handleChange}
                                className=" form-select form-select-md "
                                data-cy="modal-add-priority-dropdown"
                            >
                                {options.map((option) => (
                                    <option value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
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
}
