# odigotest
test for odigo


/******************TO TEST THE SITE******************************//

►install ruby.

►ruby for non windows

https://www.ruby-lang.org/en/

►ruby for windows (it adds ruby to your path and everything else automatically)

http://rubyinstaller.org/

►workaround for ruby in case you get ssl errors, this is for windows, and it affects ruby after 2.0 (bug)

https://gist.github.com/fnichol/867550

►install rails after you make ruby work

gem install rails -v 4.0.0

►launch local server by going to the folder were you downloaded the repository and running the following ruby file

server.rb 

►to see the page navigate to 

http://localhost:2345/

►the server will automatically serve the index.html file when you do this and you can start using the website


/******************TO DEVELOP******************************//

►install nodejs which will also install npm

http://nodejs.org/download/

►go to the folder were you downloaded the repository and type :

node install

►this will read the packages.js file and download all the prerequired libraries to develop, it will more importantly install

grunt

►now to finish, execute 

grunt watch

►this will execute tasks defined in the Gruntfile.js, it will compile your js and sass, minimize your html, bundle your angular modules, and minify everything automatically

►you can also run the following command if you made a change with grunt watch not running

grunt build 

►if deploying to production run grunt production, it will minify (uglify) your files so that they will weight less and the page will load faster
