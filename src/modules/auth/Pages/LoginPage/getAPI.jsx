import axios from "axios";
import API_URL from "./callAPI";

export default function getAPI() {
  //Xu ly voi json users bang axios
  const onSubmit = async (data) => {
    try {
      const response = await axios.get(
        `${API_URL}?email=${data.email}&password=${data.password}`
      );
      const users = response.data;

      if (users.length > 0) {
        alert("Đăng nhập thành công!");
        console.log(response.data);
        alert(`Xin chào ${data.email}`);
      } else {
        alert("Tài khoản hoặc mật khẩu không đúng!");
      }
    } catch (error) {
      console.error(error);
      alert("Đã xảy ra lỗi khi đăng nhập!");
    }
  };
}
