import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users',  {
    state: () => {

        const users = {
            0: {
                name: 'John Doe',
                email: 'john@example.com',
                phone: 25412345678,
                deliveryAddress: '123,Madaraka',
                password: 'alaaa',
                userType: 'Customer',
                activeAccount: true

            },
            1: {
                name: 'Joel Doe',
                email: 'joel@example.com',
                phone: 25412345678,
                deliveryAddress: '123,Madaraka',
                password: 'alaaa',
                userType: 'Customer',
                activeAccount: true

            },
            2: {
                name: 'John Doe',
                email: 'john@example.com',
                phone: 25412345678,
                deliveryAddress: '123,Madaraka',
                password: 'alaaa',
                userType: 'Customer',
                activeAccount: true

            },
            3: {
                name: 'Jack Smith',
                email: 'jack@example.com',
                phone: 25412335678,
                deliveryAddress: '123,Madaraka',
                password: 'alaaa',
                userType: 'Customer',
                activeAccount: true

            },
            4: {
                name: 'Annita Doe',
                email: 'annita@example.com',
                phone: 25412355678,
                deliveryAddress: '123,Madaraka',
                password: 'alaaa',
                userType: 'Customer',
                activeAccount: true

            },
            5: {
                name: 'Justin Doe',
                email: 'justin@example.com',
                phone: 25412347678,
                deliveryAddress: '123,Madaraka',
                password: 'alaaa',
                userType: 'Customer',
                activeAccount: false

            },
        }

        return { users}
    },
    actions:{
         
       }
    
    })
