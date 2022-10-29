<template>
    <div class="m-3">
        <div class="card mb-3">
            <img :src="dev.avatar_url" class="card-img-top" alt="avatar">
            <div class="card-body">
                <h5 class="card-title">{{dev.name}}</h5>
                <p>{{dev.bio}}</p>
                <a :href="dev.html_url" target="_blank">GitHub</a>
            </div>
        </div>

        <h3 class="text-center m-4">Projetos</h3>
        <div class="card mb-3">
            <ol class="list-group ">
                <li 
                    v-for="repo in repos"
                    :key="repo.id"
                    class="list-group-item d-flex justify-content-between align-items-start"
                >
                    <div class="ms-2 me-auto">
                        <h4 class="fw-bold">{{repo.name}}</h4>
                        <p>{{repo.description}}</p>
                        <a :href="repo.archive_url">Acessar Repositorio</a>
                        
                        <br/><small class="text-small">Criado: {{convertDateToPtBr(repo.created_at)}}</small>
                        <br/><small>Atualizado: {{convertDateToPtBr(repo.pushed_at)}}</small>
                    </div>
                    <span class="badge bg-primary rounded-pill">{{repo.language}}</span>
                </li>
            </ol>
        </div>
    </div>
  
</template>

<script setup>
import { onMounted, ref } from 'vue'

//STORE
import storeApiGit from '../store/apiGit'

//ROUTER
import { useRoute } from 'vue-router'

const route = useRoute()
const dev = ref([]);
const repos = ref([]);

onMounted(async () => {
    console.log(await storeApiGit.dispatch("getUser", route.params.login));
    console.log(await storeApiGit.dispatch("getReposUser", route.params.login));
    dev.value = await storeApiGit.dispatch("getUser", route.params.login)
    repos.value = await storeApiGit.dispatch("getReposUser", route.params.login)
})

function convertDateToPtBr(date) {
    let newDate = new Date(date)
    return newDate.toLocaleString();
}

</script>

<style>

</style>