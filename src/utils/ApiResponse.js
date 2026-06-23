class ApiResponse {

  constructor(stautsCode, message, data) {

    this.success = true;
    this.statusCode = stautsCode;
    this.message = message;
    this.data = data;

  }
}
module.exports = ApiResponse;