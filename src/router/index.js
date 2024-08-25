import { createRouter, createWebHistory } from 'vue-router'

import Episodes from '@/views/Episodes/Episodes.vue'
import Locations from '@/views/Locations/Locations.vue'
import Characters from '@/views/Characters/Characters.vue'
import ItemCharacter from '@/views/ItemCharacterInfo/ItemCharacterInfo.vue'

const routes = [
  { path: '/', component: Characters },
  { path: '/characters', component: Characters },
  { path: '/locations', component: Locations },
  { path: '/episodes', component: Episodes },
  { path: '/characters/:id', component: ItemCharacter }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
