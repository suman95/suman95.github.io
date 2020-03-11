(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<header>\n  <div class=\"profile-page sidebar-collapse\">\n    <nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent bg-primary\" color-on-scroll=\"400\">\n      <div class=\"container\">\n        <div class=\"navbar-translate\"><a class=\"navbar-brand\" href=\"#\" rel=\"tooltip\">Suman Sahu</a>\n          <button class=\"navbar-toggler navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\"\n            aria-controls=\"navigation\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span\n              class=\"navbar-toggler-bar bar1\"></span><span class=\"navbar-toggler-bar bar2\"></span><span\n              class=\"navbar-toggler-bar bar3\"></span></button>\n        </div>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n          <ul class=\"navbar-nav\">\n            <li class=\"nav-item\"><a class=\"nav-link smooth-scroll\" href=\"#about\">About</a></li>\n            <li class=\"nav-item\"><a class=\"nav-link smooth-scroll\" href=\"#skill\">Skills</a></li>\n            <li class=\"nav-item\"><a class=\"nav-link smooth-scroll\" href=\"#portfolio\">Portfolio</a></li>\n            <li class=\"nav-item\"><a class=\"nav-link smooth-scroll\" href=\"#experience\">Experience</a></li>\n            <li class=\"nav-item\"><a class=\"nav-link smooth-scroll\" href=\"#contact\">Contact</a></li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n  </div>\n</header>\n<div class=\"page-content\">\n  <div>\n    <div class=\"profile-page\">\n      <div class=\"wrapper\">\n        <div class=\"page-header page-header-small\" filter-color=\"green\">\n          <div class=\"page-header-image\" data-parallax=\"true\" style=\"background-image: url('assets/images/cover_pic.jpg');\">\n          </div>\n          <div class=\"container\">\n            <div class=\"content-center\">\n              <div class=\"cc-profile-image\"><a href=\"#\"><img src=\"assets/images/sumansahu.png\" alt=\"Image\" /></a></div>\n              <div class=\"h2 title\">Suman Sahu</div>\n              <p class=\"category text-white\">Software Developer | Full Stack, DBS Asia Hub 2 </p><a\n                class=\"btn btn-primary smooth-scroll mr-2\" href=\"#contact\" data-aos=\"zoom-in\"\n                data-aos-anchor=\"data-aos-anchor\">Hire Me</a><a class=\"btn btn-primary\"\n                href=\"https://drive.google.com/uc?export=download&id=0B915s3itr0FXOTE2a0I5ZmNiTGJTeXlqN29Kd0MwN3VUUFlF\"\n                data-aos=\"zoom-in\" data-aos-anchor=\"data-aos-anchor\">Download CV</a>\n            </div>\n          </div>\n          <div class=\"section\">\n            <div class=\"container\">\n              <div class=\"button-container\"><a class=\"btn btn-default btn-round btn-lg btn-icon\"\n                  href=\"https://in.linkedin.com/in/suman-sahu-702ba657\" rel=\"tooltip\" title=\"Follow me on LinkedIn\"><i\n                    class=\"fa fa-linkedin\"></i></a><a class=\"btn btn-default btn-round btn-lg btn-icon\"\n                  href=\"https://www.facebook.com/suman.sahu.5477\" rel=\"tooltip\" title=\"Follow me on Facebook\"><i\n                    class=\"fa fa-facebook\"></i></a><a class=\"btn btn-default btn-round btn-lg btn-icon\"\n                  href=\"https://github.com/suman95\" rel=\"tooltip\" title=\"Follow me on Github\"><i\n                    class=\"fa fa-github\"></i></a><a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"#\"\n                  rel=\"tooltip\" title=\"Follow me on Instagram\"><i class=\"fa fa-instagram\"></i></a></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"section\" id=\"about\">\n      <div class=\"container\">\n        <div class=\"card\" data-aos=\"fade-up\" data-aos-offset=\"10\">\n          <div class=\"row\">\n            <div class=\"col-lg-6 col-md-12\">\n              <div class=\"card-body\">\n                <div class=\"h4 mt-0 title\">About</div>\n                <p>Hi I am Suman Sahu currently working as a Fullstack Developer, at DBS Asia Hub 2 and building\n                  internal banking applications. I like developing and learning new stuff. New technologies always\n                  excites me and I want to learn and contribute towards its development. This website is just a\n                  introduction to Me, Myself and I.</p>\n                <p>Machine Learning, Data Science and Artificial Intelligence Enthusiast. <a\n                    href=\"https://templateflip.com/templates/creative-cv/\" target=\"_blank\">Learn More</a></p>\n              </div>\n            </div>\n            <div class=\"col-lg-6 col-md-12\">\n              <div class=\"card-body\">\n                <div class=\"h4 mt-0 title\">Basic Information</div>\n                <div class=\"row\">\n                  <div class=\"col-sm-4\"><strong class=\"text-uppercase\">Age:</strong></div>\n                  <div class=\"col-sm-8\">24</div>\n                </div>\n                <div class=\"row mt-3\">\n                  <div class=\"col-sm-4\"><strong class=\"text-uppercase\">Email:</strong></div>\n                  <div class=\"col-sm-8\">sumansahu95@gmail.com</div>\n                </div>\n                <div class=\"row mt-3\">\n                  <div class=\"col-sm-4\"><strong class=\"text-uppercase\">Phone:</strong></div>\n                  <div class=\"col-sm-8\">+91-9583364972</div>\n                </div>\n                <div class=\"row mt-3\">\n                  <div class=\"col-sm-4\"><strong class=\"text-uppercase\">Address:</strong></div>\n                  <div class=\"col-sm-8\">Hyderabad, India</div>\n                </div>\n                <div class=\"row mt-3\">\n                  <div class=\"col-sm-4\"><strong class=\"text-uppercase\">Language:</strong></div>\n                  <div class=\"col-sm-8\">English, Hindi, Oriya</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"section\" id=\"skill\">\n      <div class=\"container\">\n        <div class=\"h4 text-center mb-4 title\">Professional Skills</div>\n        <div class=\"card\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\">\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"progress-container progress-primary\"><span class=\"progress-badge\">Java</span>\n                  <div class=\"progress\">\n                    <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\"\n                      data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\"\n                      aria-valuemax=\"100\" style=\"width: 95%;\"></div><span class=\"progress-value\">95%</span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"progress-container progress-primary\"><span class=\"progress-badge\">Angular</span>\n                  <div class=\"progress\">\n                    <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\"\n                      data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\"\n                      aria-valuemax=\"100\" style=\"width: 70%;\"></div><span class=\"progress-value\">70%</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"progress-container progress-primary\"><span class=\"progress-badge\">NodeJS</span>\n                  <div class=\"progress\">\n                    <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\"\n                      data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\"\n                      aria-valuemax=\"100\" style=\"width: 80%;\"></div><span class=\"progress-value\">80%</span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"progress-container progress-primary\"><span class=\"progress-badge\">Spring Boot</span>\n                  <div class=\"progress\">\n                    <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\"\n                      data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\"\n                      aria-valuemax=\"100\" style=\"width: 95%;\"></div><span class=\"progress-value\">95%</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"progress-container progress-primary\"><span class=\"progress-badge\">Python</span>\n                  <div class=\"progress\">\n                    <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\"\n                      data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\"\n                      aria-valuemax=\"100\" style=\"width: 80%;\"></div><span class=\"progress-value\">80%</span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"progress-container progress-primary\"><span class=\"progress-badge\">Machine Learning</span>\n                  <div class=\"progress\">\n                    <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\"\n                      data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\"\n                      aria-valuemax=\"100\" style=\"width: 70%;\"></div><span class=\"progress-value\">70%</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"section\" id=\"experience\">\n      <div class=\"container cc-experience\">\n        <div class=\"h4 text-center mb-4 title\">Work Experience</div>\n        <div class=\"card\">\n          <div class=\"row\">\n            <div class=\"col-md-3 bg-primary\" data-aos=\"fade-right\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n              <div class=\"card-body cc-experience-header\">\n                <p>July 2017 - Present, Hyderabad IN</p>\n                <div class=\"h5\">DBS Asia Hub 2</div>\n              </div>\n            </div>\n            <div class=\"col-md-9\" data-aos=\"fade-left\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n              <div class=\"card-body\">\n                <div class=\"h5\">Fullstack Developer</div>\n                <p>Working on Rating approval workflow for Credit Approval Process. Responsible for development and\n                  maintenance of product. Currently using Angular as frontend technology and Spring Boot framework for\n                  the Backend.</p>\n                <ul>\n                  <li>Developed Rule engine as a micro service using NodeJS to remove some\n                    of the backend logic and faster project delivery.</li>\n                  <li>End to End delivery of a micro service for aggregating ratings from\n                    different databases. Developed using Spring Boot.</li>\n                  <li>Developed Real time dashboards for Business analysts for monitoring\n                    health of external services using NodeJS.</li>\n                  <li>Developed self-service tool for Developers to ease the process of Build\n                    locking and Release.</li>\n                  <li>Followed latest software development practices like TDD, CI/CD etc.</li>\n                  <li>Received Top Engineering Team award for 2 consecutive years.</li>\n                  <li>Received PRIDE award for my contribution to project.</li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card\">\n          <div class=\"row\">\n            <div class=\"col-md-3 bg-primary\" data-aos=\"fade-right\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n              <div class=\"card-body cc-experience-header\">\n                <p>April 2015 - June 2015, Hyderabad IN</p>\n                <div class=\"h5\">Confluence Educational services Pvt. Ltd</div>\n              </div>\n            </div>\n            <div class=\"col-md-9\" data-aos=\"fade-left\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n              <div class=\"card-body\">\n                <div class=\"h5\">Web Developer (Intern)</div>\n                <p>Developed and delivered an employee task management portal and\n                  integrated it with the company’s CRM portal.\n                  <br />Application was developed using PHP, MySQL, HTML etc.</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"section\">\n      <div class=\"container cc-education\">\n        <div class=\"h4 text-center mb-4 title\">Education</div>\n        <div class=\"card\">\n          <div class=\"row\">\n            <div class=\"col-md-3 bg-primary\" data-aos=\"fade-right\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n              <div class=\"card-body cc-education-header\">\n                <p>2012 - 2017</p>\n                <div class=\"h5\">BTech - MTech (Dual), Computer Science Engineering</div>\n              </div>\n            </div>\n            <div class=\"col-md-9\" data-aos=\"fade-left\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n              <div class=\"card-body\">\n                <div class=\"h5\">Bachelors and Masters in Computer Science and Engineering</div>\n                <p class=\"category\">National Institute of Technology, Rourkela</p>\n                <p>\n                  Completed Bachelors and Masters degree in Computer Science and Engineering with specialization\n                  in information security.\n                  <br>\n                  <strong>Key Modules : </strong>Algorithm Analysis and Design ● Operating Systems\n                  ● Compiler Design ● Principles of Programming Language ● Software Engineering\n                  ● Digital Electronics ● Advanced Data Structures ● Information Theory and Coding\n                  ● Cryptography ● Computer Networks\n                  ● Database Design and Management\n                  <br>\n                  <strong>Masters Thesis : </strong>Fast message authentication in VANETs (Vehicular adhoc networks).\n                  <br>\n                  Under the guidance of Prof. Sumanta Pyne,\n                  <br>\n                  Computer Science Department, NIT Rourkela\n                  <br>\n                  <strong>CGPA : 8.19 /10</strong>\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- <div class=\"section\" id=\"portfolio\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-6 ml-auto mr-auto\">\n              <div class=\"h4 text-center mb-4 title\">Portfolio</div>\n              <div class=\"nav-align-center\">\n                <ul class=\"nav nav-pills nav-pills-primary\" role=\"tablist\">\n                  <li class=\"nav-item\"><a class=\"nav-link active\" data-toggle=\"tab\" href=\"#web-development\"\n                      role=\"tablist\"><i class=\"fa fa-laptop\" aria-hidden=\"true\"></i></a></li>\n                  <li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#graphic-design\" role=\"tablist\"><i\n                        class=\"fa fa-picture-o\" aria-hidden=\"true\"></i></a></li>\n                  <li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"tab\" href=\"#Photography\" role=\"tablist\"><i\n                        class=\"fa fa-camera\" aria-hidden=\"true\"></i></a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\"tab-content gallery mt-5\">\n            <div class=\"tab-pane active\" id=\"web-development\">\n              <div class=\"ml-auto mr-auto\">\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"cc-porfolio-image img-raised\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\">\n                      <a href=\"#web-development\">\n                        <figure class=\"cc-effect\"><img src=\"images/project-1.jpg\" alt=\"Image\" />\n                          <figcaption>\n                            <div class=\"h4\">Recent Project</div>\n                            <p>Web Development</p>\n                          </figcaption>\n                        </figure>\n                      </a></div>\n                    <div class=\"cc-porfolio-image img-raised\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\">\n                      <a href=\"#web-development\">\n                        <figure class=\"cc-effect\"><img src=\"images/project-2.jpg\" alt=\"Image\" />\n                          <figcaption>\n                            <div class=\"h4\">Startup Project</div>\n                            <p>Web Development</p>\n                          </figcaption>\n                        </figure>\n                      </a></div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"cc-porfolio-image img-raised\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\">\n                      <a href=\"#web-development\">\n                        <figure class=\"cc-effect\"><img src=\"images/project-3.jpg\" alt=\"Image\" />\n                          <figcaption>\n                            <div class=\"h4\">Food Order Project</div>\n                            <p>Web Development</p>\n                          </figcaption>\n                        </figure>\n                      </a></div>\n                    <div class=\"cc-porfolio-image img-raised\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\">\n                      <a href=\"#web-development\">\n                        <figure class=\"cc-effect\"><img src=\"images/project-4.jpg\" alt=\"Image\" />\n                          <figcaption>\n                            <div class=\"h4\">Web Advertising Project</div>\n                            <p>Web Development</p>\n                          </figcaption>\n                        </figure>\n                      </a></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"tab-pane\" id=\"graphic-design\" role=\"tabpanel\">\n              <div class=\"ml-auto mr-auto\">\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"cc-porfolio-image img-raised\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\">\n                      <a href=\"#graphic-design\">\n                        <figure class=\"cc-effect\"><img src=\"images/graphic-design-1.jpg\" alt=\"Image\" />\n                          <figcaption>\n                            <div class=\"h4\">Triangle Pattern</div>\n                            <p>Graphic Design</p>\n                          </figcaption>\n                        </figure>\n                      </a></div>\n                    <div class=\"cc-porfolio-image img-raised\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\">\n                      <a href=\"#graphic-design\">\n                        <figure class=\"cc-effect\"><img src=\"images/graphic-design-2.jpg\" alt=\"Image\" />\n                          <figcaption>\n                            <div class=\"h4\">Abstract Umbrella</div>\n                            <p>Graphic Design</p>\n                          </figcaption>\n                        </figure>\n                      </a></div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"cc-porfolio-image img-raised\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\">\n                      <a href=\"#graphic-design\">\n                        <figure class=\"cc-effect\"><img src=\"images/graphic-design-3.jpg\" alt=\"Image\" />\n                          <figcaption>\n                            <div class=\"h4\">Cube Surface Texture</div>\n                            <p>Graphic Design</p>\n                          </figcaption>\n                        </figure>\n                      </a></div>\n                    <div class=\"cc-porfolio-image img-raised\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\">\n                      <a href=\"#graphic-design\">\n                        <figure class=\"cc-effect\"><img src=\"images/graphic-design-4.jpg\" alt=\"Image\" />\n                          <figcaption>\n                            <div class=\"h4\">Abstract Line</div>\n                            <p>Graphic Design</p>\n                          </figcaption>\n                        </figure>\n                      </a></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"tab-pane\" id=\"Photography\" role=\"tabpanel\">\n              <div class=\"ml-auto mr-auto\">\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"cc-porfolio-image img-raised\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\">\n                      <a href=\"#Photography\">\n                        <figure class=\"cc-effect\"><img src=\"images/photography-1.jpg\" alt=\"Image\" />\n                          <figcaption>\n                            <div class=\"h4\">Photoshoot</div>\n                            <p>Photography</p>\n                          </figcaption>\n                        </figure>\n                      </a></div>\n                    <div class=\"cc-porfolio-image img-raised\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\">\n                      <a href=\"#Photography\">\n                        <figure class=\"cc-effect\"><img src=\"images/photography-3.jpg\" alt=\"Image\" />\n                          <figcaption>\n                            <div class=\"h4\">Wedding Photoshoot</div>\n                            <p>Photography</p>\n                          </figcaption>\n                        </figure>\n                      </a></div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"cc-porfolio-image img-raised\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\">\n                      <a href=\"#Photography\">\n                        <figure class=\"cc-effect\"><img src=\"images/photography-2.jpg\" alt=\"Image\" />\n                          <figcaption>\n                            <div class=\"h4\">Beach Photoshoot</div>\n                            <p>Photography</p>\n                          </figcaption>\n                        </figure>\n                      </a></div>\n                    <div class=\"cc-porfolio-image img-raised\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\">\n                      <a href=\"#Photography\">\n                        <figure class=\"cc-effect\"><img src=\"images/photography-4.jpg\" alt=\"Image\" />\n                          <figcaption>\n                            <div class=\"h4\">Nature Photoshoot</div>\n                            <p>Photography</p>\n                          </figcaption>\n                        </figure>\n                      </a></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div> -->\n    <!-- <div class=\"section\" id=\"reference\">\n      <div class=\"container cc-reference\">\n        <div class=\"h4 mb-4 text-center title\">References</div>\n        <div class=\"card\" data-aos=\"zoom-in\">\n          <div class=\"carousel slide\" id=\"cc-Indicators\" data-ride=\"carousel\">\n            <ol class=\"carousel-indicators\">\n              <li class=\"active\" data-target=\"#cc-Indicators\" data-slide-to=\"0\"></li>\n              <li data-target=\"#cc-Indicators\" data-slide-to=\"1\"></li>\n              <li data-target=\"#cc-Indicators\" data-slide-to=\"2\"></li>\n            </ol>\n            <div class=\"carousel-inner\">\n              <div class=\"carousel-item active\">\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-3 cc-reference-header\"><img src=\"images/reference-image-1.jpg\"\n                      alt=\"Image\" />\n                    <div class=\"h5 pt-2\">Aiyana</div>\n                    <p class=\"category\">CEO / WEBM</p>\n                  </div>\n                  <div class=\"col-lg-10 col-md-9\">\n                    <p> Habitasse venenatis commodo tempor eleifend arcu sociis sollicitudin ante pulvinar ad, est\n                      porta cras erat ullamcorper volutpat metus duis platea convallis, tortor primis ac quisque etiam\n                      luctus nisl nullam fames. Ligula purus suscipit tempus nascetur curabitur donec nam ullamcorper,\n                      laoreet nullam mauris dui aptent facilisis neque elementum ac, risus semper felis parturient\n                      fringilla rhoncus eleifend.</p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"carousel-item\">\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-3 cc-reference-header\"><img src=\"images/reference-image-2.jpg\"\n                      alt=\"Image\" />\n                    <div class=\"h5 pt-2\">Braiden</div>\n                    <p class=\"category\">CEO / Creativem</p>\n                  </div>\n                  <div class=\"col-lg-10 col-md-9\">\n                    <p> Habitasse venenatis commodo tempor eleifend arcu sociis sollicitudin ante pulvinar ad, est\n                      porta cras erat ullamcorper volutpat metus duis platea convallis, tortor primis ac quisque etiam\n                      luctus nisl nullam fames. Ligula purus suscipit tempus nascetur curabitur donec nam ullamcorper,\n                      laoreet nullam mauris dui aptent facilisis neque elementum ac, risus semper felis parturient\n                      fringilla rhoncus eleifend.</p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"carousel-item\">\n                <div class=\"row\">\n                  <div class=\"col-lg-2 col-md-3 cc-reference-header\"><img src=\"images/reference-image-3.jpg\"\n                      alt=\"Image\" />\n                    <div class=\"h5 pt-2\">Alexander</div>\n                    <p class=\"category\">CEO / Webnote</p>\n                  </div>\n                  <div class=\"col-lg-10 col-md-9\">\n                    <p> Habitasse venenatis commodo tempor eleifend arcu sociis sollicitudin ante pulvinar ad, est\n                      porta cras erat ullamcorper volutpat metus duis platea convallis, tortor primis ac quisque etiam\n                      luctus nisl nullam fames. Ligula purus suscipit tempus nascetur curabitur donec nam ullamcorper,\n                      laoreet nullam mauris dui aptent facilisis neque elementum ac, risus semper felis parturient\n                      fringilla rhoncus eleifend.</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div> -->\n    <div class=\"section\" id=\"contact\">\n      <div class=\"cc-contact-information\" style=\"background-image: url('images/staticmap.png');\">\n        <div class=\"container\">\n          <div class=\"cc-contact\">\n            <div class=\"row\">\n              <div class=\"col-md-9\">\n                <div class=\"card mb-0\" data-aos=\"zoom-in\">\n                  <div class=\"h4 text-center title\">Contact Me</div>\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"card-body\">\n                        <form action=\"https://formspree.io/sumansahu95@gmail.com\" method=\"POST\">\n                          <div class=\"p pb-3\"><strong>Feel free to contact me </strong></div>\n                          <div class=\"row mb-3\">\n                            <div class=\"col\">\n                              <div class=\"input-group\"><span class=\"input-group-addon\"><i\n                                    class=\"fa fa-user-circle\"></i></span>\n                                <input class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"Name\"\n                                  required=\"required\" />\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"row mb-3\">\n                            <div class=\"col\">\n                              <div class=\"input-group\"><span class=\"input-group-addon\"><i\n                                    class=\"fa fa-file-text\"></i></span>\n                                <input class=\"form-control\" type=\"text\" name=\"Subject\" placeholder=\"Subject\"\n                                  required=\"required\" />\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"row mb-3\">\n                            <div class=\"col\">\n                              <div class=\"input-group\"><span class=\"input-group-addon\"><i\n                                    class=\"fa fa-envelope\"></i></span>\n                                <input class=\"form-control\" type=\"email\" name=\"_replyto\" placeholder=\"E-mail\"\n                                  required=\"required\" />\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"row mb-3\">\n                            <div class=\"col\">\n                              <div class=\"form-group\">\n                                <textarea class=\"form-control\" name=\"message\" placeholder=\"Your Message\"\n                                  required=\"required\"></textarea>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"row\">\n                            <div class=\"col\">\n                              <button class=\"btn btn-primary\" type=\"submit\">Send</button>\n                            </div>\n                          </div>\n                        </form>\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"card-body\">\n                        <p class=\"mb-0\"><strong>Address </strong></p>\n                        <p class=\"pb-2\">HIG Chitrapuri Hills, Manikonda, Hyderabad</p>\n                        <p class=\"mb-0\"><strong>Phone</strong></p>\n                        <p class=\"pb-2\">+91-9583364972</p>\n                        <p class=\"mb-0\"><strong>Email</strong></p>\n                        <p>sumansahu95@gmail.com</p>\n                        <p>sumansahu@dbs.com</p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'mySite';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sumansahu/Documents/suman95.github.io__bak/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map