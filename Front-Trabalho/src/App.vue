<script setup>
import LoginPage from './components/LoginPage.vue';
    var model = {}

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
  <router-view></router-view>
  
</template>

<style scoped>


.text-primary{
        color: #ED1164 !important;
  }

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
