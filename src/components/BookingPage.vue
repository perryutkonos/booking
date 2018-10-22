<template>
    <div class="container">
        <h3>Брониорование встреч с {{this.$route.params.user}}</h3>
        <table>
            <thead>
            <tr>
                <th v-for="date in dates">{{date.day}}.{{date.month+1}}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="n in 24">
                <td v-for="date in dates">
                    <div class="time">{{date.times[n-1].getHours()}}:00</div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
  export default {
    name: "BookingPage",
    data() {
      let dates = {};
      for (let i = 0; i < 7; i++) {
        let date = new Date();
        date.setTime(date.getTime() + 1000 * 60 * 60 * 24 * i);

        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();

        let times = [];
        for (let j = 0; j < 24; j++) {
          times[j] = new Date(year, month, day, j, 0, 0, 0);
        }

        dates[`${year}-${day}`] = {
          day,
          month,
          year,
          times
        }
      }

      return {
        dates
      }
    },
    created() {
      console.log(this.dates);
    }
  }
</script>

<style scoped>

</style>