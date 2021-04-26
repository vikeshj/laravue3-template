<template>
    <div>
        <input type="text" v-model="search">
        <p> {{ search }}</p>
    </div>
</template>

<script>
    export default {
        name:'SearchDropdown',
        props:{search: '', locale: ''},
    }
</script>

<style scoped>

</style>
