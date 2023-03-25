<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "LoginView",
  data() {
    return {
      apiUrl: "http://localhost:3000/",
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const { data } = await axios.post(this.apiUrl + 'auth/login', {
          email: this.email,
          password: this.password,
        });
        localStorage.token = data.token
        localStorage.username = data.username,
        localStorage.imgUrl = data.imgUrl
        this.login=true
        this.$router.push('/')
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: 'Login Success',
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: error?.response?.data?.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
  },
};
</script>

<template>
  <h1 class="text-center text-2xl">Employee CMS Technical Test GMS</h1>
  <div class="hero min-h-screen">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div>
        <div>
          <p>Email : admin@mail.com</p>
          <p>password : 123456</p>
        </div>
        <div>
          <p>Email : superadmin@mail.com</p>
          <p>password : 123456</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              v-model="email"
              type="text"
              placeholder="email"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              v-model="password"
              type="text"
              placeholder="password"
              class="input input-bordered"
            />
          </div>
          <div class="form-control mt-6">
            <button @click="login" class="btn bg-gray-700">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
