export const buildRegisterHTML = () => {
  return `
  <div class="modal fade" id="register-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
  <div class="modal-content">
  <div class="modal-header">
  <h5 class="modal-title" id="register-modal-title">Register</h5>
  </div>
  <div class="modal-body" id="register-modal-body">
  <div class="card-body">
  <label for="register-email--new">Email:</label>
  <input id="register-email--new" type="text" class="form-control" value="">
  <label for="register-name--new">Full Name:</label>
  <input id="register-name--new" type="text" class="form-control" value="">
  <label for="register-pw--new">Password:</label>
  <input id="register-pw--new" type="password" class="form-control" value="">
  <label for="confirm-pw--new">Confirm Password:</label>
  <input id="confirm-pw--new" type="password" class="form-control" value="">
  </div>
  </div>
  <div class="modal-footer" id="register-modal-footer">
  <button type="button" class="nav-item btn btn-light register" data-toggle="modal" data-target="#login-modal" id="switchToLogin" data-dismiss="modal">Login</button>
  <button type="button" class="btn btn-primary" id="registerButton">Register</button>
  </div>
  </div>
  </div>
  </div>
  `;
};

export const buildLoginHTML = () => {
  return `
  <div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
  <div class="modal-content">
  <div class="modal-header">
  <h5 class="modal-title" id="login-modal-title">Login</h5>
  </div>
  <div class="modal-body" id="login-modal-body">
  <div class="card-body">
  <label for="login-name--new">Email:</label>
  <input id="login-name--new" type="text" class="form-control" value="">
  <label for="login-pw--new">Password:</label>
  <input id="login-pw--new" type="password" class="form-control" value="">
  </div>
  </div>
  <div class="modal-footer" id="login-modal-footer">
  <button type="button" class="nav-item btn btn-light register" data-toggle="modal" data-target="#register-modal" id="switchToRegister" data-dismiss="modal">Register</button>
  <button type="button" class="btn btn-primary" id="loginButton">Login</button>
  </div>
  </div>
  </div>
  </div>
  `;
};
