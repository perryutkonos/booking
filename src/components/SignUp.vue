<template>
    <div class="full-height valign-wrapper indigo darken-4">
        <div class="container">
            <div class="row">
                <div class="col s6 offset-s3">
                    <div class="card ">
                        <div class="card-content">
                            <span class="card-title">Регистрация</span>
                            <form action="">
                                <div class="input-field">
                                    <input placeholder="Псевдоним" id="nickname" type="text" v-model="nickname">
                                </div>
                                <div class="input-field">
                                    <input placeholder="Email" id="email" type="text" v-model="email" class="validate">
                                </div>
                                <div class="input-field">
                                    <input placeholder="Пароль" id="password" type="password" v-model="password">
                                </div>
                            </form>
                        </div>
                        <div class="card-action">
                            <button v-on:click="submit" class="waves-effect btn indigo darken-4">Зарегаться</button>
                            <router-link class="link" :to="{ name: 'Login'}">Войти</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
  import {APU_URL} from "../constants/index"
  import axios from "axios";

  export default {
    name: "SignUp",
    data() {
      return {
        email: "",
        password: "",
        nickname: ""
      }
    },
    methods: {
      submit() {
        const url = `${APU_URL}/account/register`;
        const {email, password, nickname} = this;

        axios({
          url,
          method: 'post',
          data: JSON.stringify({
            email, password, nickname
          }),
          headers: {
            "Content-Type": "application/json",
          }
        })
          .then(response => {
            console.log(response);
            this.$store.commit('update', response.data.access_token);
            this.$router.push({path: '/admin'})
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
</script>
