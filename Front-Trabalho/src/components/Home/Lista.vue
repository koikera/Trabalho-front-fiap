<script setup>
    import { useRouter } from 'vue-router';

</script>

<template>
    <div class="d-flex justify-content-between w-100 container p-2 bg-secondary border border-0 rounded align-items-center">
        <strong>Tarefas</strong>
        <div class="d-flex" style="font-size: 13px">
            <div class="d-flex align-items-center">
                <p class="w-100 m-0">Data prevista de conclusão:</p>
                <input type="date" class="form-control bg-transparent" placeholder="" aria-label="Username" aria-describedby="basic-addon1">
                <p class="w-50 m-0">Até</p>
                <input type="date" class="form-control bg-transparent" placeholder="" aria-label="Username" aria-describedby="basic-addon1">
                <p class="w-25 m-0">|</p>
                <p class="w-50 m-0">Status:</p>
                <select class="form-select bg-transparent" aria-label="Default select example">
                    <option selected>Selecionar</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </div>
    </div>

    <div class="teste-hover w-100 bg-secondary container mt-2 rounded d-flex align-items-center" style="height: 60px;">
        <div class="form-check d-flex align-items-center">
            <input class="form-check-input rounded-circle" type="checkbox" style="width: 20px; height: 20px;">
            <div class="d-flex flex-column text-start">
                <label :class="{ 'strikethrough': isChecked }" class="form-check-label ms-5 text-secondary" for="flexRadioDefault1">
                    <strong>Tarefa 1</strong>
                </label>
                <label class="form-check-label ms-5 text-secondary" for="flexRadioDefault1">
                    Conclusão em: 01/10/2021
                </label>
            </div>
        </div>
    </div>

    <img class="w-25" style="height: 100vh;" src="../../assets/notFound.svg" alt="">
</template>

<style scoped>
    div{
        color: #ED1164 !important;
    }

    .strikethrough {
        text-decoration: line-through;
    }

    .bg-secondary{
        background-color: rgba(145, 163, 173, 0.15) !important ;
    }

    .teste-hover:hover{
        background-color: rgba(237, 17, 101, 0.281) !important;
        border: 1px solid #ED1164;
        color: #ED1164 !important;
    }

    input, select{
        font-size: 13px;
        color: #ED1164 !important;
        border-color: #ED1164 !important;
    }

    .form-check-input:checked{
        background-color: #ED1164 !important;
    }
</style>
