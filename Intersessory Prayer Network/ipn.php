<!-- http://localhost:8080/ipn.php  make sure to start apache server  sudo apachectl start --> 

 <!-- ******* in progress ********* -->

<?php
// Start session
session_start();

// Function to generate a CSRF token
function generateCSRFToken() {
    if (!isset($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}

// Check if CSRF token is valid
function verifyCSRFToken($token) {
    return isset($_SESSION['csrf_token']) && hash_equals($_SESSION['csrf_token'], $token);
}

// Allow requests from any origin
header("Access-Control-Allow-Origin: *");
// Allow the following methods from the requesting origin
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
// Allow the following headers from the requesting origin
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
// Set content type header to JSON
header('Content-Type: application/json');

// Check if CSRF token is valid
$csrfToken = $_SERVER['HTTP_X_CSRF_TOKEN'] ?? null;
if (!verifyCSRFToken($csrfToken)) {
    // CSRF token is invalid, handle error
    http_response_code(403); // Forbidden
    echo json_encode(array("message" => "CSRF token validation failed."));
    exit();
}

// MySQL server credentials (replace with your actual credentials)
$servername = "lorem";
$username = "lorem";
$password = "lorem";
$database = "IPN";

// Establish connection to MySQL server
$conn = new mysqli($servername, $username, $password, $database);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Assign values from the form data to variables
$first_name = $_POST['first-name'] ?? '';
$last_name = $_POST['last-name'] ?? '';
$email = $_POST['email'] ?? '';
$user_password = $_POST['password'] ?? ''; // Changed variable name to avoid conflict

// Check if email already exists
$sql = "SELECT COUNT(*) AS count FROM profile WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();
$row = $result->fetch_assoc();
$count = (int) $row['count'];

// Check if email already exists
if ($count > 0) {
    // Email address already exists, send a client error response
    http_response_code(400); // Bad Request
    echo json_encode(array("message" => "Email address already exists. Please use a different email.", "count" => $count));
    exit(); // Stop further execution
} else {
    // Proceed with insertion
    // Send success response
    http_response_code(200); // OK
    echo json_encode(array("message" => "Signup successful.", "count" => $count));
}



// Check if profile picture was uploaded
if(isset($_FILES['profile-photo-input']) && $_FILES['profile-photo-input']['error'] === UPLOAD_ERR_OK) {
    $file_name = $_FILES['profile-photo-input']['name'];
    $file_tmp = $_FILES['profile-photo-input']['tmp_name'];
    $file_size = $_FILES['profile-photo-input']['size'];
    $file_type = $_FILES['profile-photo-input']['type'];

    // Define the target directory and file path
    $target_directory = "uploads/";
    $target_file = $target_directory . basename($file_name);

    // Move uploaded file to target directory
    if (move_uploaded_file($file_tmp, $target_file)) {
        $profile_picture = $target_file;
    } else {
        // Handle file upload error
        http_response_code(500); // Internal Server Error
        echo json_encode(array("message" => "Failed to upload profile picture."));
        exit();
    }
} else {
    // No profile picture uploaded
    $profile_picture = null;
}

// Proceed with insertion
$sql_insert = "INSERT INTO profile (first_name, last_name, email, password, profile_picture) VALUES (?, ?, ?, ?, ?)";
$stmt_insert = $conn->prepare($sql_insert);

// Bind parameters
if ($profile_picture !== null) {
    $stmt_insert->bind_param("sssss", $first_name, $last_name, $email, $user_password, $profile_picture);
} else {
    $stmt_insert->bind_param("ssss", $first_name, $last_name, $email, $user_password);
}

// Attempt to execute the prepared statement for insertion
if ($stmt_insert->execute()) {
    // Signup successful, send JSON response with success message
    http_response_code(200); // OK
    echo json_encode(array("message" => "Signup successful."));
} else {
    // If execution fails for any reason, handle the error
    if ($conn->errno == 1062) {
        // Handle duplicate entry error
        http_response_code(409); // Conflict
        echo json_encode(array("message" => "Email address already exists. Please use a different email."));
    } else {
        // Handle other errors
        http_response_code(500); // Internal Server Error
        echo json_encode(array("message" => "An unexpected error occurred."));
    }
}

// Close the prepared statement
$stmt_insert->close();

// Close connection
$conn->close();

?>
