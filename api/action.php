<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

session_start();
require_once 'auth.php';
if(isset($_REQUEST['action']) && $_REQUEST['action'] == 'register') {
  $data = json_decode(file_get_contents("php://input"), TRUE);
  $user = new Auth();
  $name = $user->test_input($data['name']);
  $email = $user->test_input($data['email']);
  $password = $user->test_input($data['password']);
  $response;
  if($user->user_exists($email)) {
    $response = $user->showMessage('warning', 'This E-Mail is already registered!');
  } else {
    if($user->register($name, $email, $password)) {
      $response = 'register';
      $_SESSION['user'] = $email;
    } else {
      $response = $user->showMessage('danger', 'Something went wrong! try again later!');
    }
  }
  echo json_encode($response);
}
?>