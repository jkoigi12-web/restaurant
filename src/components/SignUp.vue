<script setup>
import {ref} from 'vue'

const showPassword = ref(false)
const showConfirmPassword = ref(false)

//models
const name = ref(null)
const phone = ref(null)
const email = ref(null)
const deliveryAddress = ref(null)
const password = ref(null)

function signup(){
    const signUpData={
        'name':name.value,
        'email':email.value,
        'phone':phone.value,
        'deliverAddress':deliveryAddress.value,
        'password':password.value,
             
    }

    try{
        // save data on browser
        localStorage.setItem("signUpData", JSON.stringify(signUpData));
        // To Do :send data to backecnd
    }catch (err) {
        console.error('Sign up process failed', err)
    }
}

</script>

<template>
    <v-container align="center">
        <v-col>
            <v-card class="pa-6" width="600" color="light-blue-lighten-1">
                <v-card-title>Sign up</v-card-title>
                <v-text-field v-model="name" label="Name" :rules="[(v) => !!v || 'Name is required']"></v-text-field>
                <v-text-field v-model="email" label="Email"    :rules="[
                            (v) => !!v || 'Email is required',
                            (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
                        ]"
                        required></v-text-field>
                <v-text-field v-model="phone" label="Phone number" type="number"></v-text-field>
                <v-text-field v-model="deliveryAddress" label="Delivery address" :rules="[(v) => !!v || 'Delivery Address is required']"></v-text-field>
                <v-text-field v-model="password" label="Password":append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPassword ? 'text' : 'password'"
                        @click:append="showPassword = !showPassword"
                        :rules="[
                            (v) => !!v || 'Password is required',
                            (v) => v.length >= 8 || 'Password must be at least 8 characters',
                        ]"
                        required ></v-text-field>
                <v-text-field v-model="name" label="confirm password"          :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showConfirmPassword ? 'text' : 'password'"
                        @click:append="showConfirmPassword = !showConfirmPassword"
                        :rules="[
                            (v) => !!v || 'Please confirm your password',
                            (v) => v === password || 'Passwords must match',
                        ]"
                        required></v-text-field>
                <v-card-text>
                    Already registered
                    <router-Link to="/login">Back to login</router-Link>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="white" variant="elevated" @click="signup()">Sign up</v-btn>
                </v-card-actions>
               
            

            </v-card>
        </v-col>
    </v-container>
</template>