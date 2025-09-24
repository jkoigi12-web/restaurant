<script setup>
const isLoggedIn =true
</script>

<template>
    <v-app-bar color="light-blue-lighten-1">
    <v-app-bar-title>Jikoni</v-app-bar-title>

    <v-btn  to="/">Home</v-btn>
    <v-btn to="/menu">Menu</v-btn>
    <v-btn to="/contactus">ContactUs</v-btn>
    <v-btn to="/reservation">Reservation</v-btn>
    <v-btn to="/signup">SignUp</v-btn>
    <v-btn to="/orders" v-if="isLoggedIn">My orders</v-btn>


    <v-avatar to="/userprofile" v-if="isLoggedIn">
        <span class="text-h5 text-white">T</span>
    </v-avatar>
    
    <v-avatar to="/login" v-else>Login</v-avatar>
    
     </v-app-bar>

</template>