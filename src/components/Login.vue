<template>
    <div class="full-height valign-wrapper indigo darken-4">
        <div class="container">
            <div class="row">
                <div class="col s6 offset-s3">
                    <div class="card ">
                        <div class="card-content">
                            <span class="card-title">Вход</span>
                            <form action="">
                                <div class="input-field">
                                    <input placeholder="Email" id="email" type="text" v-model="email" class="validate">
                                </div>
                                <div class="input-field">
                                    <input placeholder="Пароль" id="password" type="password" v-model="password">
                                </div>
                            </form>
                        </div>
                        <div class="card-action">
                            <button v-on:click="submit" class="waves-effect btn">Войти</button>
                            <router-link class="link indigo-text darken-4" :to="{ name: 'SignUp'}">Зарегаться</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
  import {APU_URL} from "../constants"

  export default {
    name: "Login",
    data() {
      return {
        email: "",
        password: "",
      }
    },
    methods: {
      submit() {

        const url = `${APU_URL}/account/register`;
        const {email, password} = this;

        fetch(url, {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: JSON.stringify({email, password}),
        })
          .then(response => response.json())
          .then(response => {
            console.log(response)
          })
      }
    }
  }
</script>
