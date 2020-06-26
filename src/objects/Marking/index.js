import React from "react";
import Piece from "../Piece";
import "./styles.css";

const Marking = () => {
  return (
    <table className="marking">
      <tr>
        <td>
          <Piece />
        </td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  );
};

export default Marking;
