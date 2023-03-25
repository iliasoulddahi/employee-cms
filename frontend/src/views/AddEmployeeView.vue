<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "AddEmployeeView",
  data() {
    return {
      apiUrl: "http://localhost:3000/employee/",
      positions: [],
      firstName: "",
      lastName: "",
      email: "",
      imgUrl: "",
      dob: "",
      gender: "",
      phone: "",
      address: "",
      PositionId: "",
    };
  },
  methods: {
    async fetchPositions() {
      try {
        const { data } = await axios.get(this.apiUrl + "positions", {
          headers: {
            token: localStorage.token,
          },
        });
        console.log(data);
        this.positions = data;
      } catch (error) {
        console.log(error.response.data);
      }
    },
    async postEmployee() {
        console.log(this.dob)
      try {
        const response = await axios.post(this.apiUrl, {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          imgUrl: this.imgUrl,
          dob: this.dob,
          gender: this.gender,
          phone: this.phone,
          address: this.address,
          position: this.PositionId,
        },{
            headers:{
                token: localStorage.token
            }
        });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "New Employee Added",
          showConfirmButton: false,
          timer: 1500,
        });
        this.$router.push("/employees");
      } catch (error) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: error?.response?.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
  },
  created() {
    this.fetchPositions();
  },
};
</script>

<template>
     <h1 class="text-xl text-center mt-5">Add Employee</h1>
  <div class="min-h-screen flex items-center">
    <div class="bg-white p-10 md:w-2/3 lg:w-1/2 mx-auto rounded">
      <form @submit.prevent="postEmployee">
        <div class="flex items-center mb-5">
          <label
            for="name"
            class="w-20 inline-block text-right mr-4 text-gray-500"
            >First Name</label
          >
          <input
            v-model="firstName"
            type="text"
            placeholder="type first name"
            class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
          />
        </div>
        <div class="flex items-center mb-5">
          <label
            for="name"
            class="w-20 inline-block text-right mr-4 text-gray-500"
            >Last Name</label
          >
          <input
            v-model="lastName"
            type="text"
            placeholder="type last name"
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
            placeholder="type email"
            class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
          />
        </div>

        <div class="flex items-center mb-5">
          <label
            for="name"
            class="w-20 inline-block text-right mr-4 text-gray-500"
            >Image Url</label
          >
          <input
            v-model="imgUrl"
            type="text"
            placeholder="type image url"
            class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
          />
        </div>

        <div class="flex items-center mb-5">
          <label
            for="name"
            class="w-20 inline-block text-right mr-4 text-gray-500"
            >Birth Date</label
          >
          <input
            v-model="dob"
            type="date"
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

        <div class="flex items-center mb-5">
          <label
            for="name"
            class="w-20 inline-block text-right mr-4 text-gray-500"
            >Phone</label
          >
          <input
            v-model="phone"
            type="text"
            placeholder="type image url"
            class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
          />
        </div>

        <div class="flex items-center mb-5">
          <label
            for="name"
            class="w-20 inline-block text-right mr-4 text-gray-500"
            >Address</label
          >
          <input
            v-model="address"
            type="text"
            placeholder="type image url"
            class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
          />
        </div>

        <div class="flex items-center mb-5">
          <label
            for="name"
            class="w-20 inline-block text-right mr-4 text-gray-500"
            >Position</label
          >
          <select
          class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
            v-model="PositionId"
          >
            <option selected value="">Select Positions</option>
            <option v-for="e in positions" :key="e.id" :value="e.id">
              {{ e.name }}
            </option>
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
