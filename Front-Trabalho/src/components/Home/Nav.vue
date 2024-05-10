<script setup>
    import { useRouter } from 'vue-router';
    const router = useRouter();
    var model = {

    }

    const deslogar = () => {
        router.push('/login')
    }

    var tipo;

    const resetarForm = () => {
        model = {}
    }

    const enviar = async () => {
        try {

            const response = await fetch('http://localhost:8888/criarTarefa/6', {
                method: 'POST', // ou 'PUT' dependendo do que você precisa
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(model)
            });

            const data = await response;
            console.log('Resposta da API:', data);
            tipo = "success"

            model = {}

        } catch (error) {
            tipo = error
        console.error('Erro ao enviar model para API:', error);
        }
    }
</script>

<template>
    <div v-if="tipo == 'success'" class="alert alert-success position-absolute top-0 start-50 translate-middle-x" role="alert">
        Tarefa criada com sucesso!
    </div>
    <div class="d-flex justify-content-between w-100 container p-3">
        <img style="width: 100px;" src="../../assets/Logo.svg" alt="">
        <button type="button" class="buttonResponsive btn btn-secondary btn-sm" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"><i class="bi bi-plus-lg"></i> Adicionar tarefa</button>
        <div class="d-flex align-items-center">
            <p class="m-0 me-3">Olá, Rafael</p>
            <img class="w-25" src="../../assets/door.svg" alt="" v-on:click="deslogar()">
        </div>
    </div>
    <hr>

    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body justify-content-center">
                    <h1 class="modal-title fs-5 mb-3" id="exampleModalToggleLabel">Adicionar uma tarefa</h1>
                    <input class="form-control mb-3" type="text" placeholder="Adicionar uma tarefa" aria-label="Adicionar uma tarefa" v-model="model.nome">
                    <input class="form-control mb-3" type="date" placeholder="Default input" aria-label="default input example" v-model="model.dataConclusao">
                    <div class="d-flex justify-content-center">
                        <button class="btn btn-primary border-0" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" v-on:click="enviar()">Salvar</button>
                        <button class="btn border-0 bg-transparent text-primary text-decoration-underline" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" v-on:click="resetarForm()">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <button type="button" class="buttonResponsive2 btn btn-secondary w-100 text-primary border border-0 text-start" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"><strong><i class="bi bi-plus-circle me-3"></i>Adicionar uma tarefa</strong></button>
</template>

<style scoped>
    @media (max-width: 586px) {
        .buttonResponsive{
            display: none !important;
        }
        .buttonResponsive2{
            background-color: rgba(145, 163, 173) !important;
            position: fixed;
            bottom: 0;
            display: block !important;
        }
    }
    div, .text-primary{
        color: #ED1164 !important;
    }

    .btn-primary{
        background-color: #ED1164 !important;
    }


@media (min-width: 586px) {
    .buttonResponsive2{
        display: none !important;
    }
}


    input{
        color: #ED1164 !important;
        border-color: #ED1164 !important;
    }
</style>
