import React from "react";

const Header = () => {
    return (
        <div className="todo-header" datacy="header-background">
            <div className="todo-container container ">
                <h2
                    data-cy="header-title"
                    className="todo-wrapper-container container header-title"
                >
                    TO DO LIST APP
                </h2>
            </div>
        </div>
    );
};

export default Header;
