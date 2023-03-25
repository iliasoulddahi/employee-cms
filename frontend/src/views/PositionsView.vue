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
    },
    created() {
        this.fetchPositions()
    }
}
</script>

<template>
    <div class="overflow-x-auto">
  <table class="table w-full">
    <!-- head -->
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Salary</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      
      <tr v-for="e,i in positions" :key="e.id">
        <th> {{ i+1 }}</th>
        <td>{{ e.name }}</td>
        <td>{{ e.salary}}</td>
        <td>{{ e.description}}</td>
        <td>
            <RouterLink :to="'/employee-category/'+ e.id" class="bg-green-600 rounded-lg p-2">Employees</RouterLink>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>
