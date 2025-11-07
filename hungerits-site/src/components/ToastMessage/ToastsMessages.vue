<template>
    <div id="toast-messages">
        <div v-for="m in messages" :key="m.id" :class="[ 'message', m.type ]" @click="remove(m.id)">
            {{ m.message }}
        </div>
    </div>
</template>


<script>
import ToastMessage from './ToastMessage';

export default {
    name: 'ToastMessages',
    data() {
        return {
            messages: ToastMessage._messages
        }
    },
    methods: {
        remove: ToastMessage.remove
    }
}
</script>

<style scoped>
#toast-messages {
    position: fixed;
    top: 0;
    right: 20px;
    z-index: 1000;
    height: 100vh;
    overflow: auto;
    pointer-events: none;
}
.message {
    background-color: rgb(212, 212, 212);
    color: white;
    padding: 10px 20px;
    margin-top: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    pointer-events: all;
}
.message:hover {
    cursor: pointer;
    opacity: 0.8;
}

.success {
    background-color: #4CAF50;
}

.error {
    background-color: #f44336;
}

.warn {
    background-color: #ff9800;
}

.info {
    background-color: #2196F3;
}

</style>