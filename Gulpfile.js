var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    livereload   = require('gulp-livereload');
    sourcemaps   = require('gulp-sourcemaps');
    autoprefixer = require('gulp-autoprefixer');
    browserSync  = require('browser-sync');
    reload       = browserSync.reload;
    paths        = {html:['./index.html'], css:['./style/style.scss']};

gulp.task('sass', function () {
    return gulp.src('./style/**/*.scss')

        .pipe(sourcemaps.init())

        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))

        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))

        .pipe(sourcemaps.write(''))

        .pipe(gulp.dest('./style'))

        .pipe(reload({stream:true}));

});

gulp.task('html', function(){
  gulp.src(paths.html)
  .pipe(reload({stream:true}));
});

gulp.task('watch', function(){
    gulp.watch('./style/**', gulp.series('sass'));
    gulp.watch(paths.html, gulp.series('html'));
    
    browserSync({
      server: {
        baseDir: "./"
      },
      port: 8080,
      open: true,
      notify: false
    });
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: "./"
    },
    port: 8080,
    open: true,
    notify: false
  });
});

gulp.task('default', gulp.series('sass','watch','browserSync'));