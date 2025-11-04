<template>
    <a @click="$router.push({ name: backto })" class="back-button">
        <i class="fas fa-arrow-left"></i>
    </a>
</template>

<script>
export default {
    name: 'BackButton',
    props: {
        backto: String
    }
}

</script>

<style scoped>
.back-button {
    color: #333;
    text-decoration: none;
    margin-right: 15px;
    font-size: 24px;
}
.back-button:hover {
    color: #EF2A39;
}
</style>