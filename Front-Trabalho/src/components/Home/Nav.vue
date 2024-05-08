<script setup>
import { useRouter } from 'vue-router';

</script>

<template>
    <div class="d-flex justify-content-between w-100 container p-3">
        <img style="width: 100px;" src="../../assets/Logo.svg" alt="">
        <button type="button" class="btn btn-secondary btn-sm"><i class="bi bi-plus-lg"></i> Adicionar tarefa</button>
        <div class="d-flex align-items-center">
            <p class="m-0 me-3">Olá, Rafael</p>
            <img class="w-25" src="../../assets/door.svg" alt="">
        </div>
    </div>
</template>

<style scoped>
    div{
        color: #ED1164 !important;
    }

    input{
        color: #ED1164 !important;
        border-color: #ED1164 !important;
    }
</style>
