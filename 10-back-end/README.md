RF (requisitos funcionais)
RNF (requisitos não funcionais)
RN (regras de negócios)

# Recuperação da Senha

  **RF**

  - O usuário deve poder recuperar sua senha informando o seu e-mail;
  - O usuário deve poder receber um e-mail com instruções de recuperação de senha;
  - O usuário deve poder resetar sua senha;0

  **RNF**

  - Utilizar Mailtrap para testar envios em ambiente de dev;
  - Utilizar Amazon SES para envios em produção;
  - O envio de e-mails deve acontecer em segundo plano (background job);

  **RN**

  - O link enviado por email para resetar senha, deve expirar em 2h;
  - O usuário precisa confirmar a nova senha os resetar sua senha;


# Atualização do Perfil

  **RF**

  - O usuário deve poder atualiar seu nome, email e senha;

  **RN**

  - O usuário não pode alterar seu email para um email já utilizado;
  - Para atualizar sua senha, o usuário deve informar a senha antiga;
  - Para atualizar sua senha, o usuário precisa confirma a nova senha;


# Painel o Prestador

  **RF**

  - O usuário deve poder lçistar seus agendamentos de um dia específios;
  - O prestador deve receber uma notificação sempre que houver um novo agendamento;
  - O prestador deve poder visualizar as notifidações não lidas;

  **RNF**

  - Os agendamentos do prestador no ida devem ser armazenados em cache;
  - As notificações do prestador devem ser armazenadas no MongoDB;
  - As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

  **RN**

  - A notificação deve ter um status de lida ou não-lida pra que o prestador possa controlar;


# Agendamento de serviços

  **RF**

  - O usuário deve poder listar todos os prestadores de serviço cadastro;
  - O usuário deve poder listar os dias de um mês com pelo menois um horário desponível de um prestador;
  - O usuário deve poder listar horários desponíveis em um dia específico de um prestador;
  - O usuário deve poder realizar um novo agendamento com um prestador;

  **RNF**

  - A listagem de prestadores deve ser armazenada em cache;

  **RN**

  - Cada agendamento deve durar 1h exatamente;
  - Os agendamento devem estar disponíveis entre 8h às 18h (Primeiro às 8h, último às 17h);
  - O usuário não pode agendar em um horário já ocupado;
  - O usuário não pode agendar em um horário que já passou;
  - O usuário não pode agendar serviços consigo mesmo;



