<template>
    <a class="seta-button">
        <i v-if="dir === 'right'" class="fas fa-arrow-right"></i>
        <i v-else class="fas fa-arrow-left"></i>
    </a>
</template>

<script>
export default {
    name: 'SetaButton',
    props: {
        dir: String
    }
}

</script>

<style scoped>
.seta-button {
    color: #333;
    text-decoration: none;
    margin-right: 15px;
    font-size: 24px;
}
.seta-button:hover {
    color: #EF2A39;
}
</style>