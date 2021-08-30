// from within any request to the server, we add the token to the headers property 

// need jsonwebtoken & jwks-rsa *

// at the front end, where you would like to send a request to the server
doSomethingFunction = () => {
  this.props.auth0.getIdTokenClaims()
  .then(result => {
    const jwt = result.__raw;
    const config = {
      headers: {Authentication: `Bearer ${jwt}`},
      method: 'get',
      baseURL: 'link to the server',
      url: '/endPoint'
    };
    axios(config)
    .then(value => {
      // do something since the checking happens at the server side regarding the token
    })
  })
}

// at the back end side where you will check the token and send the response back

const someHandlerFunction = (req, res) => {
  const client = jwksClient({
    jwksUri : `https://myAuthDomain/.well-known/jwks.json`,
  });
  const getKey = (header, callback) => {
    client.getSigningKey(header.kid, (err, key) => {
      const singingKey = key.publicKey || key.rsaPublicKey;
      callback(null, singingKey);
    });
  };
  const token = req.headers.Authentication.split(" ")[1];
  jwt.verify(token, getKey, {}, (err, user) => {
    if (err) {res.send('not authorized')}
    else {
      //do something given now that we checked that the use is authorized
    }
  })
}
