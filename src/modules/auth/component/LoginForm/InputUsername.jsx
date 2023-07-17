import React from "react";
import Validation from "./ValidationU_P";

export default function InputField() {
    Validation();
  return (
    <>
      <input
        className="input_top"
        type="text"
        placeholder=" "
        {...register("email")}
      />
      {errors.email && <span>{errors.email.message}</span>}
      <label className="label-input_top">Email Address *</label>
    </>
  );
}
