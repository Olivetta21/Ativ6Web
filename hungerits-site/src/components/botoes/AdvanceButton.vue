<template>
    <a @click="$router.push({ name: advto })" class="adv-button">
        <i class="fas fa-arrow-right"></i>
    </a>
</template>

<script>
export default {
    name: 'advButton',
    props: {
        advto: String
    }
}

</script>

<style scoped>
.adv-button {
    color: #333;
    text-decoration: none;
    margin-right: 15px;
    font-size: 24px;
}
.adv-button:hover {
    color: #EF2A39;
}
</style>