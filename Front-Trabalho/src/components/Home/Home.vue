<script setup>
    import Nav from './Nav.vue';
    import Lista from './Lista.vue';

</script>

<template>
      <Nav/>
      <Lista/>
</template>

<style scoped>
    section{
        min-height: 100vh;
        place-items: center;
        display: flex;
        color: #ED1164 !important;
    }

    input{
        color: #ED1164 !important;
        border-color: #ED1164 !important;
    }
</style>
