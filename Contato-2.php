<?php
include_once './connection.php';
?>

<style><?php include './style-contato.css'; ?></style>

<!DOCTYPE html>
<html lang="br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contato</title>
    <link rel="stylesheet" href="style-contato.css">
</head>

<body>
    <header class="top">
        <a href="./index.html"> <img src="assents/home/logo-1-top.png"></a>
        <a href="./doacao-dinheiro.html"><button class="bnt-top2"><h4 class="h4s">Doar Agora</h4></button></a>
         <div class="mobile-menu">
             <div class="line-1"></div>
             <div class="line-2"></div>
             <div class="line-3"></div>
         </div>
         <ul class="ul-menu-1">
             <li class="li-menu-1"><a href="./Quem-Somos.html"><h4 class="h4s">Quem somos</h4></a></li>
             <li class="li-menu-1"><a href="./Nosso-Rancho.html"><h4 class="h4s">Nosso Rancho</h4></a></li>
             <li class="li-menu-1"><a href="./Contato.html"><h4 class="h4s">Contato</h4></a></li>
             <li class="li-menu-1"> <a href="./doacao-dinheiro.html"><button class="bnt-top"><h4 class="h4s">Doar Agora</h4></button></a></li>
         </ul>
     </header>

    <div class="back"><a href="./index.html"><img src="assents/back/Arrow -1.png"> <h2 class="h4s">Contato</h2></a></div>

   <section>
    <div class="contatos">
<h3 class="h3s">Grupo Força Animal - Curitiba- Paraná</h3>
<div class="fones">
    <ul class="ul-contato">
        <h4 class="h4s">Telefones:</h4>
        <li class="li-contato"><a  target="_blank" href="http://wa.me/554199682884">
            <img src="assents/contato/vector.png" ><h4>+55 (41) 9968-2884</h4> </a></li>
        <li class="li-contato"><a  target="_blank" href="http://wa.me/554199779779">
            <img src="assents/contato/vector.png" ><h4>+55 (41) 9977-9779 </h4></a></li>
        <li class="li-contato">
            <a  target="_blank" href="http://wa.me/554199870463"><img src="assents/contato/vector.png" ><h4>+55 (41) 9987-0463</h4></a></li>
    </ul>
    <ul class="ul-redes-sociais">
        <h4 class="h4s">Redes Sociais:</h4>
        <li class="li-redes-s"> <a  target="_blank" href="https://www.facebook.com/grupoforcaanimal">
            <img src="./assents/contato/face.png" alt="face">
            <h5 class="h5s">Facebook</h5></a>
        </li>
        <li class="li-redes-s">
            <a  target="_blank" href="https://www.instagram.com/associacaogfa/"><img src="./assents/contato/instagram.png" alt="face">
            <h5 class="h5s">Instagram</h5></a>
        </li>
        <li class="li-redes-s">
            <a  target="_blank" href="https://www.youtube.com/channel/UCHoo3LwCX233dUZzxOFdSQQ"><img src="./assents/contato/youtube.png" alt="face">
            <h5 class="h5s">youtube</h5></a>
        </li>
    </ul>
    <ul class="ul-redes-sociais">
        <h4 class="h4s">Email:</h4>
        <li class="li-redes-s">
            <h5 class="h5s"><a href="mailto:grupoforcanimal@gmail.com"> grupoforcanimal@gmail.com</h5></a>
        </li>
