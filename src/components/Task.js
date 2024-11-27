import React from "react";

/**
 * TODO: implement the Task component
 * @function Task
 * @returns {React.Component} A <li> containing the task description and a checkbox to toggle completion
 */
export default function Task(props) {
    if (props.packed === false) {
        return (
            <li>
                <div onClick={props.handleToggleTask}>
                    <input type="checkbox"/>
                    {props.description} 
                    <button>❌</button>
                </div>
            </li>
        );
    } else {
        return (
            <div style={{ textDecoration: "line-through" }} onClick={props.handleToggleTask}>
                {props.description} 
            </div>
        );
    }
}

