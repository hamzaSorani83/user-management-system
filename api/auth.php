<?php 
  require_once 'config.php';
  class Auth extends Database {
    public function register($name, $email, $password) {
      $sql = "INSERT INTO users(name, email, password) VALUES(:name, :email, :password)";
      $stmt = $this->conn->prepare($sql);
      $stmt->execute(['name' => $name, 'email' => $email, 'password' => $password]);
      return true;
    }
    
    public function login($email) {
      $sql = 'SELECT email, password FROM users WHERE email=:email AND deleted!=1';
      $stmt = $this->conn->prepare($sql);
      $stmt->execute(['email' => $email]);
      return $stmt->fetch(PDO::FETCH_ASSOC);
    } 
    
    public function user_exists($email) {
      $sql = "SELECT email FROM users WHERE email=:email AND deleted!=1";
      $stmt = $this->conn->prepare($sql);
      $stmt->execute(['email' => $email]);
      $result = $stmt->fetch(PDO::FETCH_ASSOC);
      return $result;
    }
  }
?>