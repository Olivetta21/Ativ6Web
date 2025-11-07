

export function tratarRetornoApi(r) {
    if (r?.error) {
        console.error("Error:", r.error);
    } else if (r?.info) {
        console.warn("Info:", r.info);
    } else if (r?.success) {
        console.log("Success:", r.success);
    } else {
        console.log("Response:", r);
    }
}