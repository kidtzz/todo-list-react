import React, { useState, useEffect } from "react";
import ModalAdd from "./modal/modal-add.";
// import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
// import Main from "./main";
import api from "../api/activities";

export default function AddAcitivites() {
    //modal bro
    const [modalOpen, setModalOpen] = useState(false);
    //API
    // const baseUrl = "https://todo.api.devcode.gethired.id/todo-items/";
    // const [item, setItem] = useState([]);
    // const [loading, setLoading] = useState([false]);

    //get data axios
    // useEffect(() => {
    //     const getData = async () => {
    //         try {
    //             const response = await axios.get(baseUrl);
    //             setItem(response.data.data);
    //             setLoading(true);
    //         } catch (error) {
    //             console.error(error.message);
    //         }
    //     };

    //     getData();
    // }, []);

    const [activities, setActivities] = useState([]);

    //RetrieveActivities
    const retrivieActivities = async () => {
        const response = await api.get("/activities");
        return response.data;
    };

    useEffect(() => {
        const getAllActivities = async () => {
            const allActivities = await retrivieActivities();
            if (allActivities) setActivities(allActivities);
        };
        getAllActivities();
    }, []);

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
            <div className=" container mb-5 bodyActivities">
                <div className="row">
                    {activities.map((value, index) => {
                        return (
                            <div key={index}>
                                <div className="card mb-2 border-0 shadow w-100">
                                    <div className="d-flex justify-content-between align-items-center card-body">
                                        <div className="d-flex align-items-center card-title">
                                            <input
                                                className="form-check-input mx-2"
                                                type="checkbox"
                                                value=""
                                            />
                                            <h5>{value.title}</h5>
                                        </div>
                                        <div className="card-icon">
                                            <i
                                                className="bi bi-trash"
                                                onClick={retrivieActivities}
                                            ></i>
                                        </div>
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
