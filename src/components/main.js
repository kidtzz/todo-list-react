import React from "react";

const Main = () => {
    return (
        <div class="main todo-wrapper-container">
            <div class="todo-w-100">
                <div class="todo-d-flex todo-justify-content-between todo-my-4 todo-align-items-center">
                    <h1
                        class="todo-my-0 todo-font-weight-semi-bold"
                        data-cy="activity-title"
                    >
                        Activity
                    </h1>
                    <div>
                        <button
                            data-cy="activity-add-button"
                            class="todo-btn todo-btn-primary"
                        >
                            <span class="todo-icon-plus todo-mr-2"></span>Tambah
                        </button>
                    </div>
                </div>
                <div class="todo-activities">
                    <div class="todo-p-2">
                        <div class="todo-card">
                            <a data-cy="activity-item" href="/detail/23736332">
                                <div class="todo-card-body">
                                    <h4
                                        data-cy="activity-item-title"
                                        class="todo-card-item-title todo-mt-0"
                                    >
                                        New Activity Group 101
                                    </h4>
                                </div>
                            </a>
                            <div class="todo-d-flex todo-justify-content-between">
                                <div
                                    class="todo-text-muted todo-fs-md"
                                    data-cy="activity-item-date"
                                >
                                    1 April 2022
                                </div>
                                <div class="todo-fs-md">
                                    <span
                                        class="todo-icon-trash todo-pointer"
                                        data-cy="activity-item-delete-button"
                                    ></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
