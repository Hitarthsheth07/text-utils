import React from "react";

export default function Alert(props) {
  function capitalize (word = 'success'){
    return word.charAt(0).toUpperCase() + word.slice(1)
  }
  return (
    props.alert && (
      <div>
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}:</strong> {props.alert.message}
        </div>
      </div>
    )
  );
}
