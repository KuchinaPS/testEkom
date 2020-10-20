<template>
    <div class="analytics">
        <h1>Аналитика</h1>
        <div class="visits">
            <h2>Аналитика по визитам</h2>
            <Diagram />
        </div>
    </div>
</template>

<script>
    import Diagram from "../components/Diagram";
    export default {
        name: "Analytics_page",
        components:{
            Diagram,
        },
        mounted() {
            if(!localStorage.getItem("leadhit-site-id")){
                this.$router.push({path: '/'});
            }
        }
    }
</script>

<style scoped>

</style>