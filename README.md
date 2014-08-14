grunt-init
==========

This is a boilerplate Gruntfile.js and package.json file for use in new projects. 

It includes Grunt plugins: uglify, watch, jshint, less

Default directory structure will be created if it does not exist when "grunt" is run. The default directory structure for js/less/css/src can be modified in the package.json file 

The files created in the default directory structure will be named per the project "name" also specified in the package.json file, so if you want something other that main.* for you filenames update them before running 'grunt'

Usage
==========
1.) Create local repo<br />
2.) Add remote repo ( https://github.com/magnumcreative/grunt-init.git )<br />
3.) Pull remote repo<br />
4.) Terminal > cd to local repo directory<br />
5.) sudo npm install<br />
6.) grunt<br />

Now you have a barebones working directory ready for HTML boilerplate of your choice. 

<ul>
    <li>root
    	<ul>
    	    <li>less
		    	<ul>
		    	    <li>main.less</li>
		    	</ul>
		    </li>
		    <li>css
		    	<ul>
		    	    <li>main.css</li>
		    	</ul>
		    </li>
		    <li>js
		    	<ul>
		    	    <li>main.min.js</li>
		    	</ul>
		    </li>
		    <li>src
		    	<ul>
		    	    <li>main.js</li>
		    	</ul>
		    </li>
		    <li>Gruntfile.js</li>
		    <li>package.json</li>
		    <li>.jshintrc</li>
		    <li>.gitignore</li>
    	</ul>
    </li>

</ul>




