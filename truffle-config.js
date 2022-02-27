module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", 
      port: 7545, // the port ganache is running on
      network_id: "*" // Match any network id
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}