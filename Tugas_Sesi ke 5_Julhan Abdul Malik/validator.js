module.exports = {
    isEmailValid: (email) => {
      // Validating email (simplified for example)
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
  };