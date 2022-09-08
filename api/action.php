<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Content-Type: text/html; charset=utf-8");

require_once 'auth.php';
$user = new Auth();

if(isset($_REQUEST['action']) && $_REQUEST['action'] == 'register') {
  $data = json_decode(file_get_contents("php://input"), TRUE);
  $name = $user->test_input($data['name']);
  $email = $user->test_input($data['email']);
  $password = $user->test_input($data['password']);
  $hassPassword = password_hash($password, PASSWORD_DEFAULT);
  $response;
  
  if($user->user_exists($email)) {
    $response = $user->showMessage('warning', 'This E-Mail is already registered!');
  } else {
    if($user->register($name, $email, $hassPassword)) {
      $response = 'register';
    } else {
      $response = $user->showMessage('danger', 'Something went wrong! try again later!');
    }
  }
  echo json_encode($response);
} else if(isset($_REQUEST['action']) && $_REQUEST['action'] == 'login') {
  $data = json_decode(file_get_contents('php://input'), true);
  $email = $user->test_input($data['email']);
  $password = $user->test_input($data['password']);
  $response;
  
  if(!$user->user_exists($email)) {
    $response = $user->showMessage('warning', 'email is not exist!', 'go to sign up?');
  } else {
    $loggedUser = $user->login($email);
    if(password_verify($password, $loggedUser['password'])) {
      if($data['rem'] !== null) {
        setcookie('email', $email, time()+60*60*24*30, '/');
        setcookie('password', $password, time()+60*60*24*30, '/');
      } else {
        setcookie('email','', 1, '/');
        setcookie('password', '', 1, '/');
      }
      $response = 'login';
    } else {
      $response = $user->showMessage('danger', 'password is incorrect!');
    }
  }
  echo json_encode($response);
}