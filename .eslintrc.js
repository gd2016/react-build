module.exports = {
  extends: [
    "standard", 
    "react-app"
  ],
  plugins:[
    "react"
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env:{
      "browser":true,
      "node":true,
      "es6":true
  },
  rules:{
      "strict":0,
      "valid-jsdoc":2,
      "react/jsx-uses-react":2,
      "react/jsx-uses-vars":2,
      "react/react-in-jsx-scope":2,
      "valid-jsdoc": 0
  }
}
