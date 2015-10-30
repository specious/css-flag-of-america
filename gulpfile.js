var gulp     = require('gulp'),
    stylus   = require('gulp-stylus'),
    nib      = require('nib'),
    jade     = require('gulp-jade')

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
    .pipe( jade( { pretty: true } ) )
    .pipe( gulp.dest( './' ) )
} )

gulp.task( 'default', ['styles', 'jade', 'watch'] )