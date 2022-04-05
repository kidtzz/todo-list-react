import React, { useState, useEffect } from "react";
import ModalAdd from "./modal/modal-add.";
// import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
// import Main from "./main";
import api from "../api/activities";
// import alert from "./modal/modal-information";

export default function AddAcitivites() {
    //modal bro
    const [modalOpen, setModalOpen] = useState(false);

    const [activities, setActivities] = useState([]);

    //RetrieveActivities
    const retrivieActivities = async () => {
        const response = await api.get("/activities");
        console.log(response.data);
        return response.data;
    };

    useEffect(() => {
        const getAllActivities = async () => {
            const allActivities = await retrivieActivities();
            if (allActivities) setActivities(allActivities);
        };
        getAllActivities();
    }, []);

    //deleteActivities
    const deleteActivities = (id) => {
        api.delete(`/activities/${id}`).then(() => {
            alert("Post deleted!");
            setActivities(null);
        });
    };

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
                                                onClick={() =>
                                                    deleteActivities(value.id)
                                                }
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
