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
          <input v-model="email" type="email" name="" required="required" />
          <label>E-mail</label>
        </div>
        <div class="select-box">
          <label for="gender">Gender :</label>
          <select v-model="gender" name="gender">
            <option value="Male">Male</option>
            <option selected="selected" value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div class="flex-center">
          <button class="submit-button" @click="submitForm()">Submit</button>
        </div>
      </form>
      {{ firstName }} {{ lastName }} {{ email }} {{ gender }}
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
    };
  },
  methods: {
    submitForm() {
      
      console.log(this.checkForm());
      this.checkForm();
    },
    checkForm() {
      var check = true;
      var inputs = document.querySelectorAll(".text-box > input");
      inputs.forEach(input => {
        if(!input.value){
          input.style.borderColor = "red";
          check = false;
        } else {
          input.style.borderColor = "#fff";
        }
      })
      return check;
    },
  },
};
</script>
