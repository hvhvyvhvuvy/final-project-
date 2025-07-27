<template>
     <footer class="footer">
    <div class="footer-column">
      <h3 >Locations</h3>
      <ul>
        <li>Chișinău</li>
        <li>Orhei</li>
        <li>Strășeni</li>
        <li>Cricova</li>
        <li>Bălți</li>
        <li>Comrat</li>
        <li>Soroca</li>
        <li>Fălești</li>
      </ul>
    </div>

    <div class="footer-column">
      <h3>Resources</h3>
      <ul class="footer-ul">
        <li>Help</li>
        <li>Nonprofit Learning Center</li>
        <li>Webinars</li>
        <li>Blog – Engaging Volunteers</li>
        <li>Contact Us</li>
      </ul>
      <h3>Contact us</h3>
      <p><img src="/telefon.png"> +373 678 54 780</p>
      <p> YoungVolunteers@gmail.com</p>
    </div>

    <div class="footer-column">
      <h3>Follow us on social media</h3>
      <p><img src="/Instagram_icon.png"> @YoungVolunteers.md</p>
      <p><img src="/facebook.png"> @YoungVolunteers.md</p>
      <p><img src="/telegram.png"> @YoungVolunteers.md</p>
      <p><img src="/tiktok.jpg"> @YoungVolunteers.md</p>
    </div>
  </footer>
</template>

<script setup> </script>

<style scoped>
footer {
    background-color: #9ABC70;
    display: flex;
    justify-content: center;   
    gap: 100px;                 
    padding: 30px;
    font-family: "Old Standard TT";
}

.footer-col {
    text-align: center;
}


.footer-section {
  flex: 1 1 200px;
  margin: 10px;
}

.footer-section h3 {
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 400;
}


.footer-section ul {
  list-style: none;
  padding:0 ;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 6px;
  font-size: 14px;
}


.footer-section p {
  font-size: 14px;
  margin-top: 6px;
  display: flex;
  align-items: center;
}

.footer-section img.icon {
  width: 18px;
  height: 18px;
  margin-right: 8px;
  vertical-align: middle;
}

footer ul li {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer img {
  height: 30px;
  width: 32.6px;
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 5px;
  border-radius: 30%;
}

.footer-ul {
  margin-bottom: 10px;
}

.footer-column h3 {
  margin-bottom: 10px;
}

</style>