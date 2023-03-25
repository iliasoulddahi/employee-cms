<script>
import axios from "axios";
import moment from "moment";
import Pagination from "v-pagination-3";
import Swal from 'sweetalert2'
export default {
  name: "EmployeesCategoryView",
  components: {
    Pagination,
  },
  data() {
    return {
      employees: {},
      positions: [],
      apiUrl: "https://employee-cms-api.up.railway.app/employee/",
      queryName: "",
      queryPosition: this.$route.params.id,
      page: 1,
      size: 7,
    };
  },
  methods: {
    async fetchEmployees() {
      const params = {};
      if (this.queryName) {
        params["name"] = this.queryName;
      }
      if (this.queryPosition) {
        params["position"] = this.queryPosition;
      }
      if (this.page) {
        params["page"] = this.page - 1;
      }
      if (this.size) {
        params["size"] = this.size;
      }
      try {
        const { data } = await axios.get(this.apiUrl, {
          headers: {
            token: localStorage.token,
          },
          params,
        });
        this.employees = data;
      } catch (error) {
        console.log(error.response.data);
      }
    },
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
    getJoinedFrom(date) {
      return "Joined From " + moment(date).fromNow();
    },
    formatRupiah(money) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(money);
    },
    handlePositionChange() {
      this.queryName = "";
      this.fetchEmployees();
    },
    handleSearchChange() {
      this.queryPosition = "";
      this.fetchEmployees();
    },
    async handleDeleteEmployee(id) {
      try {
        await axios.delete(this.apiUrl + id, {
          headers: {
            token: localStorage.token,
          },
        });
        this.fetchEmployees()
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
    async handleChangeStatus(id){
        try {
        await axios.patch(this.apiUrl + id,{}, {
          headers: {
            token: localStorage.token,
          },
        });
        this.fetchEmployees()
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
    this.fetchEmployees();
    this.fetchPositions();
  },
};
</script>

<template>
        <div v-if="!employees?.employees" class="w-full h-screen flex justify-center items-center">
        <img src="../assets/loading.gif" alt="" srcset="">
    </div>
  <div class="overflow-x-auto w-full" v-else>
        <h1 class="text-2xl text-center py-10">Employees For Position {{ positions.find(e=> e.id === +$route.params.id).name }}</h1>
    <table class="w-full">
      <!-- head -->
      <thead>
        <tr class="text-left text-xl">
          <th></th>
          <th>Name</th>
          <th>Position</th>
          <th>Salary</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr v-for="e in employees?.employees" :key="e.id">
          <th>
            #
          </th>
          <RouterLink :to="'/detail-employee/'+ e.id">
            <td>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                  <img :src="e.imgUrl" alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div class="font-bold">{{ e.firstName }} {{ e.lastName }}</div>
                <div class="text-sm opacity-50">{{ e.address }}</div>
              </div>
            </div>
          </td>
          </RouterLink>
          <td>
            {{ e.Position.name }}
            <br />
            <span class="badge badge-ghost badge-sm">{{
              getJoinedFrom( e.createdAt )
            }}</span>
          </td>
          <td>{{ formatRupiah( e.Position.salary ) }}</td>
          <td>{{ e.status === "active" ? "active" : "inactive" }}</td>
          <th>
            <div class="dropdown dropdown-left">
              <label tabindex="0" class="cursor-pointer m-1"
                ><i class="bi bi-three-dots-vertical"></i
              ></label>
              <ul
                tabindex="0"
                class="font-normal dropdown-content menu menu-compact shadow bg-base-100 rounded-box w-44"
              >
                <li>
                  <a @click="$router.push('/edit-employee/'+ e.id)"><i class="bi bi-pencil-square"></i> Edit</a>
                </li>
                <li>
                    <a @click="handleDeleteEmployee(e.id)"><i class="bi bi-trash3"></i> Delete</a>
                </li>
                <li>
                  <a @click="handleChangeStatus(e.id)" ><i class="bi bi-check2-square"></i> Change Status</a>
                </li>
              </ul>
            </div>
          </th>
        </tr>
      </tbody>
      <!-- foot -->
      <tfoot></tfoot>
    </table>
    <div class="flex justify-center">
      <pagination
        v-model="page"
        :records="employees?.totalItems"
        :per-page="size"
        @paginate="() => fetchEmployees()"
        :options="{
          hideCount: true,
          edgeNavigation: false,
          chunksNavigation: 'scroll',
        }"
      />
    </div>
  </div>
</template>

<style scoped>
th,
td {
  padding: 1rem;
}
</style>
