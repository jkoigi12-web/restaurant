<script setup>

</script>

<template>
    <!-- Carousel -->
    <v-container>
        <v-row>
            <v-carousel>
                <v-carousel-item src="/images/iwona-castiello-d-antonio-uoyp101wXDw-unsplash.jpg"></v-carousel-item>
                <v-carousel-item src="/images/patrick-tomasso-NlcCPeKNmwg-unsplash.jpg"></v-carousel-item>
                <v-carousel-item src="/images/no-revisions-d1ngW7SNehM-unsplash.jpg"></v-carousel-item>
                <v-carousel-item src="/images/clem-onojeghuo-zlABb6Gke24-unsplash.jpg"></v-carousel-item>
            </v-carousel>

        </v-row>
    </v-container>
    <!-- About -->
     <v-container>
        <v-row>
            <v-card align ="center">
                <p class="text-h4"><b>Welcome to Jikoni</b></p>
                <p class="text-h6">Welcome to Jikoni, where flavor meets culture.  
                 We are more than just a restaurant — we are a celebration of authentic home-style cooking, inspired by the rich culinary traditions of Africa and beyond.
                </p>
                <p class="text-h6">Our warm, inviting atmosphere is perfect for casual dining, family meals, or special moments with friends. Come hungry, leave happy.
                </p>
                <p class="text-h6">At Jikoni, we believe food should feel like home. Our menu is crafted with fresh, locally sourced ingredients and prepared with love, bringing you comforting meals that nourish both body and soul. Whether you’re craving traditional favorites or modern twists, every dish is made to delight.
                </p>
               
              
            </v-card>
        </v-row>
    </v-container>
    <!-- News -->
     <v-container>
        <v-row>
            <v-col md="4">
                <v-card color="light-blue-lighten-1">
                    <v-img src="/images/clem-onojeghuo-zlABb6Gke24-unsplash.jpg" class="align-end text-white" height="500" cover>
                    </v-img>
                        <v-card-title>Sample Text</v-card-title>

                    <v-card-subtitle>Sample Text 2</v-card-subtitle>
                    <v-card-actions>
                        <v-btn>Read More</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col> 
            <v-col md="4">
                <v-card color="light-blue-lighten-1">
                    <v-img src="/images/no-revisions-d1ngW7SNehM-unsplash.jpg" class="align-end text-white" height="500" cover>
                    </v-img>
                        <v-card-title>Sample Text</v-card-title>

                    <v-card-subtitle>Sample Text 2</v-card-subtitle>
                    <v-card-actions>
                        <v-btn>Read More</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col> 
            <v-col md="4">
                <v-card color="light-blue-lighten-1">
                    <v-img src="/images/iwona-castiello-d-antonio-uoyp101wXDw-unsplash.jpg" class="align-end text-white" height="500" cover>
                    </v-img>
                        <v-card-title>Sample Text</v-card-title>

                    <v-card-subtitle>Sample Text 2</v-card-subtitle>
                    <v-card-actions>
                        <v-btn>Read More</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col> 
        </v-row>
    </v-container>
    <!-- Footer -->
     <v-container>
        <v-row>
            <v-footer class="text-center d-flex flex-column ga-2 py-4" color="light-blue-lighten-1">
                <div class="d-flex ga-3">
                <v-btn icon="mdi-facebook" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="mdi-twitter" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="mdi-linkedin" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="mdi-instagram" density="comfortable" variant="text" ></v-btn>
                </div>

                <v-divider class="my-2" thickness="2" width="50"></v-divider>

             

                <v-divider></v-divider>

                <div>
                {{ new Date().getFullYear() }} — <strong>Jikoni</strong>
                </div>
            </v-footer>
            
        </v-row>
    </v-container>
</template>