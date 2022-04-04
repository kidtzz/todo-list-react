import React, { useState, useEffect } from "react";
import ModalAdd from "./modal/modal-add.";
// import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
// import Main from "./main";
import axios from "axios";

export default function AddAcitivites() {
    const baseUrl = "https://todo.api.devcode.gethired.id/todo-items/";
    useEffect(() => {
        apiData();
    });
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState([false]);

    //get data axios
    const apiData = async () => {
        try {
            const response = await axios.get(baseUrl);
            setItem(response.data.data);
            setLoading(true);
        } catch (err) {
            alert(err.message);
        }
    };

    //modal bro
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="AddActivities">
            <div className="d-flex container justify-content-between my-4 align-items-center">
                <div className="d-inline-flex justify-content-between align-items-center">
                    <a href=" ">
                        <span
                            className="bi bi-chevron-left  pointer"
                            data-cy="back-button"
                        ></span>
                    </a>
                    <h2 className="my-0 fw-bold" data-cy="title">
                        New Activity Group 111
                    </h2>

                    <span
                        className="bi bi-pencil mx-3 pointer"
                        data-cy="title-edit-button"
                    ></span>
                </div>
                <div className="d-flex">
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
                    {modalOpen && <ModalAdd setOpenModalAdd={setModalOpen} />}
                </div>
            </div>
            <div className=" container bodyActivities">
                <div className="row">
                    {loading &&
                        item.map((e, index) => {
                            return (
                                <div key={index}>
                                    <div class="card w-100">
                                        <div class="card-body">
                                            {e.title}
                                            This is some text within a card
                                            body.
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}
