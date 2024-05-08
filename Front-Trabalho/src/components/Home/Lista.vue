<script setup>
import { useRouter } from 'vue-router';

</script>

<template>
    <div class="d-flex justify-content-between w-100 container p-2 bg-secondary border border-0 rounded align-items-center">
        <strong>Tarefas</strong>
        <div class="d-flex">
            <div class="d-flex align-items-center">
                <p class="w-100 m-0">Data prevista de conclusão:</p>
                <input type="date" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1">
                <p class="w-50 m-0">Até</p>
                <input type="date" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1">
                <p class="w-25 m-0">|</p>
                <p class="w-50 m-0">Status:</p>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Selecionar</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </div>
    </div>

    <img class="w-25" style="height: 100vh;" src="../../assets/notFound.svg" alt="">

</template>

<style scoped>
    div{
        color: #ED1164 !important;
    }

    .bg-secondary{
        background-color: rgba(145, 163, 173, 0.15) !important ;
    }

    input, select{
        color: #ED1164 !important;
        border-color: #ED1164 !important;
    }
</style>
