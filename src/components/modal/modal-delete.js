import React, { useState, useEffect } from "react";
import api from "../../api/activities";
import "./modal.scss";

export default function ModalDelete({ setOpenModalDelete }) {
    //deleteActivities
    const [activities, setActivities] = useState([]);

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

    // const deleteActivities = (id, event) => {
    //     event.preventDefault();
    //     api.delete(`/activities/${id}`).then((response) =>
    //         console.log(`delete`, response).catch((err) => console.log(err))
    //     );
    // };

    const deleteActivities = (id) => {
        api.delete(`/activities/${id}`).then(() => {});
    };

    return (
        <div className="modal-wrapper-delete">
            <div className="modal-content" data-cy="modal-delete">
                <div className="w-100 text-center p-4">
                    <i
                        className="icon-warning text-danger fs-iconcard"
                        data-cy="modal-delete-icon"
                    ></i>
                    <h3 className="my-4" data-cy="modal-delete-title">
                        <span className="font-weight-normal">
                            Apakah anda yakin ingin menghapus activity
                        </span>
                        ?
                    </h3>
                    <button
                        className="btn mr-2"
                        data-cy="modal-delete-cancel-button"
                        onClick={() => {
                            setOpenModalDelete(false);
                        }}
                    >
                        Batal
                    </button>
                    {activities.map((value) => {
                        return (
                            <button
                                className="btn btn-danger"
                                data-cy="modal-delete-confirm-button"
                                onClick={() => {
                                    deleteActivities(value.id);
                                    window.location.reload(false);
                                }}
                            >
                                Hapus
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
