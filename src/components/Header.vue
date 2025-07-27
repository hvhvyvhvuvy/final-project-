<template>
     <header>
     <img src="/logo.png" alt="LOGO">
        <nav>
            <ul>
                <li><a href="/about">Home</a></li>
                <li><a href="/about">News</a></li>
                <li><a href="/about">Organizations</a></li>
            </ul>
        </nav>

        <div class="search-container">
            <input type="text" class="search-box" placeholder="Search">
            <input type="image" class="search-icon" src="/magnifying-glass.png" alt="Search Icon">
        <!-- <button type="submit">🔍</button>-->
        </div>

        <div class="language-switcher"> 
        <a href="/about">EN/</a> 
        <a href="/">RO/</a> 
        <a href="/aboutRU">RU</a> 
        </div>
  </header>
</template>

<script setup> </script>

<style scoped>
header {
  background-color: #9ABC70;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 20px;
  gap: 20px;
  justify-content: center;
}

header ul li {
    display: inline-block;
    text-transform: uppercase;
    margin-left: 2rem;
    padding: auto;
}
header ul li a {
    text-decoration: none;
    font-size: 0.9rem;
}
header img {
  height: 35px;
}

nav {
  display: flex;
  gap: 20px;
}

nav a {
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 14px;
}
nav {
  display: flex;
  gap: 20px;
}

.search-container{
  display: flex;
  align-items: center;
  background-color: #9ABC70;
  padding: 10px;
  justify-content: center;
}

.search-box{
  padding: 6px 10px;
  font-size: 16px;
  border: 1px solid #000000;
  display: flex;
  align-items: center;
  background-color: #9ABC70;
  justify-content: center;
  border-right: none;
  width:200px;
  outline:none;
  border-right: none;
}

.search-icon {
  width: 32px;
  height: 32px;
  border: 1px solid #000000;
  border-left: none;
  background-color: #9ABC70;
  padding: 4px;
  cursor: pointer;
}

a {
    color: black;          
    text-decoration: none;
    align-items: right;
  
}

</style>