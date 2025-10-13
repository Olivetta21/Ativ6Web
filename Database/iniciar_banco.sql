-- ===========================================
-- CRIAÇÃO DO BANCO DE DADOS (opcional)
-- ===========================================
CREATE DATABASE restaurante;

-- ===========================================
-- TABELA: usuario
-- ===========================================
CREATE TABLE usuario (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(100) NOT NULL,
    admin BOOLEAN DEFAULT FALSE
);

-- ===========================================
-- TABELA: mesa
-- ===========================================
CREATE TABLE mesa (
    id SERIAL PRIMARY KEY,
    local VARCHAR(100)
);

-- ===========================================
-- TABELA: prato
-- ===========================================
CREATE TABLE prato (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco NUMERIC(10,2) NOT NULL
);

-- ===========================================
-- TABELA: ingrediente
-- ===========================================
CREATE TABLE ingrediente (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    estoque NUMERIC(10,2) DEFAULT 0,
    preco_compra NUMERIC(10,2)
);

-- ===========================================
-- TABELA: ingrediente_prato (relação N:N)
-- ===========================================
CREATE TABLE ingrediente_prato (
    id SERIAL PRIMARY KEY,
    ingrediente_id INT NOT NULL,
    prato_id INT NOT NULL,
    quantidade NUMERIC(10,2) NOT NULL,

    CONSTRAINT fk_ingrediente
        FOREIGN KEY (ingrediente_id)
        REFERENCES ingrediente (id)
        ON DELETE CASCADE,

    CONSTRAINT fk_prato
        FOREIGN KEY (prato_id)
        REFERENCES prato (id)
        ON DELETE CASCADE
);

-- ===========================================
-- TABELA: pedido_cliente
-- ===========================================
CREATE TABLE pedido_cliente (
    id SERIAL PRIMARY KEY,
    prato_id INT NOT NULL,
    mesa_id INT NOT NULL,
    usuario_id INT NOT NULL,
    preco NUMERIC(10,2),
    status VARCHAR(50) DEFAULT 'pendente',

    CONSTRAINT fk_prato_pedido
        FOREIGN KEY (prato_id)
        REFERENCES prato (id)
        ON DELETE RESTRICT,

    CONSTRAINT fk_mesa_pedido
        FOREIGN KEY (mesa_id)
        REFERENCES mesa (id)
        ON DELETE SET NULL,

    CONSTRAINT fk_usuario_pedido
        FOREIGN KEY (usuario_id)
        REFERENCES usuario (id)
        ON DELETE SET NULL
);

