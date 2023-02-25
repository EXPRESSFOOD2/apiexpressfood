const {Router} = require('express');
const passport = require('passport');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const jwt = require('jsonwebtoken')
const router = Router()


let user = {}

passport.use(new GoogleStrategy({
    //! mis credentials desde google auth - proces.env

    clientID:process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // callbackURL: "http://localhost:3001/auth/google/callback" ,
    callbackURL: "https://apiexpressfood.up.railway.app/auth/google/callback" ,

   // clientID:process.env.GOOGLE_CLIENT_ID,
   // clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  //  callbackURL: "http://localhost:3001/auth/google/callback" ,

    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
        // console.log(profile);
        console.log(profile,'asdasda');
        
      
        return done(null,profile);
        
        // todo aca se puede capturar y guardar en la bd 
        // User.findOrCreate({ googleId: profile.id }, function (err, user) {
            //   return done(err, user);
  // });
  }
  ));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser((user, done) => {
    
      done(null, user);
    
  });
 
  


router.get('/google',
  passport.authenticate('google', { scope: [ 'email', 'profile' ] }
));

router.get( '/google/callback',
    passport.authenticate( 'google', {
      // ! ruta del front que redirija al login
        failureRedirect: '/auth/failure'}),function(req, res) {
    console.log(req.user.id);
    //! guardamos la data de la sesion para enviar al front 
    user = req.user;
    const payload = { 
      userId: user.id,
      username: user.displayName,
      email: user.emails[0].value
  };
  const secretOrPrivateKey = 'mi_clave_secreta_123';
  const token = jwt.sign(payload, secretOrPrivateKey);
    //todo ruta del front para el boton
    console.log(token);
  
    res.redirect(`https://spacefood.up.railway.app/?user=${JSON.stringify({userName : user.displayName,photo:user.photos[0].value,id:user.id})}`);
    
    
   
  });
  
  
  router.get('/google_user', (req, res) => {
      
    const accessToken = jwt.sign(
      {
         id: user.id,
         name: user.name,
         email: user.email,
         avatar: user.avatar,
         provider: 'google'
      },
      'aquivaeltoken',
      { expiresIn: "3d" }
  )

  const { password, ...others } = user._doc 
   //! con use efect para realizar el cargue de la info al front
   console.log(accessToken);
   res.send(user)

  });


  router.get('/failure', (req, res) => {
  
    res.send('Error en la autenticacion')
  })






module.exports = router