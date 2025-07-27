<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'
import Layout from './Layout.vue'

// initialize EmailJS
emailjs.init('v0PRuoCEfLsvApKZC')

// Form state


// Submit handler
const sendEmail = (e) => {
  e.preventDefault()
  const firstName = document.getElementById('firstName').value.trim();
const lastName = document.getElementById('lastName').value.trim();
const gender = document.querySelector('input[name="gender"]:checked')?.value || '';
const birthDate = document.getElementById('birthday').value.trim();
const contact = document.getElementById('contact').value.trim();
const locality = document.getElementById('locality').value.trim();
const email = document.getElementById('email').value.trim();

  emailjs.send('service_3zt8m2n', 'template_j6kbvfj', {
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    birthday: birthDate,
    contact: contact,
    locality: locality,
    email: email
  })
  .then((result) => {
    console.log('Email sent successfully:', result.text)
    alert('Application sent successfully!')
  }, (error) => {
    console.error('Email sending failed:', error.text)
    alert('Something went wrong. Please try again later.')
  })
}
</script>

<template>
  <Layout>
    <!-- Volunteer Form -->

    <div class="form-container">
      <h2>Become a volunteer</h2>
      <form @submit="sendEmail">
        <input v-model="firstName" id="firstName" type="text" placeholder="First name" required />
        <input v-model="lastName" id="lastName" type="text" placeholder="Last name" required />

        <div class="gender">
          <label>Gender</label>
          <div class="gender-buttons">
            <input v-model="gender" type="radio" id="Female" name="gender" value="Female" class="gender-btn" />
            <label for="Female">Female</label>
            <input v-model="gender" type="radio" id="Male" name="gender" value="Male" class="gender-btn" />
            <label for="Male">Male</label>
          </div>
        </div>

        <input v-model="birthDate" type="date" placeholder="Date of birth" id="birthday" required />
        <input v-model="contact" type="tel" placeholder="Contact number" id="contact" required />
        <input v-model="locality" type="text" placeholder="Locality" id="locality" required />
        <input v-model="email" type="email" placeholder="Email" id="email" required />
        <button type="submit" class="submit-btn">Apply</button>
      </form>


    </div>
  </Layout>
</template>


<style scoped> 

.form-container {
  width:800px;
  margin:30px auto;
  border: 2px solid #000;
  border-radius: 20px;
  padding: 4%;
  box-sizing: border-box;
  text-align: center;

  
}

.form-container h2 {
  margin-bottom: 30px;
  font-weight: 500;
}

form input[type="text"],
form input[type="email"],
form input[type="tel"],
form input[type="date"] {
  width: 100%;
  padding: 10px 15px;
  margin: 10px 0;
  border: 1.5px solid #000;
  border-radius: 25px;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
}

form input[type="radio"]{
  opacity:0;
  width:0;
  display: none;
}

.gender {
  padding: 15px 0;
  text-align: center;
  
}

.gender label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
}

.gender-buttons {
  display: flex;
  justify-content: space-between;
  width:240px;
  margin:auto;
  align-items: center;
}

.gender-buttons label {
  padding: 10px 20px;
  border-radius: 25px;
  border: 1.5px solid #000;
  background-color: #fff;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;
  width:100px;
}

.gender-btn:hover {
  background-color: #eaeaea;
}

.submit-btn {
  margin-top: 20px;
  width: 100%;
  padding: 12px;
  background-color: #c5dca0;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #b2ca89;
}

.click {
  background-color: rgb(0, 0, 0);
}

input[type="radio"]:checked +label {
  background-color: #c5dca0;
  border:none;
}
</style>