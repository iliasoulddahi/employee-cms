<script>
import axios from 'axios';

export default {
    name:'PositionsView',
    data(){
        return {
            apiUrl: "http://localhost:3000/employee/",
            positions:[]
        }
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
    formatRupiah(money) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(money);
    },
    },
    created() {
        this.fetchPositions()
    }
}
</script>

<template>
        <div v-if="!positions.length === 0" class="w-full h-screen flex justify-center items-center">
        <img src="../assets/loading.gif" alt="" srcset="">
    </div>
    <div class="overflow-x-auto px-5" v-else>
        <table class="w-full">
      <!-- head -->
      <thead>
        <tr class="text-left text-xl">
          <th></th>
          <th>Name</th>
          <th>Salary</th>
          <th>Description</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr v-for="e in positions" :key="e.id">
          <th>
            #
          </th>
            <td>
            <div class="flex items-center space-x-3">
              <div>
                <div class="font-bold">{{ e.name }} {{ e.lastName }}</div>
              </div>
            </div>
          </td>
          <td>
            {{ formatRupiah( e.salary ) }}
          </td>
          <td><p class="w-96">{{ e.description }}</p></td>
          <td>
            <button class="p-2 bg-gray-500 rounded-lg" @click="$router.push('/employee-category/'+ e.id)">Employees List</button>
          </td>
        </tr>
      </tbody>
      <!-- foot -->
      <tfoot></tfoot>
    </table>
</div>
</template>
