<?php 
  class Database {
    private $db = 'mysql:host=localhost;dbname=user_management_system';
    private $user = 'root';
    private $password = '';
    public $conn;
    
    public function __construct() {
      try {
        $this->conn = new PDO($this->db, $this->user, $this->password);
      } catch (\PDOException $e) {
        echo 'Error: ' .  $e->getMessage();
      }
      return $this->conn;
    }
    
    public function test_input($input) {
      $input = trim($input);
      $input = stripslashes($input);
      $input = htmlspecialchars($input);
      return $input;
    }
    
    public function showMessage($varient, $message) {
      return ['varient' => $varient, 'message' => $message];
    }
  }
?>