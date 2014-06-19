Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("<i class=\"fa fa-lg fa-calendar\"></i> ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("<i class=\"fa fa-lg fa-plus\"></i> ");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("<i class=\"fa fa-lg fa-user\"></i> ");
  }

  data.buffer.push("<nav class=\"eg-navbar-top\" role=\"navigation\">\n    <div class=\"container-fluid\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">EMBERIO</a>\n        </div>\n\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav\">\n                <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "events", options) : helperMissing.call(depth0, "link-to", "events", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>                        \n                <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "event.new", options) : helperMissing.call(depth0, "link-to", "event.new", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>                        \n                <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users", options) : helperMissing.call(depth0, "link-to", "users", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n            </ul>\n        </div><!-- /.navbar-collapse -->\n    </div><!-- /.container-fluid -->\n</nav>\n<div class=\"eg-container\">\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n<!--nav class=\"eg-navbar-bottom\" role=\"navigation\">\n    <div class=\"container-fluid\">\n        <form class=\"navbar-form\" role=\"search\">\n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n        </form>\n    </div>\n</nav-->");
  return buffer;
  
});

Ember.TEMPLATES["event"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h2 class=\"text-warning\">event:</h2>");
  
});

Ember.TEMPLATES["event/error"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<p class=\"text-danger\">Error</p>");
  
});

Ember.TEMPLATES["event/new"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"panel panel-success\">\n	<div class=\"panel-heading\">\n		<h3 class=\"panel-title\">events/new</h3>\n	</div>\n	<div class=\"panel-body\">\n		<form class=\"form-horizontal\" role=\"form\">\n			<div class=\"form-group\">\n				<label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Email</label>\n				<div class=\"col-sm-10\">\n					<input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\">\n				</div>\n			</div>\n			<div class=\"form-group\">\n				<label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Password</label>\n				<div class=\"col-sm-10\">\n					<input type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\">\n				</div>\n			</div>\n			<div class=\"form-group\">\n				<div class=\"col-sm-offset-2 col-sm-10\">\n					<div class=\"checkbox\">\n						<label>\n							<input type=\"checkbox\"> Remember me\n						</label>\n					</div>\n				</div>\n			</div>\n			<div class=\"form-group\">\n				<div class=\"col-sm-offset-2 col-sm-10\">\n					<button type=\"submit\" class=\"btn btn-default\">Sign in</button>\n				</div>\n			</div>\n		</form>\n	</div>\n</div>\n\n\n\n");
  
});

Ember.TEMPLATES["events"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n	<li class=\"row-ev\">\n		<div class=\"col-pics\">\n			<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("img")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"img-ev\" alt=\"\">\n		</div>\n		<div class=\"col-infos\">\n			<ul class=\"list-inline info-host\">\n				<li><img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("imghost")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"img-host\" alt=\"\"></li>\n				<li><h4 class=\"host-username\">");
  stack1 = helpers._triageMustache.call(depth0, "event_user.0.username", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4></li>\n			</ul>\n			<div class=\"info-title\">\n				<h3>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h3>\n			</div>\n			<div class=\"info-others\">\n				<ul class=\"list-inline\">\n					<li><a href=\"\" class=\"ev-btn\"><i class=\"fa fa-eye\"></i></a></li>\n					<li><a href=\"\" class=\"ev-btn\"><i class=\"fa fa-star\"></i></a></li>\n					<li><a href=\"\" class=\"ev-btn\"><i class=\"fa fa-share-square-o\"></i></a></li>\n					<li><a href=\"\" class=\"ev-btn\"><i class=\"fa fa-map-marker\"></i> <span class=\"ev-map-link\">");
  stack1 = helpers._triageMustache.call(depth0, "address.full", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span></a></li>\n				</ul>\n			</div>\n		</div>\n		<div class=\"col-view pull-right\">\n			<a href=\"\" class=\"ev-btn-view\"><i class=\"fa fa-chevron-circle-right\"></i></a>\n		</div>\n	</li>\n	");
  return buffer;
  }

  data.buffer.push("<ul>\n	");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>");
  return buffer;
  
});

Ember.TEMPLATES["users"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h2 class=\"text-warning\">users/index</h2>    \n");
  
});

Ember.TEMPLATES["node_modules/grunt-ember-templates/test/fixtures/grandparent/parent/child"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("Should be nested.");
  
});

Ember.TEMPLATES["node_modules/grunt-ember-templates/test/fixtures/preprocess"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div>\n    <div>Spaces</div>\n	<div>Tabs</div>\n\n\n	<div   class=\"spaces  in   attrs\"></div>\n	");
  data.buffer.push(escapeExpression((helper = helpers.spaces || (depth0 && depth0.spaces),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data},helper ? helper.call(depth0, "in", "handlebars", "tags", options) : helperMissing.call(depth0, "spaces", "in", "handlebars", "tags", options))));
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["node_modules/grunt-ember-templates/test/fixtures/simple"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<p>Hello, my name is ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(".</p>");
  return buffer;
  
});

Ember.TEMPLATES["node_modules/grunt-ember-templates/test/fixtures/text"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("Basic template that does nothing.");
  
});