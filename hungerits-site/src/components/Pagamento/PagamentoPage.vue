<template>
<body>
    <div class="container">
        <header class="header">
            <button @click="$router.push({name: 'home'})"><SetaButton dir="left"/></button>
            <h1 class="logo">Hungerits </h1>
        </header>

        <section class="section">
            <div class="summary">
                <h3>Resumo do Pedido</h3>
                <div class="row"><span>Custo do lanche</span><span>R$22.00</span></div>
                <div class="row"><span>Custo da Entrega</span><span>R$3.00</span></div>
                <div class="divider"></div>
                <div class="total"><strong>Total:</strong><strong>$25.00</strong></div>
                <div style="margin-top:10px;color:#666;font-size:13px">Tempo Até a Entrega: <span style="float:right;color:#333">15 - 30mins</span></div>
            </div>

            <h4 class="methods-title">Métodos de Pagamento</h4>

            <form class="methods" action="#" onsubmit="return false">
                <label class="method">
                    <input type="radio" name="pagamento" value="credito">
                    <span class="text">Cartão (Crédito)</span>
                    <span class="radio"><span class="dot"></span></span>
                </label>

                <label class="method">
                    <input type="radio" name="pagamento" value="debito">
                    <span class="text">Cartão (Débito)</span>
                    <span class="radio"><span class="dot"></span></span>
                </label>

                <label class="method">
                    <input type="radio" name="pagamento" value="dinheiro">
                    <span class="text">Dinheiro</span>
                    <span class="radio"><span class="dot"></span></span>
                </label>
            </form>

            <button class="confirm" @click="confirmarPedido">Confirmar Pedido</button>
        </section>
    </div>
</body>
</template>



<script>
import SetaButton from '../botoes/SetaButton.vue';


export default {
    name: 'PagamentoPage',
    components: {
        SetaButton
    }
}

</script>

<style>
    :root{
        --red: #EF2A39;
        --brown: #3C2F2F;
        --bg: #fff;
        --muted: #9b9b9b;
    }

    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:'Inter',sans-serif;background:#f7f7f7;color:#222;min-height:100vh}

    .container{max-width:420px;margin:0 auto;padding:18px}

    .header{display:flex;align-items:center;gap:12px;padding:6px 0}
    .back{font-size:20px;color:var(--brown);text-decoration:none}
    .logo{font-family:'Lobster',cursive;font-size:45px;color:var(--brown);line-height:1}

    .section{background:transparent;padding:14px 0}
    .summary{background:var(--bg);padding:18px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.05)}
    .summary h3{font-size:18px;color:var(--brown);margin-bottom:12px}
    .row{display:flex;justify-content:space-between;color:#666;margin:8px 0}
    .divider{height:1px;background:#e3e3e3;margin:12px 0}
    .total{display:flex;justify-content:space-between;align-items:center;margin-top:8px}
    .total strong{font-size:18px}

    .methods-title{margin:18px 0 8px;color:var(--brown);font-weight:600}

    .methods{display:flex;flex-direction:column;gap:12px}

    /* método do label  */
    .method{
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:12px;
        background:var(--brown);
        color:white;
        padding:14px 18px;
        border-radius:28px;
        cursor:pointer;
        box-shadow:0 6px 14px rgba(60,47,47,0.12);
        user-select:none;
    }

    .method .text{font-size:16px}

    .method input[type="radio"]{display:none}

    .radio{
        width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;border:2px solid rgba(255,255,255,0.9);
        background:transparent;flex:0 0 28px
    }

    .dot{width:14px;height:14px;border-radius:50%;background:white;opacity:0;transform:scale(0);transition:all .15s ease}

    /* quando o input dentro do label estiver checado, mostra o dot */
    .method input[type="radio"]:checked ~ .radio .dot{opacity:1;transform:scale(1)}

    /* botão de confirmar */
    .confirm{
        display:block;width:220px;margin:28px auto 40px;background:var(--brown);color:white;text-align:center;padding:12px 18px;border-radius:18px;text-decoration:none;font-weight:500;box-shadow:0 6px 16px rgba(60,47,47,0.18)
    }

    /* responsivo pequeno */
    @media (max-width:440px){.container{padding:20px}}
</style>