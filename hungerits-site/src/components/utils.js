import ToastMessage from "./ToastMessage/ToastMessage";


export function tratarRetornoApi(r) {
    if (r?.error) {
        ToastMessage.error(`Error: ${r.error}`);
    }  else if (r?.warn) {
        ToastMessage.warn(`Warning: ${r.warn}`);
    } else if (r?.info) {
        ToastMessage.info(`Info: ${r.info}`);
    } else if (r?.success) {
        ToastMessage.success(`Success: ${r.success}`);
    } else {
        ToastMessage.add(`Response: ${r}`);
    }
}