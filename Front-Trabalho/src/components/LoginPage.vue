<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const logar = () => {
  router.push('/home');
};

var erro = false;


const model = {}

const enviar = async () => {
    try {

        const response = await fetch('http://localhost:8888/login', {
            method: 'POST', // ou 'PUT' dependendo do que você precisa
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(model)
        });

        const data = await response;

        console.log(data.response)

        if(data.status == 200){
          logar();

        } else {
          erro = true
          console.log(erro)
        }
        

    } catch (error) {
      console.error('Erro ao enviar model para API:', error);
    }
}
</script>

<template>
  <div class="alert alert-danger position-absolute top-0 start-50 translate-middle-x" role="alert" v-if="erro">
    Usuário nao encontrado!
  </div>
  <section class="w-100 justify-content-center">
    <div class="w-100 d-flex flex-wrap align-items-center justify-content-center">
      <svg class="mb-4" viewBox="0 0 90 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 40%;">
        <path d="M25.3559 0.187012H27.1325V24H25.3559V0.187012ZM6.60779 11.5792H15.2416V13.2156H6.60779V11.5792ZM0 0.187012V24H1.76104V1.82337H20.1039V0.187012H0Z" fill="#ED1164"/>
        <path d="M80.3221 0.0935059H66.2338V23.9065H68.0104V15.0234H68.026V13.387H68.0104V1.72987H80.1974C84.4831 1.72987 87.413 3.70909 87.413 7.48052V7.54286C87.413 11.0805 84.4208 13.387 79.9948 13.387H74.4156V15.0234H79.8857C84.8571 15.0234 89.174 12.4364 89.174 7.43377V7.37143C89.174 2.77402 85.5584 0.0935059 80.3221 0.0935059Z" fill="#ED1164"/>
        <path d="M55.9325 13.4026L47.6727 0H45.974L31.2623 23.9844H33.1013L46.8 1.94805L53.9377 13.4026H55.9325ZM58.6597 17.7974H56.6805L60.5299 23.9844H62.4623L58.6597 17.7974Z" fill="#ED1164"/>
        </svg>
      <div class="d-flex flex-wrap align-items-center mx-5 p-5 border rounded-4">
          <div class="d-flex w-100 my-2">
              <i class="bi bi-envelope fs-3 me-3"></i>
              <input type="email" class="form-control border-bottom" placeholder="email" aria-label="Username" aria-describedby="basic-addon1" v-model="model.email">
          </div>
          <div class="d-flex w-100 mb-5 mt-2">
              <i class="bi bi-lock fs-3 me-3"></i>
              <input type="password" class="form-control border-bottom" placeholder="Senha" aria-label="Senha" aria-describedby="basic-addon1" v-model="model.senha">
          </div>

          <button class="btn btn-success w-100 p-2" @click="enviar()">Entrar</button>
      </div>
    </div>
  </section>
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

    .border{
      border-color: #ED1164 !important;
    }
</style>
