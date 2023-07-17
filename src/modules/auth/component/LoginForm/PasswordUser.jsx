import React from "react";
import Validation from "./ValidationU_P";

export default function Password() {
    Validation();
  return (
    <>
      <input
        className="input_bottom"
        type="password"
        placeholder="Password *"
        {...register("password")}
      />
      {errors.password && <span>{errors.password.message}</span>}
      {/* input for checkbox */}
      <label className="mdl-top-label">
        <input type="checkbox" className="mdl-top-label_checkbox" /> Remember me
      </label>
    </>
  );
}
