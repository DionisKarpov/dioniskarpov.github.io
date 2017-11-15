var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    sourcemaps   = require('gulp-sourcemaps');
    autoprefixer = require('gulp-autoprefixer');
    paths        = {css:['./public/sass/main.scss']};

gulp.task('sass', function () {
    return gulp.src('./public/sass/**/*.scss')

        .pipe(sourcemaps.init())

        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))

        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))

        .pipe(sourcemaps.write(''))

        .pipe(gulp.dest('./public/css'))

});

gulp.task('html', function(){
  gulp.src(paths.html)
  .pipe(reload({stream:true}));
});

gulp.task('watch', function(){
    gulp.watch('./public/sass/**', ['sass']);
});

gulp.task('default', ['sass','watch']);