<script>
import axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";
export default {
  name: "DetailEmployeeView",
  data() {
    return {
      apiUrl: "https://employee-cms-api.up.railway.app/employee/",
      employee: {},
    };
  },
  methods: {
    async fetchEmployee() {
      try {
        const { data } = await axios.get(this.apiUrl + this.$route.params.id, {
          headers: {
            token: localStorage.token,
          },
        });
        this.employee = data;
        console.log(data);
      } catch (error) {
        console.log(error.response?.data?.message);
      }
    },
    getJoinedFrom(date) {
      return "Joined From " + moment(date).fromNow();
    },
    formatRupiah(money) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(money);
    },
    async handleDeleteEmployee() {
      try {
        await axios.delete(this.apiUrl + this.$route.params.id, {
          headers: {
            token: localStorage.token,
          },
        });
        this.$router.push('/employees')
        this.fetchEmployee()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: 'Delete Employee Success',
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
    async handleChangeStatus(){
        try {
        await axios.patch(this.apiUrl + this.$route.params.id,{}, {
          headers: {
            token: localStorage.token,
          },
        });
        this.fetchEmployee()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: 'Status Changed',
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
    }
  },
  created() {
    this.fetchEmployee();
  },
};
</script>
<template>
        <div v-if="!employee?.firstName" class="w-full h-screen flex justify-center items-center">
        <img src="../assets/loading.gif" alt="" srcset="">
    </div>
  <div class="flex justify-center" v-else>
    <div class="" style="width: 600px">
      <div class="hero-content flex lg:flex-row-reverse justify-center">
        <img :src="employee?.imgUrl" class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-3xl font-bold">
            {{ employee?.firstName + " " + employee?.lastName }}
          </h1>
          <table class="my-10 mr-20">
            <tr>
              <td><h1 class="font-semibold">Position</h1></td>
              <td>: {{ employee?.Position.name }}</td>
            </tr>
            <tr>
              <td><h1 class="font-semibold">Email</h1></td>
              <td>: {{ employee?.email }}</td>
            </tr>
            <tr>
              <td><h1 class="font-semibold">Phone</h1></td>
              <td>: {{ employee?.phone }}</td>
            </tr>
            <tr>
              <td><h1 class="font-semibold">Salary</h1></td>
              <td>: {{ formatRupiah(employee?.Position?.salary) }}</td>
            </tr>
            <tr>
              <td><h1 class="font-semibold">Join Since</h1></td>
              <td>: {{ getJoinedFrom(employee.createdAt) }}</td>
            </tr>
            <tr>
              <td><h1 class="font-semibold">Status</h1></td>
              <td>
                :
                <span
                  class="rounded-xl p-1"
                  :class="
                    employee?.status === 'active'
                      ? 'bg-green-500'
                      : 'bg-yellow-500'
                  "
                  >{{ employee?.status }}</span
                >
              </td>
            </tr>
          </table>
          <div class="flex w-full justify-between">
            <button @click="$router.push('/edit-employee/'+ employee.id)" class="py-2 px-3 rounded-lg">
              <i class="bi bi-pencil-square"></i> Edit
            </button>
            <button @click="handleDeleteEmployee" class="py-2 px-3 rounded-lg">
              <i class="bi bi-trash3"></i> Delete
            </button>
            <button @click="handleChangeStatus" class="py-2 px-3 rounded-lg">
              <i class="bi bi-check2-square"></i> Change Status
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
