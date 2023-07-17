import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
   
// Validation by schema
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email không hợp lệ !!!")
    .required("Vui lòng nhập email !!!"),
  password: yup.string().required("Vui lòng nhập mật khẩu."),
});

export default function Validation(){
 const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
}