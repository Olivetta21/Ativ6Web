import { ref } from "vue";

class ToastMessage {
    static _messages = ref([]);
    static get messages() {return this._messages.value;}

    static add(message, type = 'info') {
        const id = Date.now();
        this.messages.push({ id, message, type });
        setTimeout(() => {
            this.remove(id);
        }, 3000);
    }

    static remove(id) {
        ToastMessage._messages.value = ToastMessage._messages.value.filter(msg => msg.id !== id);
    }

    static info(message) {
        this.add(message, 'info');
    }

    static success(message) {
        this.add(message, 'success');
    }

    static error(message) {
        this.add(message, 'error');
    }

    static warn(message) {
        this.add(message, 'warn');
    }

}


export default ToastMessage;