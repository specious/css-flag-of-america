var gulp     = require('gulp'),
    stylus   = require('gulp-stylus'),
    nib      = require('nib'),
    jade     = require('gulp-jade'),
    prettify = require('gulp-html-prettify')

var paths = {
  styles: 'css/**/*.styl',
  jade: '*.jade'
}

gulp.task( 'watch', function() {
  gulp.watch( paths.styles, ['styles'] )
  gulp.watch( paths.jade, ['jade'] )
} )

gulp.task( 'styles', function () {
  return gulp.src( paths.styles )
    .pipe( stylus(
      { use: [nib()] }
      ) )
    .pipe( gulp.dest( './css' ) )
} )

gulp.task( 'jade', function () {
  gulp.src( paths.jade )
    .pipe( jade() )
    .pipe( prettify( {
      indent_size: 2,
      // wrap_line_length: 32786,
      indent_inner_html: true,
      unformatted: ['a', 'span', 'strong']
    } ) )
    .pipe( gulp.dest( './' ) )
} )

gulp.task( 'default', ['styles', 'jade', 'watch'] )