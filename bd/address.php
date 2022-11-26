<?php

function resposta($codigo, $ok, $msg){
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Content-Type: application/json");

    http_response_code($codigo);
    echo(json_encode([
        'ok' => $ok,
        'msg' => $msg
    ]));

    die;
}

if ($_SERVER['REQUEST_METHOD']=="OPTIONS")
    resposta(200, true, '');

if ($_SERVER['REQUEST_METHOD']!=="POST")
    resposta(400, false, "Método Inválido");

$conexao = new PDO('mysql:host=localhost;dbname=instyle', 'root', '');

$body = file_get_contents('php://input');

if(!$body)
    resposta(400, false, "Corpo da requisição não encontrado");

$body = json_decode($body);

$body->CEP = filter_var($body->CEP, FILTER_UNSAFE_RAW);
$body->logradouro = filter_var($body->logradouro, FILTER_UNSAFE_RAW);
$body->bairro = filter_var($body->bairro, FILTER_UNSAFE_RAW);
$body->cidade = filter_var($body->cidade, FILTER_UNSAFE_RAW);
$body->estado = filter_var($body->estado, FILTER_UNSAFE_RAW);

if(!$body->CEP || !$body->logradouro || !$body->bairro || !$body->cidade || !$body->estado)
    resposta(400, false, "Dados inválidos");

$stm = $conexao->prepare('INSERT INTO addressPage (CEP, logradouro, bairro, cidade, estado) VALUES (:CEP,:logradouro,:bairro,:cidade,:estado)'); 
$stm->bindParam('CEP', $body->CEP);
$stm->bindParam('logradouro', $body->logradouro);
$stm->bindParam('bairro', $body->bairro);
$stm->bindParam('cidade', $body->cidade);
$stm->bindParam('estado', $body->estado);

$stm->execute();

resposta(200, true, "Dados armazenados com sucesso");