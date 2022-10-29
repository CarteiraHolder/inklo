<template>
    <div class="card mb-3">
            <ol class="list-group">
                <li 
                    v-for="dev in GitDevs"
                    :key="dev.login"
                    class="list-group-item justify-content-between align-items-start"
                    @click="router.push(`/DevInfo/${dev.login}`)" 
                >
                    <div class="row">
                        <div class="col-md-1 col-2">
                            <img :src="dev.avatar_url" class="rounded-circle float-start img-fluid m-2" alt="Avatar"/>                            
                        </div>
                        <div class="col-md-10 col-8">
                            <h4 class="card-title">{{dev.name}}</h4>
                            <p>{{convertDateToPtBr(dev.created_at)}}</p>
                        </div>
                        <div class="col-md-1 col-2 text-end align-middle ">
                            <br>
                            <span class="badge bg-primary rounded-pill fs-6">{{dev.public_repos}}</span>
                        </div>
                    </div>
                </li>
            </ol>
        </div>
</template>

<script setup>
import { computed } from 'vue'

//STORE
import storeApiGit from '../store/apiGit'

//ROUTER
import router from '../router'


const GitDevs = computed(() => {
    storeApiGit.state.listGitDevs.sort((a, b) => a.name.localeCompare(b.name));

    return storeApiGit.state.filtered === ''
        ? storeApiGit.state.listGitDevs
        : storeApiGit.state.listGitDevs.filter((response) => {
            return response.name.toLowerCase().includes(storeApiGit.state.filtered.toLowerCase())
        })
})

function convertDateToPtBr(date) {
    let newDate = new Date(date)
    return newDate.toLocaleString();
}

</script>

<style>
    .img{
        width: 35px;
    }
    .mouseClick{
        cursor: pointer;
    }
</style>