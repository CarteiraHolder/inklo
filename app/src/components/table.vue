<template>
    <table class="table table-striped">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Avatar</th>
            <th scope="col">Nome</th>
            <th scope="col">Data de Registro</th>
            <th class="text-center" scope="col">Quantidade de Repositórios</th>
            </tr>
        </thead>
        <tbody>
            <tr 
                v-for="dev, index in GitDevs" 
                :key="dev.login" 
                @click="router.push(`/DevInfo/${dev.login}`)" 
                class="mouseClick"
            >
                <th scope="row">{{index + 1}}</th>
                <td>
                    <img :src="dev.avatar_url" class="rounded-circle float-start img-fluid img" alt="Avatar"/>
                </td>
                <td>{{dev.name}}</td>
                <td>{{convertDateToPtBr(dev.created_at)}}</td>
                <td class="text-center">{{dev.public_repos}}</td>
            </tr>
        </tbody>
    </table>
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