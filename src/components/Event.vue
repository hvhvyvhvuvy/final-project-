<script setup>
const props = defineProps({
    eventSnapshot: {
        type: Object,
        default: {}
    }
})
</script>

<template>
    <Layout>
        <!--Card 1-->
        <div class="event-card">
            <h3 class="titlu">{{ eventSnapshot.denumire }}</h3>

            <img :src="`/${eventSnapshot.img}`" alt="img">

            <p class="paragraf">
                {{ eventSnapshot.descriere }}
            </p>

            <div>
                <p class="location">
                    Location: {{ eventSnapshot.locatie }}
                </p>
                <p class="data">Data: {{ eventSnapshot.dataorg }}</p>
                <hr>
                <router-link to="/login">
                    <button>Apply</button>
                </router-link>
            </div>
        </div>
    </Layout>
</template>

<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
}

h1 {
    width: 291px;
    height: 79px;
    font-family: 'Old Standard TT';
    font-weight: 400;
    font-style: normal;
    font-size: 64px;
    margin: 95px 1277px 93px 150px;
}

.container {
    max-width: 1216px;
    margin: auto;
}

/* Container pentru evenimente */
.event-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 43px;
    /* row-gap: 70px; */
    /* margin: 0 auto; */
}

/* Card individual */
.event-card {
    background-color: #c0d6a3;
    border-radius: 10px;
    padding: 20px;
    height: 620px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

}

.titlu {
    text-align: center;
    font-family: 'Old Standard TT';
    font-weight: 400;
    font-size: 40px;
}

.event-card img {
    width: 349px;
    height: 189px;
    margin-top: 20px;
    border-radius: 10px;
}

.paragraf {
    margin-top: 20px;
    text-align: center;
    font-family: 'Nunito';
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
}

.location {
    text-align: center;
    color: #FFFFFF;
    font-family: 'Nunito';
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    margin-top: 18px;
}


.data {
    text-align: center;
    color: #FFFFFF;
    font-family: 'Nunito';
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
}

.event-card hr {
    width: 350px;
    align-items: center;
    color: #FFFFFF;
    border-color: #FFFFFF;
    margin-top: 20px;
}

.event-card button {
    font-family: 'Nunito';
    font-style: bold;
    background-color: #D4E2C4;
    border-radius: 15px;
    color: rgb(0, 0, 0);
    font-size: 20px;
    font-weight: 600;
    padding: 12px 82px;
    margin: 20px 58px auto 70px;
    border: none;
    cursor: pointer;
}
</style>