var gulp=require("gulp");
var cleanCss=require("gulp-clean-css")
gulp.task("default",function(){
	return guip.src("src/style/*index.css")
	.pipe(cleanCss())
	.pipe()
})