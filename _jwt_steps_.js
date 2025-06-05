/**
 * Simple but not the best way
 * 1. from client side sent information
 * 2. generate token jwt.sign()
 * 3. on the client side set token to the localstorage
 *
 */

/*
    using http only cookie
    
    1. from client side send the information (email, better: firebase er auth token) to generate token
    2. on the server side, accept user information and if needed validate it
    3. generate token in the server side using secret and expiresIn

    ---------
    set the cookies
    4. wile calling the api tell to use witeCredentials

    axios.post("http://localhost:3000/jwt", userData, {
              withCredentials: true
            })
    or for fecth add option credentials: 'include'

    5. in cors setting set Credentials and origin       
    app.use(
      cors({
      origin: ["http://localhost:5173"],
      credentials: true,
      })
    );

    6. after generating the token set it to the cookies with some options

     res.cookie('token', token, {
        httpOnly:  true,
        secure: false
      })



      -------------
      7. use cookieParser as middleware
      8. for every api you wnat to verify token: in the client side: if using axios withCredentials: true for fetch: credetials include
  
      ------------
    8. check token exists. if not, return 401 --> unauthorized
    9. jwt.verify function. if err return 401 --> unauthorized
    10. if token is valid set the decoded value to the req object
    11. 
  
 */
