<template>
    <div class="p-2">
        <div class="card">
            <div class="card-body">
                <div class="mb-3">
                    <label for="fild" class="form-label">Filtro</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="fild" 
                        v-model="storeApiGit.state.filtered"
                        placeholder="Digite o nome do usuário para realziar o filtro">
                </div>
                <div class="mt-3">
                    <TableDevs></TableDevs>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
//COMPONENTS
import TableDevs from '../components/table.vue'

//STORE
import storeApiGit from '../store/apiGit'


storeApiGit.dispatch("getAllUsers")
</script>

<style>

</style>