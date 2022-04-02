import React from "react";

const Header = () => {
    return (
        <div class="todo-header" data-cy="header-background">
            <div class="todo-container ">
                <h2
                    data-cy="header-title"
                    class="todo-wrapper-container todo-header-title"
                >
                    TO DO LIST APP
                </h2>
            </div>
        </div>
    );
};

export default Header;
