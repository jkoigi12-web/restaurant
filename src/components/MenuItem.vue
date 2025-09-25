<script setup>

const menuItem={
    
        name: 'fries',
        image:"/images/menu/robby-mccullough-HNObIv6zmN0-unsplash.jpg",
        price: 950,
        description: ' Ultra-thin and crispy.',
        category: 'Main course',
    
}
</script>

<template>
    <v-container fluid class="d-flex fill-height" align="center">
        <v-row>
            <v-col md="6">
                <v-card class="pa-6 rounded-lg" justify="center"></v-card>
                <v-img :src="menuItem.image" cover height="500" ></v-img>
            </v-col>
            <v-col md="6">
                <v-card class="pa-6 rounded-lg" justify="center"></v-card>
                <v-card-title>{{menuItem.name}}</v-card-title>
                <v-card-subtitle>{{ menuItem.price }}</v-card-subtitle>
                <v-card-text>{{ menuItem.description }}</v-card-text>
                <v-card-text> Quantity <v-text-field></v-text-field></v-card-text>
                <v-card-actions>
                    <v-btn color="light-blue-lighten-1">Order</v-btn>
                </v-card-actions>
            </v-col>
        </v-row>
    </v-container>
</template>