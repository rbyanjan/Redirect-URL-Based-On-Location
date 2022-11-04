import { createRouter, createWebHistory } from "vue-router";
import  Home from '../views/Home.vue'
import  Jobs from '../views/jobs/Jobs.vue'
import  JobDetails from '../views/jobs/JobDetails.vue'
import  About from '../views/About.vue'
import  NotFound from '../views/NotFound.vue'
import  UserLocation from '../views/UserLocation.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        props: true
    },
    {
        path: '/jobs',
        name: 'Jobs',
        component: Jobs,
        props: true
    },
    {
        path: '/jobs/:id',
        name: 'JobDetails',
        component: JobDetails,
        props: true
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/location',
        name: 'Location',
        component: UserLocation
    },
    //redirect
    {
        path: '/all-jobs',
        redirect: '/jobs'
    },
    {
        //use regex pattern to catch all route that doesnt match above paths
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound   
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
