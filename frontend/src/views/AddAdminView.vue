<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "AddAdminView",
  data() {
    return {
      apiUrl: "http://localhost:3000/auth/",
      name: "",
      email: "",
      password: "",
      imgUrl: "",
      gender: "",
      phone: "",
    }
  },
  methods: {
    async postAdmin() {
      try {
        await axios.post(
          this.apiUrl + "register-admin",
          {
            name: this.name,
            email: this.email,
            password: this.password,
            imgUrl: this.imgUrl,
            gender: this.gender,
            phone: this.phone,
          },
          {
            headers: {
              token: localStorage.token,
            },
          }
        );
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "New Admin Added",
          showConfirmButton: false,
          timer: 1500,
        });
        this.$router.push("/employees");
      } catch (error) {
        if (error?.response?.data.message === 'Forbidden') {
            this.name=""
            this.email=""
            this.password=""
            this.imgUrl=""
            this.gender=""
            this.phone=""  
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: 'only superadmin can add admin',
            showConfirmButton: false,
            timer: 1500,
          });
        }else{
            Swal.fire({
            position: "top-end",
            icon: "error",
            title: error?.response?.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    },
  }
};
</script>

<template>
     <h1 class="text-xl text-center mt-5">Add Admin</h1>
  <div class="min-h-screen flex items-center">
    <div class="bg-white p-10 md:w-2/3 lg:w-1/2 mx-auto rounded">
      <form @submit.prevent="postAdmin">
        <div class="flex items-center mb-5">
          <label
            for="name"
            class="w-20 inline-block text-right mr-4 text-gray-500"
            >Admin Name</label
          >
          <input
            v-model="name"
            type="text"
            placeholder="type first name"
            class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
          />
        </div>
        <div class="flex items-center mb-5">
          <label
            for="name"
            class="w-20 inline-block text-right mr-4 text-gray-500"
            >Email</label
          >
          <input
            v-model="email"
            type="text"
            placeholder="type last name"
            class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
          />
        </div>

        <div class="flex items-center mb-5">
          <label
            for="name"
            class="w-20 inline-block text-right mr-4 text-gray-500"
            >password</label
          >
          <input
            v-model="password"
            type="password"
            placeholder="type last name"
            class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
          />
        </div>

        <div class="flex items-center mb-5">
          <label
            for="name"
            class="w-20 inline-block text-right mr-4 text-gray-500"
            >image Url</label
          >
          <input
            v-model="imgUrl"
            type="text"
            placeholder="type last name"
            class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
          />
        </div>

        <div class="flex items-center mb-5">
          <label
            for="name"
            class="w-20 inline-block text-right mr-4 text-gray-500"
            >Phone</label
          >
          <input
            v-model="phone"
            type="text"
            placeholder="type last name"
            class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
          />
        </div>

        <div class="flex items-center mb-5">
          <label
            for="name"
            class="w-20 inline-block text-right mr-4 text-gray-500"
            >Gender</label
          >
          <select
            class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
            v-model="gender"
          >
            <option selected value="">Select Gender</option>
            <option selected value="male">Male</option>
            <option selected value="female">Female</option>
          </select>
        </div>

        <div class="text-right flex justify-between">
          <button
            @click.prevent="$router.push('/employees')"
            class="py-3 px-8 bg-danger text-green-100 font-bold rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="py-3 px-8 bg-green-500 text-green-100 font-bold rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
