import React, { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
    const url = "https://todo.api.devcode.gethired.id/activity-groups";
    useEffect(() => {
        apiData();
    });

    const [activity, setActivity] = useState([]);
    const [loading, setLoading] = useState([false]);

    const apiData = async () => {
        try {
            const res = await axios.get(url);
            setActivity(res.data.data);
            setLoading(true);
        } catch (err) {
            alert(err.message);
        }
    };
    return (
        <div className="main wrapper-container container">
            <div className="w-100">
                <div className="d-flex justify-content-between my-4 align-items-center">
                    <h1
                        className="my-0 font-weight-semi-bold"
                        data-cy="activity-title"
                    >
                        Activity
                    </h1>
                    <div>
                        <button
                            data-cy="activity-add-button"
                            className="btn btn-primary"
                        >
                            <span className="bi bi-plus mr-2"></span>Tambah
                        </button>
                    </div>
                </div>
                <div className="row activities">
                    {loading &&
                        activity.map((activity, index) => {
                            return (
                                <div
                                    className="col-lg-3 col-md-3 p-2"
                                    key={index}
                                >
                                    <div className="card">
                                        <a data-cy="activity-item" href=" ">
                                            <div className="card-body">
                                                <h4
                                                    data-cy="activity-item-title"
                                                    className="card-item-title mt-0"
                                                >
                                                    {activity.title}
                                                </h4>
                                            </div>
                                        </a>

                                        <div className="d-flex justify-content-between">
                                            <div
                                                className="text-muted fs-md"
                                                data-cy="activity-item-date"
                                            >
                                                {activity.created_at}
                                            </div>
                                            <div className="fs-md">
                                                <span
                                                    className="bi bi-trash pointer"
                                                    data-cy="activity-item-delete-button"
                                                ></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    ;
                </div>
            </div>
        </div>
    );
};

export default Main;
