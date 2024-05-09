<script setup>
    import { useRouter } from 'vue-router';
    import ModalNovaTarefa from '../Shared/ModalNovaTarefa.vue'
</script>

<template>
    <div class="d-flex justify-content-between w-100 container p-3">
        <img style="width: 100px;" src="../../assets/Logo.svg" alt="">
        <button type="button" class="btn btn-secondary btn-sm" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"><i class="bi bi-plus-lg"></i> Adicionar tarefa</button>
        <div class="d-flex align-items-center">
            <p class="m-0 me-3">Olá, Rafael</p>
            <img class="w-25" src="../../assets/door.svg" alt="">
        </div>
    </div>
    <hr>

    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body justify-content-center">
                    <h1 class="modal-title fs-5 mb-3" id="exampleModalToggleLabel">Adicionar uma tarefa</h1>
                    <input class="form-control mb-3" type="text" placeholder="Adicionar uma tarefa" aria-label="Adicionar uma tarefa">
                    <input class="form-control mb-3" type="date" placeholder="Default input" aria-label="default input example">
                    <div class="d-flex justify-content-center">
                        <button class="btn btn-primary border-0" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Salvar</button>
                        <button class="btn border-0 bg-transparent text-primary text-decoration-underline" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
    
    div, .text-primary{
        color: #ED1164 !important;
    }

    .btn-primary{
        background-color: #ED1164 !important;
    }


    input{
        color: #ED1164 !important;
        border-color: #ED1164 !important;
    }
</style>
