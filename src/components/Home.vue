<template>
    <div class="container">
        <h1>Хоум</h1>
        <div class="row">
            <div class="col s12">
                <router-link :to="{ name: 'Login'}">Войти</router-link>
            </div>
        </div>
        <div class="row">
            <div class="col s12">
                <router-link :to="{ name: 'SignUp'}">Зарегаться</router-link>
            </div>

        </div>
        <div class="row">
            <div class="col s12">
                <router-link :to="{ path: '/meets/nikitin'}">Встреча с nikitin</router-link>
            </div>

        </div>
    </div>

</template>

<script>
  export default {
    name: 'Home',
  }
</script>
