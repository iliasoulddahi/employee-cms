<script>
import router from '../router';

export default {
  name: "Navbar",
  data(){
    return{
        imgUrl:localStorage.imgUrl,
        username:localStorage.username
    }
  },
  methods: {
    handleLogout(){
        localStorage.clear()
        router.push('/login')
    }
  }
};
</script>

<template>
    <div class="navbar bg-base-100 px-12">
  <div class="flex-1">
    <RouterLink to="/" class="normal-case font-semibold text-3xl">Employee CMS</RouterLink>
  </div>
  <div class="flex-none gap-2">
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
              <img :src="imgUrl" />
            </div>
            <span>{{ username }} </span>
      </label>
      <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li><a @click="handleLogout">Logout</a></li>
      </ul>
    </div>
  </div>
</div>
<nav class="flex justify-center text-xl font-semibold">
    <RouterLink to="/employees" class="px-4 text-lg"><i class="bi bi-person-lines-fill"></i>Employees</RouterLink>
    <RouterLink to="/positions" class="px-4 text-lg"><i class="bi bi-person-workspace"></i>Positions</RouterLink>
    <RouterLink to="/add-admin" class="px-4 text-lg"><i class="bi bi-person-add"></i>Add Admin</RouterLink>
</nav>
<hr>
</template>
