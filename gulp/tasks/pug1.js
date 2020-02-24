module.exports = function () {
    $.gulp.task('pug1', () => {
        return $.gulp.src('./app/Материалы/**/*.pug') // отслеживаем
            .pipe($.plugins.pug({
                pretty: true
            }))
            .pipe($.plugins.htmlmin({ // сжимаем выходной файл
                collapseWhitespace: true
            }))
            .pipe($.gulp.dest('./build/Материалы/')); // кидаем
    });
};