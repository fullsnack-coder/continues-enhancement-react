import React from "react";
import propTypes from "prop-types";

function Task({ task: { id, title, status }, onArchiveTask, onPinTask }) {
  return (
    <div className={`list-item ${status}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={status === "ARCHIVED_TASK"}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <div className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          placeholder="Input title"
        />
      </div>

      <div className="actions" onClick={(event) => event.stopPropagation()}>
        {status !== "ARCHIVED_TASK" && (
          <button onClick={() => onPinTask(id)}>
            <span className={`icon-star`} />
          </button>
        )}
      </div>
    </div>
  );
}

Task.propTypes = {
  task: propTypes.shape({
    id: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    status: propTypes.string.isRequired,
  }),
  onArchiveTask: propTypes.func.isRequired,
  onPinTask: propTypes.func.isRequired,
};

export default Task;
