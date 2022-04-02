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
                <div class="d-flex justify-content-between my-4 align-items-center">
                    <h1
                        class="my-0 font-weight-semi-bold"
                        data-cy="activity-title"
                    >
                        Activity
                    </h1>
                    <div>
                        <button
                            data-cy="activity-add-button"
                            class="btn btn-primary"
                        >
                            <span class="bi bi-plus mr-2"></span>Tambah
                        </button>
                    </div>
                </div>
                <div className="activities">
                    {loading &&
                        activity.map((activity, index) => {
                            return (
                                <div className="p-2" key={index}>
                                    <div className="card">
                                        <a
                                            data-cy="activity-item"
                                            href={activity.id}
                                        >
                                            <div className="card-body">
                                                <h4
                                                    data-cy="activity-item-title"
                                                    className="card-item-title  mt-0"
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
                                                    className="icon-trash pointer"
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
