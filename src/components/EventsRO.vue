<script setup>
// import { onMounted } from 'vue';
// import {getEvents} from '../services/firebase'

// onMounted(async () => {
//     const result = await getEvents();
//     console.log(result);
// })
</script>


<template>
    <Layout>
        <section>
            <h1>Evenimente</h1>
            <div class="event-container container">
                <!--Card 1-->
                <div class="event-card">
                    <h3 class="titlu">Săptămâna națională a voluntarilor</h3>

                    <img src="/event1.png" alt="img">

                    <p class="paragraf">
                        Un eveniment care include campanii de înverzire, ateliere educaționale, activități în școli,
                        centre sociale etc. ONG-uri și voluntari din toată țara participă.

                    </p>

                    <br>
                    <div>
                        <p class="location">
                            Locații: Chișinău, Orhei
                        </p>
                        <p class="data">Data: 12 iun-13 aug</p>
                        <hr>
                        <router-link to="/login">
                            <button>Aplică</button>
                        </router-link>
                    </div>
                </div>

                <!--Card 2-->

                <div class="event-card">
                    <h3 class="titlu">“Let's Do It, Moldova!”</h3>

                    <img src="/event2.png" alt="img">

                    <p class="paragraf">
                        Campania „Let's Do It, Moldova!” mobilizează anual sute de voluntari pentru activități de
                        organizare, coordonare pe teren, informare și logistică.
                    </p>

                    <br>
                    <div>
                        <p class="location">
                            Locație: “Ștefan cel Mare” Park
                        </p>
                        <p class="data">Data: 29 iun-11 aug</p>
                        <hr>
                        <router-link to="/login">
                            <button>Aplică</button>
                        </router-link>
                    </div>
                </div>

                <!--Card 3-->
                <div class="event-card">
                    <h3 class="titlu">Festivalul "Carpet of Longing"</h3>

                    <img src="/event3.png" alt="img">

                    <p class="paragraf">
                        Festivalurile mari implică sute de voluntari pentru organizare, informare, ghidarea publicului,
                        logistică etc. Voluntariatul oferă acces la evenimente și experiență în organizare.
                    </p>

                    <div>
                        <p class="location">
                            Locații: Chișinău, Orhei
                        </p>
                        <p class="data">Data: 20 iun-15 aug</p>
                        <hr>
                        <router-link to="/login">
                            <button>Aplică</button>
                        </router-link>
                    </div>
                </div>
                <!--Card 4-->
                <div class="event-card">
                    <h3 class="titlu">Campanii de voluntariat</h3>

                    <img src="/event4.png" alt="img">

                    <p class="paragraf">
                        Tinerii voluntari ajută persoanele în vârstă cu cumpărăturile, curățenia sau pur și simplu le
                        țin companie. Evenimentele sunt adesea organizate de primării sau ONG-uri locale.

                        Dacă ai nevoie de o variantă mai potrivită pentru un raport, broșură sau prezentare, pot adapta.
                    </p>


                    <div>
                        <p class="location">
                            Locații: Bălți, Orhei
                        </p>
                        <p class="data">Data: 12 sep-10 oct</p>
                        <hr>
                        <router-link to="/login">
                            <button>Aplică</button>
                        </router-link>
                    </div>
                </div>

                <!--Card 5-->
                <div class="event-card">
                    <h3 class="titlu">Maraton caritabil "Run for Help"</h3>

                    <img src="/event5.png" alt="img">

                    <p class="paragraf">
                        Evenimente sportive în care voluntarii joacă un rol esențial – fie că ajută la organizare,
                        distribuirea apei, coordonare sau susțin cauze umanitare promovate prin curse.
                    </p>

                    <br>
                    <br>
                    <div>
                        <p class="location">
                            Locații: Strășeni, Fălești
                        </p>
                        <p class="data">Data: 7 sep-8 oct</p>
                        <hr>
                        <router-link to="/login">
                            <button>Aplică</button>
                        </router-link>
                    </div>
                </div>

                <!--Card 6-->
                <div class="event-card">
                    <h3 class="titlu">Școală de Vară pentru Voluntari</h3>

                    <img src="/event6.png" alt="img">

                    <p class="paragraf">
                        Ateliere de dezvoltare personală și traininguri în leadership, comunicare, strângere de fonduri.
                        Acestea reunesc tineri dornici să se implice activ în comunitate.
                    </p>

                    <br>
                    <br>
                    <br>
                    <div>
                        <p class="location">
                            Locații: Soroca, Comrat
                        </p>
                        <p class="data">Data: 3 oct-10 nov</p>
                        <hr>
                        <router-link to="/login">
                            <button>Aplică</button>
                        </router-link>
                    </div>
                </div>


            </div>

        </section>

        <br>
        <br>

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
    row-gap: 132px;
    margin: 0 auto;
}

/* Card individual */
.event-card {
    background-color: #c0d6a3;
    border-radius: 10px;
    padding: 20px;
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
    margin: 20px 58px auto 58px;
    border: none;
    cursor: pointer;
}
</style>