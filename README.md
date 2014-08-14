grunt-init
==========

This is a boilerplate Gruntfile.js and package.json file for use in new projects. 

It includes Grunt plugins: uglify, watch, jshint, less

Default directory structure will be created if it does not exist when "grunt" is run. The default directory structure for js/less/css/src can be modified in the package.json file 

The files created in the default directory structure will be named per the project "name" also specified in the package.json file, so if you want something other that main.* for you filenames update them before running 'grunt'

Usage
==========
1.) Create local repo<br />
2.) Add remote repo <br />
3.) Pull remote repo<br />
4.) Terminal > cd to local repo directory<br />
5.) sudo npm install<br />
6.) grunt<br />

Now you have a barebones working directory ready for HTML boilerplate of your choice. 

root<br />
   |<br />
    less<br />
        |<br />
         main.less<br />
    css<br />
       |<br />
        main.css<br />
    js<br />
      |<br />
       main.min.js<br />
    src<br />
       |<br />
        main.js<br />
    Gruntfile.js<br />
    package.json<br />
    .jshintrc<br />
    .gitignore<br />




