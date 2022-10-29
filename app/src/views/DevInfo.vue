<template>
    <div>
        <div class="card mb-3">
            <!-- <img :src="dev.avatar_url" class="card-img-top" alt="avatar"> -->
            <div class="card-body">
                <div v-if="dev != null">
                    <img :src="dev.avatar_url" class="rounded-circle float-start img-fluid img text-center m-2" alt="Avatar"/>
                    <h5 class="card-title">{{dev.name}}</h5>
                    <p>{{dev.bio}}</p>
                    <a :href="dev.html_url" target="_blank">GitHub</a>
                    <div class="row text-center mt-3">
                        <div class="col d-grid gap-2">
                            <button @click="router.back" type="button" class="btn btn-secondary">Voltar</button>
                        </div>
                        <div class="col d-grid gap-2">
                            <button type="button" class="btn btn-success">Salvar</button>
                        </div>
                    </div>
                </div>

                <placeholders v-else></placeholders>
            </div>
        </div>

        <h3 class="text-center m-4">Projetos</h3>
        <div class="card mb-3">
            <ol v-if="repos.length > 0" class="list-group ">
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
            <placeholders class="m-4" v-else></placeholders>
        </div>
        
    </div>
  
</template>

<script setup>
import { onMounted, ref } from 'vue'

//STORE
import storeApiGit from '../store/apiGit'

//ROUTER
import router from '../router'
import { useRoute } from 'vue-router'

//COMPONENT
import placeholders from '../components/placeholders.vue';

const route = useRoute()
const dev = ref(null);
const repos = ref([]);

onMounted(async () => {
    dev.value = storeApiGit.state.listGitDevs.length > 0 ?
        storeApiGit.state.listGitDevs.find(dev => dev.login === route.params.login) :
        await storeApiGit.dispatch("getUser", route.params.login)

    repos.value = await storeApiGit.dispatch("getReposUser", route.params.login)
})

function convertDateToPtBr(date) {
    let newDate = new Date(date)
    return newDate.toLocaleString();
}

</script>

<style>
.img{
     width: 75px;
}

</style>