const {Router} = require('express');
const passport = require('passport');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const router = Router()


let user = {}
console.log('tuki');
passport.use(new GoogleStrategy({
    //! mis credentials desde google auth - proces.env
    clientID:"973297669282-73tu1bbggreld240ep6e3lnsn1i44lng.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3001/auth/google/callback" ,
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
        // console.log(profile);
        return done(null, profile);
        
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
    // Aquí podrías redirigir al usuario a una página de éxito
          console.log(req.user);
    //! guardamos la data de la sesion para enviar al front 
    user = req.user;
    //todo ruta del front para el boton
    res.redirect('http://localhost:3000');
    // res.redirect('/login/user');
    
    
   
  });
  
  
  router.get('/google_user', (req, res) => {
      
   //! con use efect para realizar el cargue de la info al front
    res.send(user)
    

  });


  router.get('/failure', (req, res) => {
  
    res.send('Error en la autenticacion')
  })






module.exports = router