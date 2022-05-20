<template>
  <div class="app">
    <div class="sign-up-box">
      <h2>Sign up</h2>
      <form>
        <div class="text-box" id="first-name">
          <input v-model="firstName" type="text" name="" required="required" />
          <label>First Name</label>
        </div>
        <div class="text-box">
          <input v-model="lastName" type="text" name="" required="required" />
          <label>Last Name</label>
        </div>
        <div class="text-box">
          <input v-model="email" type="text" name="" required="required" />
          <label>E-mail</label>
        </div>
        <div class="select-box">
          <label for="gender">Gender :</label>
          <select v-model="gender" name="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div class="flex-center">
          <button class="submit-button" @click="submitForm()" type="button">Submit</button>
        </div>
      </form>
    </div>
    <NuxtLink to="/users">List of user</NuxtLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      gender: "Male",
    };
  },
  methods: {
    async submitForm() {
      if (this.checkForm()) {
        var inputs = document.querySelectorAll(".text-box > input");
        let data = {};
        data.firstName = this.firstName;
        data.lastName = this.lastName;
        data.email = this.email;
        data.gender = this.gender;
        console.log(data);
        await this.$axios.$post("http://localhost:3000/api/user", data);
        this.firstName = '';
        this.lastName = '';
        this.email = '';
      }
    },

    checkForm() {
      var check = true;
      var inputs = document.querySelectorAll(".text-box > input");
      inputs.forEach((input) => {
        if (!input.value) {
          input.style.borderColor = "red";
          check = false;
        } else {
          input.style.borderColor = "#fff";
        }
      });
      return check;
    },
  },
};
</script>
