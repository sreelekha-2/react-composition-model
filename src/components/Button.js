import React from 'react';

export default function Button(props) {
  return (
    <>
      <h1>This is button Component </h1>
      <button>{props.children}</button>
    </>
  );
}