</div>
    </div>
   
    <form class="form" action=" " method="POST">

        <input type="hidden" name="_subject" value="Novo envio!">
        <label for="Nome" class="h5s">Nome:</label> <br>
        <input type="text" name="name" id="nome" placeholder="Nome">
        <br><br>
        <label for="email" class="h5s">email:</label><br>
        <input type="email" name="email" id="email" placeholder="email@email.com">
        <br><br>
        <label for="tel" class="h5s">Telefone:</label> <br>
        <input type="tel" name="tel" id="tel" placeholder="Telefone">
        <br><br>
        <label for="assunto" class="h5s">Assunto:</label> <br>
        <input type="assunto" name="subject" id="assunto" placeholder="Assunto">
        <br><br>
         <label for="Mensagem" class="h5s">Mensagem:</label><br>
        <Textarea name="message" id="Mensagem" placeholder="Mensagem" cols="28" rows="10"></Textarea>
        <br><br>
        
        <button type="reset" id="limpar" name="limpar"><h4 class="h4s">Limpar</h4></button>
        <button type="submit" id="enviar" name="enviar" value="enviar"><h4 class="h4s">Enviar</h4></button>
       <div id="mensagem-envio"><h4 class="h4s"></h4></div>
      
    </form>
   </section>
   <?php 
$data = filter_input_array(INPUT_POST,FILTER_DEFAULT);

if (!empty ($data['enviar'])){
  //  var_dump($data);
   $query_msg = "INSERT INTO contacts_msgs (name,email,tel,subject,message,created) VALUES (:name, :email, :tel, :subject, :message, NOW())";
  $add_msg = $conn ->prepare($query_msg);
  $add_msg ->bindParam(':name',$data['name']);
  $add_msg ->bindParam(':email',$data['email']);
  $add_msg ->bindParam(':tel',$data['tel']);
  $add_msg ->bindParam(':subject',$data['subject']);
  $add_msg ->bindParam(':message',$data['message']);
  $add_msg ->execute();
  if ($add_msg ->rowCount()){
    unset ($data);
    echo "<h4 class='h4s' id='msg'>Mensagem enviada com Sucesso!</h4>";
  }else{
    echo "não mensagem enviada";
  }
}
?>


    <footer class="footer">
        <ul class="ul-menu-2">
            <li class="li-menu-2"><a href="./Quem-Somos.html"><h4 class="h4s">Quem somos</h4></a></li>
            <li class="li-menu-2"><a href="./Nosso-Rancho.html"><h4 class="h4s">Nosso Rancho</h4></a></li>
            <li class="li-menu-2"><a href="./Contato.html"><h4 class="h4s">Contato</h4></a></li>
            <li class="li-menu-2"> <a href="./doacao-dinheiro.html"><button class="bnt-top"><h4 class="h4s">Doar Agora</h4></button></a></li>
        </ul>
        <ul class="ul-menu-2-contato">
            <h3 class="h3s">Contato whatsapp</h3>
            <li class="li-menu-2-contato"><a  target="_blank" href="http://wa.me/554199682884">
                <img src="assents/home/rodape/wts.png" ><h4>+55 (41) 9968-2884</h4> </a></li>
            <li class="li-menu-2-contato"><a  target="_blank" href="http://wa.me/554199779779">
                <img src="assents/home/rodape/wts.png" ><h4>+55 (41) 9977-9779 </h4></a></li>
            <li class="li-menu-2-contato">
                <a  target="_blank" href="http://wa.me/554199870463"><img src="assents/home/rodape/wts.png" ><h4>+55 (41) 9987-0463</h4></a></li>
        </ul>

        <ul class="ul-menu-2-redes">
            <h3 class="h3s">Redes Sociais</h3>
            <div class="reds">
            <li class="li-menu-2-redes">
                <a  target="_blank" href="https://www.facebook.com/grupoforcaanimal"><img src="assents/home/rodape/facebook.png" ><h5 class="h5s">facebook</h5></a></li>
            <li class="li-menu-2-redes">
                <a  target="_blank" href="https://www.instagram.com/associacaogfa/"><img src="assents/home/rodape/insta.png" ><h5 class="h5s">Instagram</h5></a></li>
            <li class="li-menu-2-redes">
                <a  target="_blank" href="https://www.youtube.com/channel/UCHoo3LwCX233dUZzxOFdSQQ"><img src="assents/home/rodape/youtube.png" ><h5 class="h5s">Youtube</h5></a></li>
            </div>
        </ul>
    </footer>
<script src="js.js"></script>
</body>

</html>

   