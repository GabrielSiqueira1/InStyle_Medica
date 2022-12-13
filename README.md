# InStyle Medica

<div align="justify">

Integrantes do grupo:

- Fernando Garamvolgyi Mafra Veizaga - 20203001902
- Gabriel Siqueira Silva - 20203008814

# Visualização do usuário

## Diagrama de classe

Para a implementação das tarefas de cada um dos participantes do sistema pensou-se no seguinte diagrama de classe.

<div align="center">
	<img src="class_diagram/InStyleMedica.png" />
</div>

## Página principal

A primeira página irá conectar à todas as outras e ainda contará com um pequeno enunciado sobre a empresa juntamente do seu histórico.

<div align="center">
	<img src="readme-images/index.png" />
</div>

## Página de fotos

A segunda página contém algumas imagens relacionadas a empresa como equipamentos, recepção e procedimento de pesquisa.

<div align="center">
	<img src="readme-images/photos.png" />
</div>

## Página de endereços

Página auxiliar para a composição do banco de dados.

<div align="center">
	<img src="readme-images/address.png" />
</div>

## Página de agendamento - Utilização do Express.js em outra porta

Página que utilizará duas manipulações de banco de dados, uma para preenchimento de agenda como a página de endereços e outra para o preenchimento dinâmico do select para obtenção dos médicos de cada especialidade. Em relação ao horário, para facilitar a marcação de exames considerou-se que horas, data, médico e paciente sejam a chave primária.

<div align="center">
	<img src="readme-images/sched.png" />
</div>

## Página de login - Utilização do Express.js em outra porta

Página de conexão para o CRUD (Create, Read, Update, Delete). 

<div align="center">
	<img src="readme-images/login.png" />
</div>

# Visualização do administrador

## CRUD

Para esta parte do projeto, além do React e do Node.js, foram utilizadas as bibliotecas Axios, Nodemon e React-router-dom.

## Página inicial da área restrita:

![image](https://user-images.githubusercontent.com/110564584/207469662-669d45e9-3298-4c73-9cf8-85a5e23228fd.png)
	
## Opções de cadastro de funcionário:
	
![image](https://user-images.githubusercontent.com/110564584/207470746-c1c4f629-5f37-42ab-bec9-cd0b4fadb62f.png)

## Exemplo de preenchimento de cadastro de médico:

![image](https://user-images.githubusercontent.com/110564584/207470552-7a2aeb88-c3eb-44ad-b01b-2951ed020826.png)
	
## Opções de listagem de dados das tabelas:
	
![image](https://user-images.githubusercontent.com/110564584/207469883-724e5839-5fdf-45e5-9075-7d6bc19d8450.png)

## Exemplo de listagem (listagem de médicos):
	
![image](https://user-images.githubusercontent.com/110564584/207470704-0c64c304-b216-47e4-b6ee-7bfb43a6768e.png)

</div>
