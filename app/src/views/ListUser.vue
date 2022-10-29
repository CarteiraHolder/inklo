<template>
    <div>
        <div class="card">
            <div class="card-body">
                <div>
                    <label for="fild" class="form-label">Filtro</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="fild" 
                        v-model="storeApiGit.state.filtered"
                        placeholder="Digite o nome do usuário para realziar o filtro">
                </div>
                <div class="mt-3">
                    <listDev></listDev>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
//COMPONENTS
import listDev from '../components/list.vue'

//STORE
import storeApiGit from '../store/apiGit'


storeApiGit.dispatch("getAllUsers")
</script>

<style>

</style>