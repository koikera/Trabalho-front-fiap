<script setup>
    import { useRouter } from 'vue-router';
    import { ref, onMounted } from 'vue';
    // Criar uma referência reativa para armazenar os dados das tarefas
    const tarefas2 = ref(null);


    // Use onMounted para fazer a chamada à API assim que o componente for montado
    onMounted(async () => {
        try {
            const response = await fetch('http://localhost:8888/tarefas/6'); // Substitua a URL pela sua API
            const data = await response.json();
            console.log(data);
            // Atribua os dados à referência reativa
            tarefas2.value = data;
        } catch (error) {
            console.error('Erro ao carregar tarefas:', error);
        }
    });


    const alterarStatus = async (tarefa) => {
        try {
            tarefa.isChecked = !tarefa.isChecked
            const response = await fetch('http://localhost:8888/alterarStatusTarefa', {
                method: 'PUT', // ou 'PUT' dependendo do que você precisa
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(tarefa)
            });
            const data = await response.json();
            console.log(data);
            // Atribua os dados à referência reativa
            tarefas2.value = data;
        } catch (error) {
            console.error('Erro ao carregar tarefas:', error);
        }
    }

</script>

<template>
    <div class="d-flex justify-content-between w-100 container p-2 bg-secondary border border-0 rounded align-items-center">
        <strong>Tarefas</strong>
        <div class="d-flex" style="font-size: 13px">
            <div class="filtros d-flex align-items-center">
                <p class="w-100 m-0">Data prevista de conclusão:</p>
                <input type="date" class="form-control bg-transparent" placeholder="" aria-label="Username" aria-describedby="basic-addon1">
                <p class="w-50 m-0">Até</p>
                <input type="date" class="form-control bg-transparent" placeholder="" aria-label="Username" aria-describedby="basic-addon1">
                <p class="w-25 m-0">|</p>
                <p class="w-50 m-0">Status:</p>
                <select class="form-select bg-transparent" aria-label="Default select example">
                    <option selected>Selecionar</option>
                    <option value="0">Tarefa Incompleta</option>
                    <option value="1">Tarefa Completa</option>
                </select>
            </div>

            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="filtroResponsivo">
                <path d="M15 5C13.707 5 12.605 5.844 12.187 7H4V9H12.188C12.605 10.156 13.707 11 15 11C16.293 11 17.395 10.156 17.813 9H28V7H17.812C17.395 5.844 16.294 5 15 5ZM15 7C15.563 7 16 7.438 16 8C16 8.563 15.562 9 15 9C14.437 9 14 8.562 14 8C14 7.437 14.438 7 15 7ZM22 13C20.707 13 19.605 13.844 19.187 15H4V17H19.188C19.605 18.156 20.707 19 22 19C23.293 19 24.395 18.156 24.813 17H28V15H24.812C24.395 13.844 23.293 13 22 13ZM22 15C22.563 15 23 15.438 23 16C23 16.563 22.562 17 22 17C21.437 17 21 16.562 21 16C21 15.437 21.438 15 22 15ZM11 21C9.707 21 8.605 21.844 8.187 23H4V25H8.188C8.605 26.156 9.707 27 11 27C12.293 27 13.395 26.156 13.813 25H28V23H13.812C13.395 21.844 12.293 21 11 21ZM11 23C11.563 23 12 23.438 12 24C12 24.563 11.562 25 11 25C10.437 25 10 24.562 10 24C10 23.437 10.438 23 11 23Z" fill="#ED1164"/>
            </svg>
                
        </div>
    </div>

        <div v-for="item in tarefas2" class="teste-hover w-100 bg-secondary container mt-2 rounded d-flex align-items-center" style="height: 60px;">
            <div class="form-check d-flex align-items-center">
                <input v-on:click="alterarStatus(item)" class="form-check-input rounded-circle" type="checkbox" style="width: 20px; height: 20px;" :id="'tarefa_' + index" :checked="item.ischecked">
                <div class="d-flex flex-column text-start">
                    <label :class="{ 'strikethrough': item.ischecked}" class="form-check-label ms-5 text-secondary" for="flexRadioDefault1">
                        <strong>{{item.nome}}</strong>
                    </label>
                    <label class="form-check-label ms-5 text-secondary" for="flexRadioDefault1">
                        Conclusão em: {{item.dataConclusao}}
                    </label>
                </div>
            </div>
        </div>
    
    <img v-if="tarefas2 == null" class="w-25" style="height: 100vh;" src="../../assets/notFound.svg" alt="">
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

    @media (min-width: 1000px) {
        .filtroResponsivo{
            display: none !important;
        }
    }

    @media (max-width: 1000px) {
        .filtros {
            display: none !important;
        }

        .filtroResponsivo{
            display: block !important;
        }
    }
</style>
